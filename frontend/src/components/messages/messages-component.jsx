import React, { Component } from "react";
import {Link} from 'react-router-dom';
import styles from "./messages.module.css";


class Messages extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            findWord: "",
        }
    }

    coutCharMessgage = 48;

    find = (word, findWord) => {
        let flag = true
        console.log(word, findWord)
        if (word.length > findWord.length){
            for(let indx = 0; indx < word.length; indx++){
                let i = 0
                while (flag){
                    if (word[indx] == findWord[i]){
                        flag = true
                    } else { flag = false }
                }                
            };
        } else { flag = false }
    }

    search = (event) => {
        let elements = this.state.array.map((elem, indx) => {
            let flag = true;
            if (event == "pass"){
                flag = true;
            } else {
                // flag = this.find(elem, event.target.value)
                this.find(String(elem.name), this.state.findWord)
            }

            if (flag) {
                return(
                    <Link key={indx} to={"/message/" + elem.urlСonversation}>
                        <li id={"message_" + indx} className={styles.element}>
                            <img className={styles.photo} src={elem.profile.urlPhoto} alt="photo_profile"></img>
                            <span className={styles.nameBlock}>{elem.profile.firstName + " " + elem.profile.lastName}</span>
                            <span className={styles.lastMessage}>
                                {elem.lastMessage.length > this.coutCharMessgage ? this.sliceMessage(elem.lastMessage, this.coutCharMessgage) : elem.lastMessage}
                            </span>
                        </li>
                    </Link>
                )
            }
        })

        return elements
    }

    sliceMessage = (message, count) => {
        let sliceMess = ""
        for(let i = 0; i < count; i++){
            sliceMess = sliceMess.concat(message[i])
        }

        return sliceMess.concat("...")
    };

    render(){
        return(
            <div className={styles.messages}>
                <div className={styles.search}>
                    <input type="text" placeholder={"Search"} onChange={(e) => {
                            this.setState({findWord: e.target.value})
                    }}/>
                    <i className="fas fa-search"></i>
                </div>
                <ul className={styles.list}>
                    {this.search("pass")}
                </ul>
            </div>
        )
    }
}

export default Messages;