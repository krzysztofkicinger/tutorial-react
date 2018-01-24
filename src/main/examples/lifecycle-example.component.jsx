import React, { Component } from 'react';

class LifecycleExample extends Component {

    constructor(props) {
        super(props);
        console.log('LifecycleExample - constructor: ', props);
    }

    //MOUNTING

    componentWillMount = () => console.log('Lifecycle - componentWillMount');

    componentDidMount = () => console.log('Lifecycle - componentDidMount');



    // UPDATING
    componentWillReceiveProps = (nextProps) => console.log('Lifecycle - componentWillReceiveProps: ', nextProps);

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('Lifecycle - shouldComponentUpdate: ', nextProps, nextState);
        return true;
    };

    componentWillUpdate = (nextProps, nextState) => console.log('Lifecycle - componentWillUpdate: ', nextProps, nextState);

    componentDidUpdate = (prevProps, prevState) => console.log('Lifecycle - componentDidUpdate: ', prevProps, prevState);



    componentWillUnmount = () => console.log('Lifecycle - componentWillUnmount');



    componentDidCatch = (error, info) => console.log('Lifecycle - componentDidCatch', error, info);

    render = () => {
        console.log('Lifecycle - render');
        return <p>Lifecycle Component Test - {this.props.name}</p>;
    };

}

export default LifecycleExample;