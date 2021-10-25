import React, { Component } from "react";
import ServiceU from "../service/ServiceU";
import { toast } from 'react-toastify';

export default class InsertUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: "",
      fullname: "",
      username: "",
      password: ""
    };
    this.changeavatar = this.changeavatar.bind(this);
    this.changefullname = this.changefullname.bind(this);
    this.changeusername = this.changeusername.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.insertUser = this.insertUser.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  insertUser = (e) => {
    e.preventDefault();

    let user = {avatar :this.state.avatar, fullname : this.state.fullname, username: this.state.username, password: this.state.password};
    console.log('EntityU => ' + JSON.stringify(user));

    ServiceU.insert(user).then(res => {
      this.props.history.push('/users');
    });
    toast.success("Add success: "+ this.state.fullname,{
      icon: "🚀",
      theme: "colored"
    });
  }

  cancel(){
    this.props.history.push('/users');
  }



  changeavatar = (event) => {
    this.setState({ avatar: event.target.value });
  };
  changefullname = (event) => {
    this.setState({ fullname: event.target.value });
  };
  changeusername = (event) => {
    this.setState({ username: event.target.value });
  };
  changepassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center"> Add User </h3>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Avatar</label>
                    <input
                      placeholder=""
                      name="avatar"
                      className="form-control"
                      value={this.state.avatar}
                      onChange={this.changeavatar}
                    />
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Full Name</label>
                    <input
                      // placeholder="Full Name"
                      name="fullname"
                      className="form-control"
                      value={this.state.fullname}
                      onChange={this.changefullname}
                    />
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">User Name</label>
                    <input
                      // placeholder="Username"
                      name="username"
                      className="form-control"
                      value={this.state.username}
                      onChange={this.changeusername}
                    />
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">PassWord</label>
                    <input
                      type="password"
                      // placeholder="Pass Word"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changepassword}
                    />
                  </div>

                  <button className="btn btn-success" onClick = {this.insertUser}> Insert </button>
                  <button className="btn btn-danger" onClick = {this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel </button>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
