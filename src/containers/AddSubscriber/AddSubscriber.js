import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import './AddSubscriber.css'

class AddSubscriber extends Component{
    constructor(){
        super();
        this.state={
            id:0,
            name:'',
            phone:'',
            email:'',
            dob:''
        }
    }
    inputChangeHandler=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
    }
    onFormSubmitted=(e)=>{
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState
        ({
            id:0,
            name:'',
            phone:'',
            email:'',
            dob:''
        });
        this.props.history.push("/");
    }
    render(){
        const {name, phone, email,dob}=this.state;
        return(
            <div>
            <div className="add-sub">
                <Jumbotron>
                    <div className="add-sub-container container">
                        <Link to="/">
                            <button className="custom-btn" style={{float:'left'}}>Back</button>
                        </Link>
                        <div className="add-sub-heading">
                            <h2 style={{textAlign:'center',textDecoration:'overline underline'}}>Add Subscriber</h2>
                            <p style={{textAlign:'center'}}>Fill out the form to add a new contact to your phonebook</p>
                        </div>
                        <div className="form">
                            <div className="form-container">
                        <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                            <label htmlFor="name" className="label-control"></label>
                            <input id="name" type="text" className="input-control" name="name" placeholder="Your Name" onChange={this.inputChangeHandler}/><br/><br/>
                            <label htmlFor="phone" className="label-control"></label>
                            <input id="phone" type="text" className="input-control" name="phone" placeholder="Phone Number" onChange={this.inputChangeHandler}/><br/><br/>
                            <label htmlFor="email" className="label-control"></label>
                            <input id="email" type="email" className="input-control" name="email" placeholder="Your Email" onChange={this.inputChangeHandler}/><br/><br/>
                            <label htmlFor="dob" className="label-control"></label>
                            <input id="dob" type="text" className="input-control" name="date" placeholder="Date of birth" onChange={this.inputChangeHandler}/><br/>
                            <br/>
                            <button type="submit" className="custom-btn add-sub-btn">Add</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </Jumbotron>
            </div>
            </div>
        )
    }
}
export default AddSubscriber;