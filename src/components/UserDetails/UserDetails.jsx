import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name, address, website, company} = user;
    return (
        <div>
            <h2>User Details Show :{name}</h2>
            <p>Address: {address.street}, {address.city}</p>
            <p>Company name: {company.name}</p>
            <h3>Website: {website}</h3>
        </div>
    );
};

export default UserDetails;