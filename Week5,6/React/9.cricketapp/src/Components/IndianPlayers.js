import React from "react";


const T20Players = [

    "First Player",
    "Second Player",
    "Third Player"

];


const RanjiTrophyPlayers = [

    "Fourth Player",
    "Fifth Player",
    "Sixth Player"

];


// ES6 Spread Operator to merge arrays

const IndianPlayers = [

    ...T20Players,
    ...RanjiTrophyPlayers

];


function IndianPlayersComponent() {


    return (

        <div>

            <h2>List of Indian Players Merged:</h2>


            {

                IndianPlayers.map(player => (

                    <li key={player}>
                        Mr. {player}
                    </li>

                ))

            }


        </div>

    );

}


export { IndianPlayers };

export default IndianPlayersComponent;