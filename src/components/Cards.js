import React, {Component} from "react"


class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            properties: []
        }
    }
    render() {
        const {id,name,address,city,state,zip,img_url,mortgage,rent} = this.props
        return (
            <article>
                <img src={img_url} alt={name}/>
                <h3>{name}</h3>
                <h3>{address}</h3>
                <h3>{city}</h3>
                <h3>{state}</h3>
                <h3>{zip}</h3>
                <h3>{mortgage}</h3>
                <h3>{rent}</h3>
                <button onClick={() => this.props.delete(id)}>Delete</button>
            </article>
        )
    }
}

export default DashBoard