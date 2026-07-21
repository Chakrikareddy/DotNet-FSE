import React from "react";


const blogs=[

    {
        id:1,
        title:"React Learning",
        author:"Stephen Biz",
        description:"Welcome to learning React!"
    },


    {
        id:2,
        title:"Installation",
        author:"Schwzdnier",
        description:"You can install React from npm."
    }

];



function BlogDetails()
{


    const content = (

        <div>


        {

            blogs.map((blog)=>(

                <div key={blog.id}>


                    <h2>
                        {blog.title}
                    </h2>


                    <h4>
                        {blog.author}
                    </h4>


                    <p>
                        {blog.description}
                    </p>


                </div>


            ))

        }


        </div>

    );



    return(

        <div>

            <h1>
                Blog Details
            </h1>


            {content}


        </div>

    );

}


export default BlogDetails;