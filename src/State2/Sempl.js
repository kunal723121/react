import { Component } from "react";
class Sempl extends Component{
    state={
        pr:
        {
        price:20000,
        qty:1,
        }
    }
    cl=(x)=>
    {
        this.setState({pr:{...this.state.pr,qty:x}})
    }
    render()
    {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                     <table className="table">
                        <thead className="bg-dark text-white">
                            <th>Item</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>iphone 15 pro 128-GB</td>
                                <td><img height="150" width="150" src="https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UF1000,1000_QL80_.jpg"/ ></td>
                                <td>{this.state.pr.price}</td>
                                <td><i onClick={this.cl.bind(this,this.state.pr.qty-1)} className="fa fa-minus-circle"></i>
                                    {this.state.pr.qty}
                                    <i onClick={this.cl.bind(this,this.state.pr.qty+1)} className="fa fa-plus-circle"></i></td>
                                <td>{this.state.pr.qty * this.state.pr.price}</td>
                                <td></td>
                            </tr>
                        </tbody>
                     </table>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Sempl