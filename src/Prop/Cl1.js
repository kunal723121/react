import { Component } from "react";
class Cl1 extends Component{
    render(props)
    {
        return <div>
            <h1>this is component2</h1>
            <h1>{JSON.stringify(this.props)}</h1>
            <h1>{this.props.x}</h1>
            <h1>{this.props.y}</h1>
        </div>
    }
}
export default Cl1