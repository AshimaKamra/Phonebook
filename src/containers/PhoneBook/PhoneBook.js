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
                {
                    id: 5,
                    name: "Chandler",
                    phone: "444473",
                    email:'Chandler@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 6,
                    name: "Monica",
                    phone: "5538373",
                    email:'monica@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 7,
                    name: "Heisenberg",
                    phone: "658899",
                    email:'Walt@gmail.com',
                    dob:'16/12/1999'
                },
                {
                    id: 8,
                    name: "Jesse",
                    phone: "32128",
                    email:'pinkmen@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 9,
                    name: "Hank",
                    phone: "4438373",
                    email:'shrader@gmail.com',
                    dob:'18/12/1999'
                },
                {
                    id: 10,
                    name: "Harry",
                    phone: "5558373",
                    email:'potter@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 11,
                    name: "Hermioni",
                    phone: "4438373",
                    email:'granger@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 12,
                    name: "Ron",
                    phone: "5558373",
                    email:'weasley@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 13,
                    name: "Severus",
                    phone: "4438373",
                    email:'snape@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 15,
                    name: "Lilly",
                    phone: "4438373",
                    email:'potter@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 16,
                    name: "Thomas",
                    phone: "4438373",
                    email:'shelby@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 17,
                    name: "Grace",
                    phone: "4438373",
                    email:'shelby@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 18,
                    name: "Polly",
                    phone: "4438373",
                    email:'polly@gmail.com',
                    dob:'17/12/1999'
                },
                {
                    id: 19,
                    name: "Tokyo",
                    phone: "4438373",
                    email:'tokyo@gmail.com',
                    dob:'17/12/1999'
                }
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
   
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
        });
    
        const person = {
          ...this.state.subscribersList[personIndex]
        };
    
        // const person = Object.assign({}, this.state.persons[personIndex]);
    
        person.name = event.target.value;
    
        const persons = [...this.state.subscribersList];
        persons[personIndex] = person;
    
        this.setState((prevState, props) => {
          return {
            persons: persons,
            changeCounter: prevState.changeCounter + 1
          };
        });
      };
     
    
   
    render(){
        return(
                <Router>
                    <div>
                    <Navbar/>
                    <Route exact path="/" render={(props) => <ShowSubscriber {...props} subscribersList={this.state.subscribersList} updateContactHandler={this.nameChangedHandler} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                    <Route exact path="/add" render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />

                    <Footer/>
                    </div>
                </Router>
        )
    }
}
export default PhoneBook;