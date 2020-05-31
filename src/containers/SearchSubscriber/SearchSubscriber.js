import React,{Component} from 'react';
import logo from '../../assets/logo.jpg';
import {Link} from 'react-router-dom';
import './SearchSubscriber.css'
import ShowSubscriber from '../ShowSubscriber/ShowSubscriber';
class SearchSubscriber extends Component
{
    constructor(props){
        super(props);
        this.state={
            subscribersList: this.props.subscribersList,
            search:'',
            sortingColumn:null,
            sortType:'none',
            showForm:false
        }
    }
    handleSearch(e) {
        this.setState({search: e.target.value});
      }
    render(){
        let allContacts=this.state.subscribersList;
        const searchQuery=this.state.search.trim().toLowerCase();
        if(searchQuery.length>0)
        {
            allContacts=allContacts.filter(function(el){
                return el.name.toLowerCase().includes(searchQuery)||el.phone.toLowerCase().includes(searchQuery)||el.email.toLowerCase().includes(searchQuery);
            });
        }
        allContacts=allContacts.map((element,index)=>{
            return <ShowSubscriber
            key={index}
            name={element.name}
            phone={element.phone}
            email={element.email}
            id={index}
            />
        })
        
        return(
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
                           <li><input className="searchInput" type="text" value={this.state.search} onChange={(e)=>this.handleSearch(e)} placeholder="search..."/></li>
                       </ul>
                       {allContacts}
                       </nav>
            </div>
        )
    }
}
export default SearchSubscriber;