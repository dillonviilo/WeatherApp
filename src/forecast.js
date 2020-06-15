//---------------------------------------------------
// Forecast Javascript
// Author: Dillon Viilo
// Date: 6/14/2020
// 
// Collects information from the nation weather
// service and displays it accordingly. It is given
// information from location to connect to the API.
//---------------------------------------------------


// Imports reaact but ReactDOM is unused. It is kept in
// in case it needs to be used later.
import React from 'react';
//import ReactDOM from 'react-dom';

export class Forecast extends React.Component {
    // A constructor that is set up to by pulling
    // from props, a ReactDOM with infomration
    // holding the users current latitude and
    // longitude. The rest of the constructor
    // is used to hold each day of infomration.
    // It also holds if the information has been
    // loaded or if an error occured.
    constructor(props) {
        super(props);
        this.state = {  lat:props.lat,
                        lon:props.lon,
                        error: false,
                        isLoaded: false,
                        day1: [],
                        day2: [],
                        day3: [],
                        day4: [],
                        day5: [],
                        day6: [],
                        day7: [],
                        day8: [],
                        day9: [],
                        day10: [],
                        day11: [],
                        day12: [],
                        day13: [],
                        day14: [],
        };
        
    };

    async componentDidMount() {
        // Before proceeding, it checks if the location has been given
        // If not, it sends a console message that it is still loading.
        // This does not appear on the web browser.
        if(this.state.lat !== undefined){
            // The first url is created using the collected latitude and longitude.
            const url = "https://api.weather.gov/points/" + this.state.lat + "," + this.state.lon;
            // Response pulls info from the url
            const response = await fetch(url);
            // Data turns this resposne into a JSON.
            const data = await response.json();
            try{
                // URL2 pulls from the data JSON. This URL is then pulled from.
                const url2 = data.properties.forecast;
                //  Response2 works the same as the first response.
                const response2 = await fetch(url2);
                // Data2 is the forecast for the week pulled from the
                // provided url from the first url.
                const data2 = await response2.json();
                // a pathway called weather is created for readability.
                const weather = data2.properties.periods
                // the information is set according to the pathway.
                // It also sets the isLoaded to true to let the
                // system know the information is ready to be displayed.
                this.setState({
                    day1  : weather[0],
                    day2  : weather[1],
                    day3  : weather[2],
                    day4  : weather[3],
                    day5  : weather[4],
                    day6  : weather[5],
                    day7  : weather[6],
                    day8  : weather[7],
                    day9  : weather[8],
                    day10  : weather[9],
                    day11  : weather[10],
                    day12  : weather[11],
                    day13  : weather[12],
                    day14  : weather[13],
                    isLoaded: true
                  });
            } catch{
                // If the system fails to pulls information then
                // it logs the Error and sets error to true for
                // the webpage to read.
                console.log("Error");
                this.setState({error:true});
            }
        } else {
            // While the system waits for the location, it logs that it is loading.
            console.log("Loading");
        }
    };

