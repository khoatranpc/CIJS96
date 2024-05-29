import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Text from './Text.jsx';

const fncConsole = () => {
    console.log('HIHIH');
};
ReactDOM.createRoot(document.getElementById('root')).render(
    <App
        message="message"
        age={10}
        clg={fncConsole}
        hello={<h1 style={{ color: 'red' }}>Hello</h1>}
    >
        <Text>
            <div>Khoa đẹp trai</div>
        </Text>
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
    </App>
)
