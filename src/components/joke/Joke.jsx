import React from "react";
let favoritList=[];
class Joke extends React.Component{
    constructor (){
        super();
        this.handleAddFavorites = this.handleAddFavorites.bind(this)
    }
    handleAddFavorites(){
        let obj = {}
        obj["id"]=this.props.id;
        obj["joke"]=this.props.joke;
        obj["categories"]=[];
        favoritList.push(obj);
        localStorage.setItem('favorites.jokes',JSON.stringify(favoritList))
    }
    render(){
        return(
            <>
            <div className="card col-sm-3">
            <h5 className="card-title">{this.props.id}</h5>
            <p className="card-text">{this.props.joke}</p>
            <button className="btn btn-primary"onClick={this.handleAddFavorites}>Saugoti</button>
            </div>
            </>
        )
    }
}


export default Joke;