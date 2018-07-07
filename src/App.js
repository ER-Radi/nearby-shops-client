import React from 'react';
import Header from './components/Common/Header'; 

const App = ({children}) => (
    <div>
        <Header />
        { children }
    </div>
)

export default App;