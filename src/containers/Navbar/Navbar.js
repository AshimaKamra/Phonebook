import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import './Navbar.css';
class Navbar extends Component
{
    render(){
        return(
            <div className="Navbar">
                    <Jumbotron style={{backgroundColor:'black'}}>
                    <h2 style={{textAlign:"center"}}>RM-PhoneBook</h2>
                    </Jumbotron>
            </div>
        )
    }
}
export default Navbar;