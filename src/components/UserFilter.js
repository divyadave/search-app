import Users from "./Users";
import classes from './UserFilter.module.css';
import { Component } from "react";
import userContext from "../store/user-context";
import ErrorBoundry from "./ErrorBoundry";


class UserFilter extends Component {
    static contextType = userContext; 
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }
    searchHandler = (event) => {
        this.setState({searchTerm: event.target.value})
    }
    
    componentDidMount() {
        this.setState({filteredUsers: this.context.users})
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
        console.log(prevState)
        if(prevState.searchTerm !== this.state.searchTerm)
        {
        this.setState({filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))})
        }
    }
    render () {
        return (
            <>
            <div className={classes.finder}>
            <input type='search' onChange={this.searchHandler.bind(this)}></input>
            <ErrorBoundry>
            <Users users={this.state.filteredUsers}></Users>
            </ErrorBoundry>
            </div>
            </>
        )
    

}
}
export default UserFilter;