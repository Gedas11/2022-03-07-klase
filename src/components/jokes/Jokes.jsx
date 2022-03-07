import React from "react";
import Joke from "../joke/Joke";


class Jokes extends React.Component{
    constructor(){
        super ();
        this.state = {
            jokes:[]
        }   
     }
     componentDidMount () {
         fetch("http://api.icndb.com/jokes/id/1")
         .then(response=>response.json())
         .then(data=>{
             this.setState({
                 jokes:data.value
             })
         })
     }

    render() {
        if(this.state.jokes.lenght){
            return(
                <>
                <h2>Jokes list</h2>
                <div className="row">
                    {this.states.jokes.map((j)=>(
                        <Joke
                        key={j.id}
                        id={j.id}
                        joke={j.joke}
                        />
                    ))}
                </div>
                </>
            )
        }else{
            return(
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">

                    </div>
                </div>
            )
        }
        }
        
       
}

export default Jokes;