import React from "react";


function ListofIndianPlayers(props) {


    return (

        <div>


            {

                props.IndianPlayers.map(player => (

                    <li key={player}>
                        Mr. {player}
                    </li>

                ))

            }


        </div>

    );

}


export default ListofIndianPlayers;