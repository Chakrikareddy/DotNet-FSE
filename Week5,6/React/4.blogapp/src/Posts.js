import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

    constructor(props) {
        super(props);

        // Initialize component state
        this.state = {
            posts: []
        };
    }


    // Load posts method
    loadPosts() {

        const posts = [

            new Post(
                1,
                "React Introduction",
                "React is a JavaScript library used to build fast and interactive user interfaces."
            ),

            new Post(
                2,
                "React Components",
                "Components are reusable parts of a React application that help organize the user interface."
            ),

            new Post(
                3,
                "Component Lifecycle",
                "React component lifecycle methods allow developers to perform actions during different stages of a component."
            ),

            new Post(
                4,
                "Virtual DOM",
                "Virtual DOM is a lightweight copy of the real DOM that helps React update pages efficiently."
            ),

            new Post(
                5,
                "Fetch API",
                "Fetch API is used to communicate with servers and retrieve data from external sources."
            )

        ];


        this.setState({
            posts: posts
        });

    }


    // Lifecycle method
    // Executes after component is rendered
    componentDidMount() {

        this.loadPosts();

    }


    // Error handling lifecycle method
    componentDidCatch(error, info) {

        alert("An error occurred while displaying posts.");

        console.log("Error:", error);

        console.log("Information:", info);

    }


    // Display posts
    render() {

        return (

            <div style={{ margin: "20px" }}>

                <h1 style={{ textAlign: "center", color: "blue" }}>
                    Blog Posts
                </h1>


                {
                    this.state.posts.map(post => (

                        <div
                            key={post.id}
                            style={{
                                border: "2px solid gray",
                                padding: "15px",
                                margin: "15px",
                                borderRadius: "10px",
                                backgroundColor: "#f5f5f5"
                            }}
                        >

                            <h2>{post.title}</h2>

                            <p>{post.body}</p>

                        </div>

                    ))
                }


            </div>

        );

    }

}


export default Posts;