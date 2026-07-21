import React from "react";


function OfficeSpace()
{


    // Office object

    const office = {

        Name:"DBS Office",
        Rent:50000,
        Address:"Chennai"

    };



    // List of office objects

    const offices = [

        {
            Name:"DBS Office",
            Rent:50000,
            Address:"Chennai"
        },


        {
            Name:"Tech Park",
            Rent:75000,
            Address:"Bangalore"
        },


        {
            Name:"Business Hub",
            Rent:60000,
            Address:"Hyderabad"
        },


        {
            Name:"Corporate Plaza",
            Rent:45000,
            Address:"Mumbai"
        }

    ];



    return (

        <div>


            {/* Heading using JSX */}

            <h1>
                Office Space Rental App
            </h1>



            {/* Image Attribute */}

            <img

                src="https://via.placeholder.com/300x150"

                alt="Office Space"

                width="300"

                height="150"

            />



            <h2>
                Office Details
            </h2>



            <p>
                Name : {office.Name}
            </p>


            <p>
                Rent : {office.Rent}
            </p>


            <p>
                Address : {office.Address}
            </p>



            <hr />



            <h2>
                Available Office Spaces
            </h2>



            {

                offices.map((item)=>(


                    <div key={item.Name}>


                        <h3>
                            {item.Name}
                        </h3>



                        <p>

                            Rent :

                            <span

                            style={{

                                color:

                                item.Rent < 60000

                                ?

                                "red"

                                :

                                "green"

                            }}

                            >

                            ₹{item.Rent}

                            </span>


                        </p>



                        <p>

                            Address : {item.Address}

                        </p>



                        <hr />


                    </div>


                ))

            }



        </div>

    );

}


export default OfficeSpace;