import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import Card from "./Cards"


class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            properties: []
        }
        this.delete = this.delete.bind(this)
    }
    async componentDidMount() {
        const properties = await axios.get("/api/properties")
        this.setState({properties: properties.data})
    }
    async delete(id) {
         const properties = await axios.delete(`/api/properties/${id}`).catch(error => console.log(error))
         this.setState({properties: properties.data})
    }
    render() {
        let property = this.state.properties.map(property => {
            const {id,name,address,city,state,zip,img_url,mortgage,rent} = property
            return <Card
            delete={this.delete}
            key={id}
            id={id}
            name={name}
            address={address}
            city={city}
            state={state}
            zip={zip}
            img_url={img_url}
            mortgage={mortgage}
            rent={rent}
            />
        })
        return (
            <main>
                <Link to="/addproperty/step1"><button>Add Property</button></Link>
                <h1>DashBoard</h1>
                {property}
            </main>
        )
    }
}

export default DashBoard