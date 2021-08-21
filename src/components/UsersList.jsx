import React from 'react';

import '../styles/randomUsers.css'

const UsersList = props => {

    const users = props.users.map(user => (
        <div className="user" key={user.login.uuid}>
            <img src={user.picture.large} alt={user.name.last} />
            <h4>{`${user.name.title} ${user.name.last}`}</h4>
            <p>{user.email}</p>
        </div>
    ))

    return (
        <div className="randomUsers">
            {users}
        </div>
    );
}

export default UsersList;


