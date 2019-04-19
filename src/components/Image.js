import React, {Component} from "react"
import {Link} from "react-router-dom"
import store, { UPDATE_IMAGE } from "../store";


class Image extends Component {
    constructor() {
        super()
        const globalState = store.getState()
        this.state = {
            img_url: globalState.img_url
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
    saveChanges() {
        store.dispatch({
            type: UPDATE_IMAGE,
            payload: this.state.img_url
        })
        console.log(store.getState())
    }
    render() {
        return(
        <main>
            <h1>Add Property</h1>
            <h2>Step 2</h2>
            <label>Image</label>
            <input name="img_url" onChange={this.handleChange}/> 
            <Link to="/"><button>cancel</button></Link>
            <Link to="/addproperty/step3"><button onClick={this.saveChanges}>next</button></Link>
        </main>
        )
    }
}

export default Image