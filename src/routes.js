import React from "react"
import {Switch, Route} from "react-router-dom"
import Price from "./components/Price"
import Image from "./components/Image"
import Detail from "./components/Detail"
import Dashboard from "./components/Dashboard"

export default 
<Switch>
    <Route path="/addproperty/step3" component={Price} />
    <Route path="/addproperty/step2" component={Image} />
    <Route path="/addproperty/step1" component={Detail} />
    <Route path="/" component={Dashboard} />
</Switch>