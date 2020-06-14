import React from 'react';
import ReactDOM from 'react-dom';

export class Forecast extends React.Component {
    constructor(props) {
        super(props);
	console.log("Props: " + props.lat);
        this.state = {  lat:props.lat,
                        lon:props.lon,
                        error: null,
                        isLoaded: false,
        };
        
    };
    componentDidMount = () => {
	console.log("Lat is: " + this.state.lat);
    };

    render = () => {
        return (
                <div className="forecast">
                <h4>Your latitude is: { this.state.lat } </h4>
                <h4>Your longitude is: { this.state.lon } </h4>
                </div>
        );
    };
    
};

export default Forecast;
