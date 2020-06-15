//-----------------------------------------------
// Location JavaScript
// Author: Dillon Viilo
// Date: 06/14/2020
//
// Location determines the near exact location of
// the user. It takes this information and
// displays it for the user. It also sends it to
// forecast to be used to find the correct API
// for the forecast. 
// This also imports forecast so it can sent info
// to the constructor.
//-----------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import Forecast from './forecast';

export class Location extends React.Component{
    // The consturctor contains latitude, longitude
    // error and isLoaded. Error determines if there
    // was an error and isLoaded determines if the
    // information was loaded.
    constructor(props){
        super(props);
        this.state = {  lat:null,
                        lon:null,
                        error:null,
                        isLoaded:false,
        };
    }

    // Grabs the information and puts it into the constructor using
    // setPosition as the success function. SetError sends to
    // forecast if the location does not process.
    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(this.setPosition, this.setError);
    }

    setPosition = (location) => {
                            this.setState({
                                isLoaded: true,
                                lat: location.coords.latitude,
                                lon: location.coords.longitude
                            });
			    ReactDOM.render(<Forecast lat={this.state.lat} lon={this.state.lon} />, document.getElementById("forecast"));
    }

    setError = () => {
                            this.setState({
                                lat: null,
                                lon: null,
                                error: true
                            });
                ReactDOM.render(<Forecast error={this.state.error}/>, document.getElementById("forecast"));
    }

    // Shows the information to the user to verify that the information
    // is representative of what they want to see. 
    render = () => {
        if(this.state.error){
            return(
            <div className="location">
                <h4>Location Turned Off, Please turn on Location</h4>
            </div>
            )
        } else{
            return (
                <div className="location">
                    <h4>Your latitude is: {this.state.lat}</h4>
                    <h4>Your longitude is: {this.state.lon}</h4>
                </div>
            )
        }
    }
};

export default Location;
