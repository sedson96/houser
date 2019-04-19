import React, {Component} from "react"
import {Link} from "react-router-dom"
import store, { UPDATE_RENT, UPDATE_MORTGAGE } from "../store";
import axios from "axios";

class Price extends Component {
    constructor() {
        super()
        const globalState = store.getState()
        this.state = {
            mortgage: globalState.mortgage,
            rent: globalState.rent
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: +event.target.value})
    }
    saveChanges() {
        store.dispatch({
            type: UPDATE_MORTGAGE,
            payload: this.state.mortgage
        })
        store.dispatch({
            type: UPDATE_RENT,
            payload: this.state.rent
        })
        const {name,address,city,state,zip,img_url,mortgage,rent} = store.getState()
        axios.post("/api/properties", {name,address,city,state,zip,img_url,mortgage,rent}).catch(error => console.log(error))
    }
    render() {
        return(
        <main>
            <h1>Add Property</h1>
            <h2>Step 2</h2>
            <label>Mortgage</label>
            <input name="mortgage" onChange={this.handleChange}/> 
            <label>Rent</label>
            <input name="rent" onChange={this.handleChange}/> 
            <Link to="/"><button>cancel</button></Link>
            <Link to="/"><button onClick={this.saveChanges}>next</button></Link>
        </main>
        )
    }
}
export default Price