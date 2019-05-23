import React from 'react';
import './App.css';
import Axios from 'axios';

class App extends React.Component
{
  state = { capital: ''}
  
  fetchCountry = (country) => {
    Axios({
      url: `https://restcountries.eu/rest/v2/name/${country}`,
      method: 'get',
    }).then(
      response => {
        this.setState({capital: response.data[0].capital})
      },
      error => {
        this.setState({
          error,
        })
      },
    )
  }

  onSubmit = ( (event) => {
    event.preventDefault()
    const country = event.target[0].value
    this.fetchCountry(country)
  })

  render() {
    let label = ''
    if(this.state.capital === '')
    {
      label = 'Please enter a country'
    }
    else{
      label = `The country's capital is ${this.state.capital}`
    }
    return (
      <div>
      <div>
        <label>{label}</label>
      </div>
        <form onSubmit={this.onSubmit}>
          <label>
            Country:
            <input type="text" name="task" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App; 