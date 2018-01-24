import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LifecycleExample from './examples/lifecycle-example.component';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'John'
        };
        setTimeout(() => {
            this.setState({
                name: 'Chris'
            });
            // console.log('Properties updated.');
        }, 2000);
    }



   render = () => {

       return <LifecycleExample name={this.state.name} />
   }

};

ReactDOM.render(
    <App />,
    document.getElementById("container")
);
