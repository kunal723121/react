import { Component } from "react";
class Exmp extends Component{
    state={
        msg:"hello!"
    }
    ch=(x)=>
    {
        this.setState({msg:x})
    }
    render()
    {
        return <div>
            <h1>{this.state.msg}</h1>
            <button onClick={this.ch.bind(this,"GoodMorning")} >GM</button>
            <button onClick={this.ch.bind(this,"GoodNight")} >GN</button>
        </div>
    }
}
export default Exmp