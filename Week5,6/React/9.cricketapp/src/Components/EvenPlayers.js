import React from "react";


function EvenPlayers(props)
{

const [
,
second,
,
fourth,
,
sixth
]=props.IndianTeam;


return(

<div>

<h2>Even Players</h2>

<li>Second : {second}</li>

<li>Fourth : {fourth}</li>

<li>Sixth : {sixth}</li>


</div>

);

}


export default EvenPlayers;