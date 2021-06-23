import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // in order to update our state object, we called setState
                this.setState({lat: position.coords.latitude});

                // don't do this!!!
                // this.state.lat = position.coords.latitude
            },
            err => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    // React says that we have to define render!!1
    render() {
       if (this.state.errorMessage && !this.state.lat) {
           return <div>Error: {this.state.errorMessage}</div>
       }

       if (!this.state.errorMessage && this.state.lat) {
           return <div>Latitude: {this.state.lat}</div>
       }

       return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
);