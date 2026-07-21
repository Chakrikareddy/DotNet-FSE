import React from "react";

import "./App.css";


import BookDetails from "./Components/BookDetails";

import BlogDetails from "./Components/BlogDetails";

import CourseDetails from "./Components/CourseDetails";



function App()
{


return(

<div className="container">


<div className="box">

<BookDetails/>

</div>



<div className="box">

<BlogDetails/>

</div>



<div className="box">

<CourseDetails/>

</div>



</div>

);


}


export default App;