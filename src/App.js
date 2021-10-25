//import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListUser from "./components/ListUser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InsertUser from "./components/InsertUser";
import UpdateUser from "./components/UpdateUser";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <div className="container">
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListUser}></Route>
              <Route path="/users" component={ListUser}></Route>
              <Route path="/addUser" component={InsertUser}></Route>
              <Route path="/updateU/:id" component={UpdateUser}></Route>
            </Switch>
          </div>
        </div>

        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
