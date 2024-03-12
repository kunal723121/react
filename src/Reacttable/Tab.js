import { Component } from "react";
import Ar from "./Arr";
class Tab extends Component{
    render()
    {
        return <div>
            <table className="table table-striped table-hover">
                <thead className="bg-dark">
                    <th>ID</th>
                    <th>Fname</th>
                    <th>Lname</th>
                    <th>Email</th>
                    <th>Gender</th>
                </thead>
                <tbody>
                    {
                     Ar.map((x)=>{

                            return<tr>
                            <td>{x.id}</td>
                            <td>{x.first_name}</td>
                            <td>{x.last_name}</td>
                            <td>{x.email}</td>
                            <td>{x.gender}</td>
                            </tr> 
                            
                        })
                    }
                </tbody>
            </table>
        </div>
    }
}
export default Tab
