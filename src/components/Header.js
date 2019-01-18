import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
        <NavLink exact={true} to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink exact={true} to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink exact={true} to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;