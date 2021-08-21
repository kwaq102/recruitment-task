import React, { Component } from 'react';
import UsersList from './UsersList';

const API = "https://randomuser.me/api/?results=5";

class Users extends Component {
    state = {
        users: []
    }
    handleDataFetch = () => {

        fetch(API)
            .then(res => {
                if (res.ok) {
                    return res;
                }
                throw Error(res.status)
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users: data.results
                })
            })
            .catch(error => console.log(error + " coś nie halo"));
    }

    componentDidMount() {
        this.handleDataFetch();
    }

    render() {
        const users = this.state.users;

        return (
            <section className="users">
                <UsersList users={users} />
            </section>
        );
    }
}

export default Users;