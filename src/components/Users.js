import { Component } from "react";
import { useState } from "react";
import User from "./User";
import classes from './Users.module.css';

class Users extends Component {
    
    constructor() {
        super(); 
        this.state = {
            showUsers: true
        }
    }

    componentDidUpdate() {
        if(this.props.users.length === 0) {
            throw new Error("No users are provided")
        }
    }
   
    toggleHandler= () => {
        this.setState((previousState) => {
           return {showUsers: !previousState.showUsers}
        })
    }
    render() {
        const userList = (
            <ul>
                {
                    this.props.users.map((user) => {
                       return <User id={user.id} name={user.name}></User>
                    })
                }
       
            </ul>
        );
        return(
        <div className={classes.users}>
        <button onClick={this.toggleHandler.bind(this)}>{ this.state.showUsers ? 'Hide': 'Show'} Users</button>
        { this.state.showUsers && userList}

    </div>
        )

    }
}

export default Users;