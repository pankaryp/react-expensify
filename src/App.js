import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is a dashboard
    </div>
);

const AddExpensePage = () => (
    <div>
        This is my add page
    </div>
);

const EditExpensePage = () => (
    <div>
        This is my edit page
    </div>
);

const HelpPage = () => (
    <div>
        This is my help page
    </div>
);

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
        <NavLink exact={true} to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink exact={true} to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink exact={true} to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes =(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route exact={true} path="/" component={ExpenseDashboardPage}/>
            <Route exact={true} path="/create" component={AddExpensePage}/>
            <Route exact={true} path="/edit" component={EditExpensePage}/>
            <Route exact={true} path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
