import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';

import * as messageActions from './redux/actions/messageActions'

import Header from './components/Common/Header';


class App extends React.Component {

    componentWillReceiveProps(newProps){
        if( newProps.messages.length > 0 ){
            const { messages } = newProps;
            for( const message of messages ){
                const type = (message.type === 'error')? toast.TYPE.ERROR : toast.TYPE.SUCCESS;
                toast(message.content, {
                    type,
                    autoClose: 4000,
                    closeButton: true
                });
            }
            setTimeout(() => {
                this.props.actions.resetMessages()
            }, 5000);
        }
    }

    render(){
        const { children } = this.props;
        return (
            <div>
                {/* <Header /> */}
                { children }
                <ToastContainer />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(messageActions, dispatch)
    }
}

export default connect(
    state => ({
        messages: state.messages
    })
    , mapDispatchToProps )(App);