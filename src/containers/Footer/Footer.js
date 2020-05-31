import React,{Component} from 'react';
import {Jumbotron} from 'reactstrap';
import { FaHome } from 'react-icons/fa';
import {FaEnvelopeSquare} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa'
import './Footer.css';
class Footer extends Component
{
    render(){
        return(
            <div>
                <Jumbotron className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 icon-container">
                           <FaHome className="icon"/>
                           <h6><a href="#">Sri Ganganagar, Rajasthan</a></h6>
                            </div>
                            <div className="col-sm-3 icon-container">
                             <FaEnvelopeSquare className="icon"/>
                             <h6><a href="#">ashima171151.cse@chitkara.edu.in</a></h6>
                            </div>
                            <div className="col-sm-3 icon-container">
                                <FaGithub className="icon"/>
                                <h6><a href="https://github.com/AshimaKamra" target="_blank">AshimaKamra</a></h6>
                            </div>
                            <div className="col-sm-3 icon-container">
                                <FaLinkedin className="icon"/>
                                <h6><a href="https://www.linkedin.com/in/ashimakamra/" target="_blank">Ashima Kamra</a></h6>
                            </div>
                            
                        </div>
                        </div>
                </Jumbotron>
            </div>
        )
    }
}
export default Footer;