import React, { Component } from 'react';
import styles from './navBar.module.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <header className={styles.navbar}>
                <nav className={styles.navbar_navigations} >
                    <div><Link to="/profile"><div className={styles.navbar_profile}></div></Link></div>
                    <div className={styles.navbar_navigations_items}>
                        <ul>
                            <li className={styles.navigate}>
                                <Link className={styles.item} to="/home">
                                <i className={styles.icon + " fas fa-home"}>
                                    {this.props.menu ? " Home page" : ""}
                                </i>
                                </Link>
                            </li>
                            <li className={styles.navigate}>
                                <Link className={styles.item} to="/messages">
                                    <i className={styles.icon + " far fa-comments"}>
                                        {this.props.menu ? " Messges" : ""}
                                    </i>
                                </Link>
                            </li>
                            <li className={styles.navigate}>
                                <Link className={styles.item} to="/contacts">
                                    <i className={styles.icon + " far fa-address-book"}>
                                        {this.props.menu ? " Contacts" : ""}
                                    </i>
                                </Link>
                            </li>
                            <li id={styles.setting}>
                                <Link className={styles.item} to="/settings">
                                    <i className={styles.icon + " fas fa-cog"}>
                                        {this.props.menu ? " Settings" : ""}
                                    </i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default NavBar;