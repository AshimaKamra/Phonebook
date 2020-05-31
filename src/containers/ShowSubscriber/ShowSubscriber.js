import React,{Component} from 'react';
import { Jumbotron,Button, UncontrolledCollapse,Card, CardBody } from 'reactstrap';
import './ShowSubscriber.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import Pagination from "react-js-pagination";
import '../SearchSubscriber/SearchSubscriber';
import SearchSubscriber from '../SearchSubscriber/SearchSubscriber';
class ShowSubscriber extends Component{
    constructor(props) {
        super(props);
        this.state = {
          search:"",
          activePage:4,
          offset:0,
          currentPage:0,
          perPage:5
          }
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
      } 
      
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
  onDeletedClick=(subscriberId)=>{
      this.props.deleteSubscriberHandler(subscriberId);
  }
  onEditClicked=(id, name, phone, email,dob)=>{
      this.props.updateContactHandler(id, name, phone, email,dob);
  }
 handleSearch=(event)=>{
     this.setState({search:event.target.value})
 }
 handlePageChange(pageNumber){
     console.log({pageNumber});
     this.setState({activePage:pageNumber});
 }
 renderSubscriber=sub=>{
     const {search}=this.state;
     if( search !== "" && sub.name.toLowerCase().indexOf( search ) === -1)
     {
         return null;
     }
     return <div >
     <div className="list clearfix">
         <div className="subscriber-name float-left">
             {sub.name}
         </div>
         
         <div className="subscriber-toggle float-right">
          <Button id="toggler-subscriber" className="toggler" style={{color:'grey'}} onClick={this.toggle}>
               +
          </Button>
          </div>
       
     </div>
     
     <hr/>
    
     <UncontrolledCollapse toggler="#toggler-subscriber" defaultOpen={this.state.collapse}>
         <Card>
        <CardBody>
        <div className="personal-details">
            <CardBody>
             <h5>Phone Number: {sub.phone}</h5>
             <h5>Email: {sub.email}</h5>
             <h5>Date of birth: {sub.dob}</h5>
            
             <Link to="/edit">
            <button className="custom-btn add-btn"  type="button" style={{color:'black',width:'100px',height:'45px',borderRadius:'6px',backgroundColor:'red'}} onClick={this.onEditClicked}>Edit</button>
             </Link>

             <button type="button" style={{color:'black',width:'100px',height:'45px',borderRadius:'6px',backgroundColor:'red'}} onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
            </CardBody>
        </div>

        </CardBody>
   </Card>
</UncontrolledCollapse>

</div>
 }
    
    render(){
       
      
        return(
            
            <div className="ShowSubscriber">
                <Jumbotron  className="showsubscriber-content">
                    {/* Searching a subscriber */}
                    <div className="search-subscriber container" >
                        <nav className="navbar navbar-inverse"style={{backgroundColor:'white'}}>
                            <div className="navbar-logo">
                            <ul className="nav navbar-nav ">
                           <li><img src={logo} style={{width:'40px',height:'50px'}}/></li>
                          </ul>
                            </div>
                       <div className="navbar-header">
                           <Link to="/" className="navbar-brand">Phone-Book</Link>
                       </div>
                       
                       <ul className="nav navbar-nav search-form">
                           <li>
                          <label htmlFor="search"></label>
                           <input id="search" className="searchInput" type="text" value={this.state.search} onChange={this.handleSearch} placeholder="search..."/></li>
                           </ul>
                     
                       </nav>
                      </div>
                      {/* <SearchSubscriber/> */}
                    {/* Output the list */}
                          <div className="subscriber-list container">
                              {
                                  
                                  this.props.subscribersList.map(sub=>{
                                      return  this.renderSubscriber(sub)
                              })
                  }
                  </div>
                         
                </Jumbotron>
                <div className="pagination-container container">
                <div className="pagination">
               <Pagination aria-label="Page navigation example" activePage={this.state.activePage} itemsCountPerPage={4} totalItemsCount={20} pageRangeDisplayed={2} onChange={this.handlePageChange.bind(this)}>
               </Pagination>
               </div>
               </div>
               <div className="add-subscriber ">
               <Link to="/add">
               <button className="custom-btn add-btn">+</button>
               </Link>
               </div>
               {/* <Footer/> */}
            </div>
            
        )
    }

}
export default ShowSubscriber;