import React from 'react';
//import ReactDOM from 'react-dom';

export class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <h1>Weather Report</h1>
                <h3>By Dillon Viilo</h3>
            </div>
        );
    }
};

export default Header;