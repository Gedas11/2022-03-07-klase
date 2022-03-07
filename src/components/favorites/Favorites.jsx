import React from "react";


class Favorites extends React.Component{
    constructor(){
        super();
        this.state = {
            savedList:[]
        }
    }
    componentDidMount(){
        if(localStorage.length){
            this.setState((state)=>({
                savedList:state.savedList.contact(JSON.parse(localStorage.getItem('favoritesJokes')))
            }))
        }
    }
    render(){
        if(this.state.savedList.length){
        return(
            <>
            <h2>Saved Jokes list</h2>
            <div className="row">
            
            </div>
            </>
        )
    }else{
        return(
            <div className="saved">
                <p>issaugotu juokeliu nera</p>
            </div>
        )
    }
}
}

export default Favorites;