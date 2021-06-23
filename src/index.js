import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // in order to update our state object, we called setState
                this.setState({ lat: position.coords.latitude });

                // don't do this!!!
                // this.state.lat = position.coords.latitude
            } ,
            err => console.log(err)
        );
    }

    // React says that we have to define render!!1
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
);