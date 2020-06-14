import React from 'react';
import ReactDOM from 'react-dom';
import Forecast from './forecast';

export class Location extends React.Component{
    constructor(props){
        super(props);
        this.state = {  lat:null,
                        lon:null,
                        error:null,
                        isLoaded:false,
        };
    }

    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(this.setPosition);
    }

    setPosition = (location) => {
                            this.setState({
                                isLoaded: true,
                                lat: location.coords.latitude,
                                lon: location.coords.longitude
                            });
			    ReactDOM.render(<Forecast lat={this.state.lat} lon={this.state.lon} />, document.getElementById("forecast"));
    }

    render = () => {
        return (
            <div className="location">
                <h4>Your latitude is: {this.state.lat}</h4>
                <h4>Your longitude is: {this.state.lon}</h4>
            </div>
        )
    }
};

export default Location;
