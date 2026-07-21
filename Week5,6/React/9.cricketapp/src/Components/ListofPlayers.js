import React from "react";


function ListofPlayers(props)
{

    return(

        <div>

            {

                props.players.map((item)=>(

                    <div key={item.name}>

                        <li>
                            Mr. {item.name}
                            <span> {item.score}</span>
                        </li>

                    </div>

                ))

            }


        </div>

    );

}


export default ListofPlayers;