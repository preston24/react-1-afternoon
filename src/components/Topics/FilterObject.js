import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      starWarsCharacters: [
        {
          name: 'Luke Skywalker',
          title: 'Jedi',
          age: 19
        },
        {
          name: 'Leia Organa',
          twin: true,
          age: 19
        },
        {
          name: 'Han Solo',
          title: 'Smuggler',
          weapon: 'blaster'
        }
      ],

      userInput: '',
      filteredStarWarsCharacters: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val});
  }

  filterStarWarsCharacters(prop) {
    var starWarsCharacters = this.state.starWarsCharacters;
    var filteredStarWarsCharacters = [];

    for (var i = 0; i < starWarsCharacters.length; i++) {
      if (starWarsCharacters[i].hasOwnProperty(prop)) {
        filteredStarWarsCharacters.push(starWarsCharacters[i]);
      }
    }
    this.setState({ filteredStarWarsCharacters: filteredStarWarsCharacters });
  }


  render() {
    return (
      <div className="puzzleBox filterObjectPB">
      <h4> Filter Object </h4>
      <span className="puzzleText"> Original: { JSON.stringify(this.state.starWarsCharacters, null, 10) } </span>
      <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value) }></input>
      <button className="confirmationButton" onClick={ () => this.filterStarWarsCharacters(this.state.userInput) }> Filter </button>
      <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredStarWarsCharacters, null, 10) } </span>
      </div>
    )
  }
}