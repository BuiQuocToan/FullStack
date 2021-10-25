import React, { Component } from "react";
import ServiceU from "../service/ServiceU";
// import "../styles/Update.scss"
import { toast } from 'react-toastify';

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      avatar: '',
      fullname: '',
      username: '',
      password: ''
    };
    this.changeavatar = this.changeavatar.bind(this);
    this.changefullname = this.changefullname.bind(this);
    this.changeusername = this.changeusername.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount(){
    ServiceU.getById(this.state.id).then( (res) => {
      let user = res.data;
      this.setState({
        avatar: user.avatar,
        fullname: user.fullname,
        username: user.username,
        password: user.password
      });
      //console.log("user by ID =>" + JSON.stringify(user))
    });
  }

  // componentDidMount(){
  //   console.log(this.state.avatar)
  // }
  //tai sao khi console.log ra lai la: undefined mac du o tre this.state da gan: avatar: this.props.match.params.avatar,
  // muc dich thac mac de: xem xet thay doan componenDidMount() -dien san thong tin vao cac o, phai dung ham getById = cac gia tri da co san cua user trong listUser

  updateUser = (e) => {
    e.preventDefault();

    let user = {id: this.state.id,avatar :this.state.avatar, fullname : this.state.fullname, username: this.state.username, password: this.state.password};
    //console.log('EntityU => ' + JSON.stringify(user));

    ServiceU.update(user).then(res =>{
      this.props.history.push('/users')
    })
    toast.warning("Update success: " + this.state.fullname,{
      icon: "👌",
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
              <h3 className="text-center"> Update User </h3>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Avatar</label>
                    <input
                      placeholder="Avatar"
                      name="avatar"
                      className="form-control"
                      value={this.state.avatar}
                      onChange={this.changeavatar}
                    />
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Full Name</label>
                    <input
                      placeholder="Full Name"
                      name="fullname"
                      className="form-control"
                      value={this.state.fullname}
                      onChange={this.changefullname}
                    />
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">User Name</label>
                    <input
                      placeholder="Username"
                      name="username"
                      className="form-control"
                      value={this.state.username}
                      onChange={this.changeusername}
                    />
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">PassWord</label>
                    <input
                      placeholder="Pass Word"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changepassword}
                    />
                  </div>

                  <button className="btn btn-success" onClick = {this.updateUser}> Update </button>
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
