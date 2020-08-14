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
  
  };

  render() {
    return (
      <div>
        <Title />
        <Search />
        <table className="table">
          <caption>List of employees</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Postion</th>
              <th scope="col">Nationality</th>
              <th scope="col">DOB</th>
              <th scope="col">Market Value</th>
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
