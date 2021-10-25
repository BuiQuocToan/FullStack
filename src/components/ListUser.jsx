import React, { Component } from 'react'
import ServiceU from '../service/ServiceU'

export default class ListUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: []
        }
        this.addUser = this.addUser.bind(this);
        this.updateU = this.updateU.bind(this);
        this.deleteU = this.deleteU.bind(this);
    }
    componentDidMount(){
        ServiceU.getAll().then((res) => {
            this.setState({user: res.data})
        });
    }

    addUser(){
        this.props.history.push(`/addUser`);
    }
    updateU(id){
        this.props.history.push(`/updateU/${id}`)
    }
    deleteU(id){
        ServiceU.delete(id).then( (res) =>{
            this.setState({user: this.state.user.filter(user => user.id !== id)})
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User List</h2>
                <div className = "row">
                    <button className="btn btn-primary btn-info" onClick={this.addUser}>Add User</button>
                </div>
                <div className ="row">
                    <table className ="table table-striped table-bordered text-center">
                        <thead>
                            <tr>
                                <th>AVATAR</th>
                                <th>FULL NAME</th>
                                <th>USER</th>
                                <th>PASS</th>                                
                                <th>ACTION</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.user.map(
                                    user => 
                                    <tr key = {user.id}>
                                        <td>{user.avatar}</td>
                                        <td>{user.fullname}</td>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <button onClick={() => this.updateU(user.id)} className="btn btn-info">Update</button>
                                            <button onClick={() => this.deleteU(user.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

