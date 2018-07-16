import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as  userActions from '../../redux/actions/userActions';

class SignInPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            signIn: true,
            email: '',
            password: '',
            btn : {
                clicked: false,
                disabled: false
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSwitching = this.handleSwitching.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    handleChange(e , { name, value}){
        this.setState({
            [name]: value
        });
    }

    handleSwitching(){
        if( !this.state.btn.clicked ){
            this.setState((prevState) => ({
                signIn: !prevState.signIn
            }));
        }
    }

    handleClick(){
        this.setState({
            btn: {
                clicked: true,
                disabled: true
            }
        }, () => {
            this.doAction();
        });
    }

    doAction(){
        const data = {
            email: this.state.email,
            password: this.state.password
        };

        if( this.state.signIn ) {
            this.props.userActions.login(data);
        }
        else {
            this.props.userActions.signUp(data);
        }
    }


    componentWillReceiveProps(newProps){
        if( this.props.messages.length !== newProps.messages.length  ){
            this.setState({
                btn: {
                    clicked: false,
                    disabled: false
                }
            });
        }

        if( this.props.user !== newProps.user ){
            // User auth successfully
            setTimeout(() => {
                this.props.history.push('/nearby-shops');
            }, 3000);
        }
        else {
            // User registred successfully
            if( newProps.user === null &&
                newProps.messages !== null &&
                newProps.messages[newProps.messages.length - 1].type === 'success'  ){
                this.setState({
                    signIn: true,
                    email: this.state.email,
                    password: ''
                });
            }
        }
    }


    render(){
        const { signIn, btn } = this.state;
        return (
            <div className='login-form' style={{backgroundColor: '#f7f7f7'}}>
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                        height: 100%;
                    }
                `}</style>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1'>Nearby Shops</Header>
                        <br />
                        <br />
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Email'
                                    type='email'
                                    name='email'
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    onChange={this.handleChange}
                                />

                                <Button 
                                    fluid 
                                    size='large'
                                    loading={btn.clicked}
                                    disabled={btn.disabled}
                                    color={signIn ? 'green': 'blue'}
                                    onClick={this.handleClick}
                                >
                                    { signIn ? 'Sign In' : 'Sign Up' }
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            <Link to='#' style={{color: '#363C80'}} onClick={this.handleSwitching}>
                                { signIn ? "Don't have an account? Sign Up now in 5s" : "Already have an account? Sign In" }
                            </Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages: state.messages,
        user: state.user
    };
}

function mapDispatchToProps(dispatch){
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);