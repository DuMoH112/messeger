import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import styles from "./App.module.css";
import Profile from "./profile/profile-components";
import NavBar from "./navBar/navBar-components";
// import Messages from "./messages/messages-component";
import Contacts from "./contacts/contacts-component";
import Settings from "./setting/settings-component";
import * as data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  // data = JSON.parse('./data.json');

  handleSubmit(event) {
    const text = document.querySelector("#char-input").value;

    axios
      .get(`/char_count?text=${text}`)
      .then(({ data }) => {
        document.querySelector(
          "#char-count"
        ).textContent = `${data.count} characters!`;
      })
      .catch(err => console.log(err));
  }

  Home = () => {
    return (
      <div className="App">
        <div>
          <label htmlFor="char-input"> How many characters does </label>
          <input id="char-input" type="text" />
          <button onClick={this.handleSubmit}> have ? </button>
          <h3 id="char-count"></h3>
        </div>
      </div>
    );
  };

  openMenu(e) {
    let menu = this.state.menuOpen; 
    if(e.target.tagName === 'DIV' || e.target.tagName === "I"){}else{menu = !this.state.menuOpen;}
    
    this.setState(() => {
      return { menuOpen: menu };
    });
  };
  
  render() {
    return (
      <Router>
        <div className={this.state.menuOpen ? styles.wrapperOpen : styles.wrapperClose}>
          <div className={styles.navbar} onClick={this.openMenu.bind(this)}>
            <NavBar menu={this.state.menuOpen} />{" "}
          </div>
          <div className={styles.content}>
            <Route exact path="/profile"><Profile data={data.default[0]}/></Route>
            <Route exact path="/home" component={this.Home}/>
            {/* <Route exact path="/messages" ><Messages data={data.default}/></Route> */}
            <Route exact path="/contacts" ><Contacts data={data.default}/></Route>
            <Route exact path="/settings" ><Settings data={data.default}/></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
