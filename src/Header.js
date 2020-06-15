//-------------------------------------------------
// Header Javascript
// Author: Dillon Viilo
// Date: 6/14/2020
//
// A simple program that displays a header at the 
// top of the webpage using react and bootstrap.
//-------------------------------------------------

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