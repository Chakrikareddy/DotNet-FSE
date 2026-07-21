import React from 'react';

import CohortDetails from './Components/CohortDetails';


function App() {


    return (

        <div>


            <h1>
                Cognizant Academy Cohorts
            </h1>


            <CohortDetails

                id="C001"

                name="React Full Stack"

                technology="React JS"

                duration="6 Months"

                status="ongoing"

            />


            <CohortDetails

                id="C002"

                name="Java Full Stack"

                technology="Java Spring Boot"

                duration="5 Months"

                status="completed"

            />


            <CohortDetails

                id="C003"

                name="DotNet Full Stack"

                technology=".NET Core"

                duration="6 Months"

                status="ongoing"

            />


        </div>

    );

}


export default App;