import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ShowSubscriber from '../ShowSubscriber/ShowSubscriber';
import AddSubscriber from '../AddSubscriber/AddSubscriber';
import Navbar from '../Navbar/Navbar';
import EditSubscriber from '../EditSubscriber/EditSubscriber';
import Footer from '../Footer/Footer';
class PhoneBook extends Component
{
    state = {
            subscribersList: [
                {
                    id: 1,
                    name: "Joey",
                    phone: "3838373",
                    email:'joey@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 2,
                    name: "Ross",
                    phone: "833726",
                    email:'Ross@gmail.com',
                    dob:'20/12/1999'
                },
                {
                    id: 3,
                    name: "Pheobe",
                    phone: "7014552",
                    email:'Phoebe@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 4,
                    name: "Rachel",
                    phone: "4438373",
                    email:'rachel@gmail.com',
                    dob:'17/12/1999'
                },
            ],
           
        }
    
    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }
    updateContactHandler(id, name, phone, email,dob) {
        const newContactList = this.state.subscribersList;
         localStorage.setItem('subscriberList', JSON.stringify(newContactList));
        newContactList[id].name = name;
        newContactList[id].phone = phone;
        newContactList[id].email = email;
        newContactList[id].dob = dob;
        this.setState({
          contacts: newContactList,
        })
      }
     
    
   
    render(){
        return(
                <Router>
                    <div>
                    <Navbar/>
                    <Route exact path="/" render={(props) => <ShowSubscriber {...props} subscribersList={this.state.subscribersList} updateContactHandler={this.updateContactHandler} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                    <Route exact path="/add" render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />

                    <Footer/>
                    </div>
                </Router>
        )
    }
}
export default PhoneBook;