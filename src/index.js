import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";

class App extends React.Component {
    state = {lat: null, errorMessage: '' };

    // good place to do data loading, all data loading events go in componentDidMount function
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    // good place to do more data-loading when state/props change
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('My component was just updated - it rerendered!')
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat = {this.state.lat} />
        }

        return <Spinner />;
    }

    // conditional logic goes into a helper method

    // React says that we have to define render!!1
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
);