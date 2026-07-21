import React from 'react';

import styles from '../CohortDetails.module.css';


function CohortDetails(props) {


    let statusColor;


    if(props.status === "ongoing")
    {
        statusColor = "green";
    }

    else
    {
        statusColor = "blue";
    }


    return (

        <div className={styles.box}>


            <h3 style={{color: statusColor}}>
                {props.name}
            </h3>


            <dl>

                <dt>
                    Cohort ID
                </dt>

                <dd>
                    {props.id}
                </dd>


                <dt>
                    Technology
                </dt>

                <dd>
                    {props.technology}
                </dd>


                <dt>
                    Duration
                </dt>

                <dd>
                    {props.duration}
                </dd>


                <dt>
                    Status
                </dt>

                <dd>
                    {props.status}
                </dd>


            </dl>


        </div>

    );

}


export default CohortDetails;