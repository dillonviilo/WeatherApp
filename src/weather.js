import React from 'react';
//import ReactDOM from 'react-dom';

class Location extends React.Component{
    constructor(props){
        super(props);
        this.state = {  
            lat:null,
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
    }

    getUrl(){
        return "https://api.weather.gov/points/" + this.lat + "," + this.lon;
    }
}

class Weather extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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
    }


    async componentDidMount() {
      var location = new Location();
      var x = location.getUrl();
      console.log(x)
      const url = "https://api.weather.gov/points/39.7456,-97.0892";
      //const url = "https://api.weather.gov/points/" + location.state.lat + "," + location.state.lon;
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      try{
        const url2 = data.properties.forecast;
        console.log(url2);
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        const weather = data2.properties.periods
        console.log(weather);
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
      } catch (error) {
          console.error(error);
          this.setState({error:true});
      }
    }
  
    render() {
    if (this.state.error){
        return(<h1>An error occured</h1>)
    } else{
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
                                <h3>{this.state.day2.temperature}° {this.state.day2.temperatureUnit}</h3>
                                <h3>{this.state.day2.windSpeed} to the {this.state.day2.windDirection}</h3>
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
                                    <h2>{this.state.day8.name}</h2>
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
                                    <h2>{this.state.day9.name}</h2>
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
                                    <h2>{this.state.day10.name}</h2>
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
      );
    }
    }
  }

export default Weather;