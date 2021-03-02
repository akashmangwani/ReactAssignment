import React, {useState, useEffect, Component} from "react";
import axios from 'axios';
import Card from "./Cards";
import EditProfile from "./EditProfile"


class Firstpage extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            selectedPostId: null
        }
    }

    componentDidMount(){
        console.log("componentDidMount")
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
            const transformed = response.data.map(post => {
                return {
                    ...post,
                    imgsrc : 'https://avatars.dicebear.com/4.5/v2/avataaars/' + post.name + '.svg'
                }
            })
            console.log(transformed);
            const uname = response.data[0].username;
            this.setState({
                posts: transformed
            
            })
            
        });
        
    }
    
     buttonClickedHandler=()=>{
        console.log(this.state)
     }


    render(){
        const posts = this.state.posts.map(post => {
            return <Card
            key={post.id}
            username={post.name}
            imgsrc={post.imgsrc}
            email={post.email}
            phone={post.phone}
            website={post.website}
            clicked={this.buttonClickedHandler} 
            />
            
            
        })
        // console.log(posts)

        return(
            <>
            {posts}
           
            </>
        )
    }
}

export default Firstpage;