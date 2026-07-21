import React from "react";


function OddPlayers(props)
{

const [
first,
,
third,
,
fifth
]=props.IndianTeam;


return(

<div>

<h2>Odd Players</h2>

<li>First : {first}</li>

<li>Third : {third}</li>

<li>Fifth : {fifth}</li>


</div>

);

}


export default OddPlayers;