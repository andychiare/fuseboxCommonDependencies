import * as React from "react";
import { Component } from 'react';
import './App.css';
import * as logo from './logo.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.importModule("./bundle/index.js")
    }

    importModule(modulePath) {
        import(modulePath).then(() => {
            console.log(WidgetModule);
            this.setState({ loadedComponent: WidgetModule.default });
            
        });
    }

    renderComponent() {
        if (this.state.loadedComponent) {
            const Comp = this.state.loadedComponent;
            return (<Comp/>);
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React!</h2>
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                {this.renderComponent() }
            </div>
        );
    }
}

export default App;
