import React, { Component } from 'react';

import adventurer from "./adventurers.json";
import AdventurerCard from "./components/AdventurerCard"


import './App.css';



class App extends Component {
  state = {
    score: 0,
    topscore: 0,
    adventurer: adventurer,
    adventurerClicked: []

  }
  imgClick = id => {

    this.setState({
      adventurerClicked: this.state.adventurerClicked.concat(id)
    })
    if (this.state.adventurerClicked.includes(id)) {
                this.setState({
                        score: 0,
                        adventurerClicked: []
                  
            })
            alert("Your armor is so totally not tsst-tsst");
    }
    else {
      this.setState({
        score: this.state.score + 1,
        adventurer: adventurer.sort(function (a, b) { return 0.5 - Math.random() })
      })
      
      if (this.state.score >= this.state.topscore) {
        
            this.setState({
            topscore: this.state.topscore + 1
            })
      } 
    }
  }
  render() {

    return (
      <div>
        <h3>
        score = {this.state.score} topscore = {this.state.topscore}
        </h3>
          <h1>Click Adventure</h1>
          <h2>What the Math! Don't click the same picture bro!</h2>

        <div className="container">
          <div className="row">
            {this.state.adventurer.map(adventurers => (
              <AdventurerCard id={adventurers.id} url={adventurers.url} clicked={adventurers.clicked} imgClick={this.imgClick}
              ></AdventurerCard>
            ))}
          </div>
        </div>
        
      </div>

    )
  }
}



export default App;
