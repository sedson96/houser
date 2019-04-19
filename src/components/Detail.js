import React, {Component} from "react"
import {Link} from "react-router-dom"
import store, { UPDATE_ADDRESS, UPDATE_NAME, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP } from "../store"


class Detail extends Component {
    constructor() {
        super()
        const globalState = store.getState()
        this.state = {
            name: globalState.name,
            address: globalState.address,
            city: globalState.city,
            state: globalState.state,
            zip: globalState.zip
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
    saveChanges() {
        store.dispatch({
            type: UPDATE_NAME,
            payload: this.state.name
        })
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: this.state.address
        })
        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
        })
        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.state
        })
        store.dispatch({
            type: UPDATE_ZIP,
            payload: this.state.zip
        })
        console.log(store.getState())
    }
    render() {
        return(
        <main>
            <h1>Add Property</h1>
            <h2>Step 1</h2>
            <label>Name</label>
            <input name="name" onChange={this.handleChange}/> 
            <label>Address</label>
            <input name="address" onChange={this.handleChange}/> 
            <label>City</label>
            <input name="city" onChange={this.handleChange}/> 
            <label>State</label>
            <input name="state" onChange={this.handleChange}/> 
            <label>Zip</label>
            <input name="zip" onChange={this.handleChange}/> 
            <Link to="/"><button>cancel</button></Link>
            <Link to="/addproperty/step2"><button onClick={this.saveChanges}>next</button></Link>
        </main>
        )
    }
}

export default Detail