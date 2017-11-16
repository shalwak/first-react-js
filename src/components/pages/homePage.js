import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className = "container-fluid">

      <h2>
        C.O.D
      </h2>

       <div className = "date">
        3rd of November 2017
       </div>
       <p>
       Similar to its predecessors, Call of Duty: WWII is a first-person shooter game but it removes the advanced system of movement present in the two
       previous Call of Duty titles, which included double jumping and wall running.
       </p>
       <p>
       Instead, it features a return of traditional movement to the series,
        taking it back to a "boots on the ground" gameplay style. The game does not feature an unlimited sprint mechanic, seen in the previous two titles.
         Instead of a "slide" movement mechanic, which allowed players to slide quickly on the ground, WWII features a "hit-the-deck" mechanic that
        allows the player to leap forward and throw themselves on the ground in order to get to cover quickly, similarly to a previous mechanic known as
        "dolphin dive" in Treyarch's Call of Duty: Black Ops and Call of Duty: Black Ops II.
        </p>

      </div>
    );
  }
}

export default HomePage;
