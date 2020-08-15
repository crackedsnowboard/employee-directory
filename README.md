# Employee Directory Web Application
The core function of this application was to allow me to practice developing my React skills. I broke up application's UI into components, managed component state, and respond to user events.

## Lesssons Learned
This was an important journey on my development path as I was confronted with an array of new technologies and skills to improve. This was my first instance of deploying a React application to GitHub Pages. In addition, I created pass functions to components (onClick listeners) that allowed me to sort the table of employees upon user action. 

## Link to deployed Burger Choice
[Employee-Tracker](https://crackedsnowboard.github.io/employee-directory/)

## Installation
I created React by using ``npx create-react-app <app name here>``` 


## Key Code Snippets
A few key code that helped display data in the format desired: 

In the App.js file, I was able to get information from a user click to sort the table of employees. The code snippet is as follows:
```
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
```

Padding down props to separate components
```
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
```

## Author Links
[LinkedIn](linkedin.com/in/joel-mathen/) <br>
[GitHub](https://github.com/crackedsnowboard)

