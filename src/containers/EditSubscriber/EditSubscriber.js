import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron } from 'reactstrap';


class EditSubscriber extends Component
{
    constructor(props){
        super(props);
        this.state={
            name: this.props.name,
            phone: this.props.phone,
            email: this.props.email,
            dob: this.props.dob
        }
    }
    handleInput(e) {
        this.setState({
          [e.target.name]: e.target.value,
          
        });
      }
    save(id) {
        if (this.state.name.trim() !== ''
          && this.state.phone.trim() !== ''
          && this.state.email.trim() !== ''
          &&this.state.dob.trim()!=='') 
        {
          this.props.onSave(this.state.name, this.state.phone, this.state.email,this.state.dob, id);
        }
      }
      render(){
        return(
          <div>
              <div className="edit-sub">
                  <Jumbotron>
                      <div className="edit-sub-container container">
                          <Link to="/">
                              <button className="custom-btn"style={{float:'left'}}>Back</button>
                          </Link>
                          <div className="edit-sub-heading">
                          <h2 style={{textAlign:'center',textDecoration:'overline underline'}}>Update Subscriber</h2>
                            <p style={{textAlign:'center'}}>Fill out the form to edit contact to your phonebook</p>
                          </div>
                          <div className="form">
                              <div className="form-container">
                                 
                                    <input className="input-control" onChange={(e)=>this.handleInput(e)} value={this.state.name?this.state.name:''} placeholder="name" name="name"/><br/>
                                    <input className="input-control" onChange={(e)=>this.handleInput(e)} value={this.state.phone} name="phone" placeholder="phone"/><br/>
                                    <input className="input-control" onChange={(e)=>this.handleInput(e)} value={this.state.email} name="email" placeholder="email"/><br/>
                                    <input className="input-control" onChange={(e)=>this.handleInput(e)} value={this.state.dob} name="dob" placeholder="dob"/><br/>
                                <div className="action-column">
                                    <span className="saveContact" onClick={()=>this.save(this.props.id)}>
                                        Save
                                    </span>
                                </div>


                              </div>
                          </div>
                      </div>
                  </Jumbotron>
              </div>
          </div>
        )

      }
}
export default EditSubscriber;