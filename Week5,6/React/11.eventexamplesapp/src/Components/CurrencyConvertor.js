import React, { Component } from "react";


class CurrencyConvertor extends Component {


    constructor(props)
    {

        super(props);


        this.state = {

            rupees:0,
            euro:0

        };


        this.handleSubmit=this.handleSubmit.bind(this);

    }



    handleSubmit(event)
    {

        event.preventDefault();


        let euroValue = this.state.rupees * 0.011;


        this.setState({

            euro:euroValue

        });


    }



    render()
    {

        return(

            <div>


                <h2>
                    Currency Convertor
                </h2>


                <form onSubmit={this.handleSubmit}>


                    <label>
                        Enter Rupees:
                    </label>


                    <input

                    type="number"

                    value={this.state.rupees}

                    onChange={(event)=>

                    this.setState({

                        rupees:event.target.value

                    })

                    }

                    />



                    <br/><br/>


                    <button type="submit">

                        Convert

                    </button>



                </form>



                <h3>

                Euro Value:
                {this.state.euro}

                </h3>


            </div>

        );

    }


}


export default CurrencyConvertor;