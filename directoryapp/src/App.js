import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Search from "./components/Search";
import employees from "./employees.json";
import Table from "./components/Table";
// import Footer from "./components/Footer";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: employees,
    sortedEmployees: [],
    name: "Name",
    market: "Market"

  };

  handleSort = (identifier) => {
    let sortedEmployees = this.state.employees.sort((a ,b) => {
      
    if (a.name < b.name) {
      return -1
    }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    this.setState({employees: sortedEmployees})
  }

  handleMarket = (identifier) => {
    // console.log(identifier);
    // console.log(this.state.employees);
    let sortedEmployees = this.state.employees.sort((a ,b) => {
      
    if (a.market < b.market) {
      return -1
    }
      if (a.market > b.market) {
        return 1
      }
      return 0
    })
    this.setState({employees: sortedEmployees})
  }



  
  handleFind = (event) => {
    console.log(event.target.value);
    let sortedEmployees = this.state.employees.filter(employee => this.state.employees === event.target.value)
    
    console.log(sortedEmployees);
    this.setState({employees: sortedEmployees})
  }
    


  render() {
    return (
      <div>
        <Title />
        <Search 
        handleFind={this.handleFind}
        />
        <table className="table">
          <caption>List of employees</caption>
          <thead>
            <tr>
              <th scope="col" onClick={() => this.handleSort(this.state.name)}>{this.state.name}</th>
              <th scope="col">Postion</th>
              <th scope="col">Nationality</th>
              <th scope="col">DOB</th>
              <th scope="col" onClick={() => this.handleMarket(this.state.market)}>{this.state.market}</th>
              <th scope="col">Jersey #</th>
            </tr>
          </thead>
        {this.state.employees.map(row => (
          <Table
              handleCardClick={this.handleCardClick}
              id={row.id}
              key={row.id}
              name={row.name}
              position={row.position}
              nationality={row.nationality}
              jersey={row.jersey}
              dob={row.dob}
              market={row.market}
              />
        ))}
          </table>
        {/* <Wrapper>
          
          {this.state.friends.map(friend => (
            <FriendCard
              handleCardClick={this.handleCardClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
        <Footer />  */}
      </div>
    );
  }
}

export default App;