    render(){
        // if the system is loaded, the webpage will load
        // the information properly.
        if(this.state.isLoaded){
            // The information is kept within serveral divs for more control over the information.
            // Weather is the whole page.
            // Container holds the information.
            // Row puts all the information into rows
            // Cell is the box that holds the information
            // Cito is the information inside the box.
            // Nucl is the background information.
            // Title is the title of the day.
            // The amount of divs may be overkill but it allows
            // More customability later through the css style sheet.
            return(
                <div className="weather">
                    <div className="container">
                        <div className="row">
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day1.name}</h2>
                                        </div>
                                        <img src={this.state.day1.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day1.temperature}° {this.state.day1.temperatureUnit}</h3>
                                        <h3>{this.state.day1.windSpeed} to the {this.state.day1.windDirection}</h3>
                                        <h3>{this.state.day1.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day2.name}</h2>
                                        </div>
                                        <img src={this.state.day2.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day2.temperature}° {this.state.day1.temperatureUnit}</h3>
                                        <h3>{this.state.day2.windSpeed} to the {this.state.day1.windDirection}</h3>
                                        <h3>{this.state.day2.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day3.name}</h2>
                                        </div>
                                        <img src={this.state.day3.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day3.temperature}° {this.state.day3.temperatureUnit}</h3>
                                        <h3>{this.state.day3.windSpeed} to the {this.state.day3.windDirection}</h3>
                                        <h3>{this.state.day3.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day4.name}</h2>
                                        </div>
                                        <img src={this.state.day4.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day4.temperature}° {this.state.day4.temperatureUnit}</h3>
                                        <h3>{this.state.day4.windSpeed} to the {this.state.day4.windDirection}</h3>
                                        <h3>{this.state.day4.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day5.name}</h2>
                                        </div>
                                        <img src={this.state.day5.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day5.temperature}° {this.state.day5.temperatureUnit}</h3>
                                        <h3>{this.state.day5.windSpeed} to the {this.state.day5.windDirection}</h3>
                                        <h3>{this.state.day5.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day6.name}</h2>
                                        </div>
                                        <img src={this.state.day6.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day6.temperature}° {this.state.day6.temperatureUnit}</h3>
                                        <h3>{this.state.day6.windSpeed} to the {this.state.day6.windDirection}</h3>
                                        <h3>{this.state.day6.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day7.name}</h2>
                                        </div>
                                        <img src={this.state.day7.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day7.temperature}° {this.state.day7.temperatureUnit}</h3>
                                        <h3>{this.state.day7.windSpeed} to the {this.state.day7.windDirection}</h3>
                                        <h3>{this.state.day7.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day7.name}</h2>
                                        </div>
                                        <img src={this.state.day8.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day8.temperature}° {this.state.day8.temperatureUnit}</h3>
                                        <h3>{this.state.day8.windSpeed} to the {this.state.day8.windDirection}</h3>
                                        <h3>{this.state.day8.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day8.name}</h2>
                                        </div>
                                        <img src={this.state.day9.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day9.temperature}° {this.state.day9.temperatureUnit}</h3>
                                        <h3>{this.state.day9.windSpeed} to the {this.state.day9.windDirection}</h3>
                                        <h3>{this.state.day9.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day9.name}</h2>
                                        </div>
                                        <img src={this.state.day10.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day10.temperature}° {this.state.day10.temperatureUnit}</h3>
                                        <h3>{this.state.day10.windSpeed} to the {this.state.day10.windDirection}</h3>
                                        <h3>{this.state.day10.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day11.name}</h2>
                                        </div>
                                        <img src={this.state.day11.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day11.temperature}° {this.state.day11.temperatureUnit}</h3>
                                        <h3>{this.state.day11.windSpeed} to the {this.state.day11.windDirection}</h3>
                                        <h3>{this.state.day11.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day12.name}</h2>
                                        </div>
                                        <img src={this.state.day12.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day12.temperature}° {this.state.day12.temperatureUnit}</h3>
                                        <h3>{this.state.day12.windSpeed} to the {this.state.day12.windDirection}</h3>
                                        <h3>{this.state.day12.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day13.name}</h2>
                                        </div>
                                        <img src={this.state.day13.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day13.temperature}° {this.state.day13.temperatureUnit}</h3>
                                        <h3>{this.state.day13.windSpeed} to the {this.state.day13.windDirection}</h3>
                                        <h3>{this.state.day13.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cito">
                                    <div className="nucl">
                                        <div className="title">
                                            <h2>{this.state.day14.name}</h2>
                                        </div>
                                        <img src={this.state.day14.icon} alt="Lamp" width="%100" height="%100"></img>
                                        <h3>{this.state.day14.temperature}° {this.state.day14.temperatureUnit}</h3>
                                        <h3>{this.state.day14.windSpeed} to the {this.state.day14.windDirection}</h3>
                                        <h3>{this.state.day14.shortForecast}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
            )
        }
        else if(this.state.error){
            // If an error occurs, the user is notified of the error.
            return(
                <div>
                    <h4>An Error Occured</h4>
                </div>
            )
        }
         else{
            // While the webpage waits for weather information, it returns
            // empty html but notifies the console that it is loading.
            // Because this process is nearly instantaneous, there is no need
            // to notify the user.
            console.log("Loading");
            return(
                <h4> </h4>
            );
        }
    };
    
};

// Exports Forecast
export default Forecast;
