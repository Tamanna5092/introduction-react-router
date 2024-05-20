import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Show More</button></Link>
        </div>
    );
};

export default User;