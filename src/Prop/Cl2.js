import Cl1 from './Cl1'
import { Component } from "react";
class Cl2 extends Component{
    name="kunal";
    age=22;
    render()
    {
        return <div>
            <h1>this is class1</h1>
            <Cl1 x={this.name} y={this.age}/>
        </div>
    }
}
export default Cl2
