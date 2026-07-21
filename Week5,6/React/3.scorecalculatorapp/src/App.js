import React from 'react';

import CalculateScore from './components/calculatescore';

function App() {

    return (

        <div>

            <CalculateScore

                Name="Chakrika"

                School="ABC Public School"

                Total={480}

                goal={6}

            />

        </div>

    );

}

export default App;