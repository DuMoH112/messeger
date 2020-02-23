import React, {Component} from 'react';
import styles from './profile.module.css';

class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            urlPhoto: this.props.data.profile.urlPhoto,
            nickname: this.props.data.profile.nickname,
            firstName: this.props.data.profile.firstName,
            lastName: this.props.data.profile.lastName,
            about: this.props.data.profile.about
        }
    }
    render(){
        console.log(this.props)
        return(
            <form className={styles.profile}>
                <div className={styles.mainInfo}>
                    <img className={styles.photo} src={this.state.urlPhoto} alt="photo_profile"></img>
                    <div className={styles.inptPhoto}><i className="fas fa-images"> Изменить фото<input type={"file"}/></i></div>
                    <div className={styles.profileInfo}>
                        <input 
                            type="text" 
                            placeholder={"Nickname"}
                            value={this.state.nickname}
                            onChange={(e)=>{this.setState({nickname: e.target.value})}}
                        />
                        <input  
                            type={"text"}
                            placeholder={"First name"}  
                            value={this.state.firstName}
                            onChange={(e)=>{this.setState({firstName: e.target.value})}}
                        />
                        <input  
                            type={"text"}
                            placeholder={"Last name"} 
                            value={this.state.lastName}
                            onChange={(e)=>{this.setState({lastName: e.target.value})}}
                        />
                    </div>
                </div>
                <textarea 
                    className={styles.textarea_about} 
                    type="text"
                    placeholder={"About me"} 
                    value={this.state.about}
                    onChange={(e)=>{this.setState({about: e.target.value})}}
                    spellCheck
                />
                <input type={"submit"} className={styles.button}></input>
            </form>
        )
    }
}

export default Profile;