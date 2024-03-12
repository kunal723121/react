import { Component } from "react";
class Cle extends Component{
    state={
    x:new Date().toLocaleTimeString()
    }
    fun=()=>
    {
        setInterval(()=>
        {
            this.setState({x:new Date().toLocaleTimeString()})
        },1000)
    }
    render()
    {
        return <div>
            <h1>{this.state.x}</h1>
            <h1>{this.fun()}</h1>
        </div>
    }
}
export default Cle