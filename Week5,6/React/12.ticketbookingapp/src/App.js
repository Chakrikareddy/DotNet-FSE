import React, { Component } from "react";


import Greeting from "./Components/Greeting";

import LoginButton from "./Components/LoginButton";

import LogoutButton from "./Components/LogoutButton";



class App extends Component
{


    constructor(props)
    {

        super(props);


        this.state={

            isLoggedIn:false

        };


        this.handleLogin=this.handleLogin.bind(this);

        this.handleLogout=this.handleLogout.bind(this);

    }



    handleLogin()
    {

        this.setState({

            isLoggedIn:true

        });

    }



    handleLogout()
    {

        this.setState({

            isLoggedIn:false

        });

    }




    render()
    {


        let button;


        if(this.state.isLoggedIn)
        {

            button = 

            <LogoutButton

            onClick={this.handleLogout}

            />;

        }

        else
        {

            button =

            <LoginButton

            onClick={this.handleLogin}

            />;

        }



        return(

            <div>


                <Greeting

                isLoggedIn={this.state.isLoggedIn}

                />


                {button}


            </div>

        );

    }


}


export default App;