import React, { Component } from "react";

import CurrencyConvertor from "./Components/CurrencyConvertor";


class App extends Component {


    constructor(props)
    {

        super(props);


        this.state={

            count:0

        };


        this.increment=this.increment.bind(this);

        this.decrement=this.decrement.bind(this);

        this.sayHello=this.sayHello.bind(this);

        this.welcome=this.welcome.bind(this);

        this.onPress=this.onPress.bind(this);

    }



    // Increment counter

    increment()
    {

        this.setState({

            count:this.state.count+1

        });


    }



    // Decrement counter

    decrement()
    {

        this.setState({

            count:this.state.count-1

        });


    }



    // Method called by Increment button

    sayHello()
    {

        alert("Hello! Welcome to React Events");

    }



    // Function with argument

    welcome(message)
    {

        alert(message);

    }



    // Synthetic event

    onPress()
    {

        alert("I was clicked");

    }




    render()
    {


        return(

            <div>


                <h1>
                    React Event Examples
                </h1>



                <h2>
                    Counter : {this.state.count}
                </h2>



                <button

                onClick={()=>{

                    this.increment();

                    this.sayHello();

                }}

                >

                    Increase

                </button>



                &nbsp;


                <button

                onClick={this.decrement}

                >

                    Decrement

                </button>



                <hr/>



                <button

                onClick={()=>this.welcome("welcome")}

                >

                    Say Welcome

                </button>



                <hr/>



                <button

                onClick={this.onPress}

                >

                    OnPress

                </button>



                <hr/>



                <CurrencyConvertor/>


            </div>


        );


    }


}


export default App;