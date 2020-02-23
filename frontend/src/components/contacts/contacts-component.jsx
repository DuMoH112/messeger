import React, { Component } from "react";
import styles from "./contacts.module.css";
import {Link} from 'react-router-dom';

class Contacts extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        }
    }

    render(){
        const elements = this.props.data.map((elem, indx) => {
            return(
                <Link key={indx} to={"/profile/" + elem.profile.urlProfile}>
                    <li className={styles.element}>
                        <img className={styles.photo} src={elem.profile.urlPhoto} alt="photo_profile"></img>
                        <span className={styles.nameBlock}>{elem.profile.firstName + " " + elem.profile.lastName}</span>
                    </li>
                </Link>
            )})

        return(
            <div className={styles.contacts}>
                <div className={styles.search}>
                    <input type="text" placeholder={"Search"}/>
                    <i className="fas fa-search"></i>
                </div>
                <ul className={styles.list}>
                    {elements}
                </ul>
            </div>
        )
    }
}

export default Contacts;