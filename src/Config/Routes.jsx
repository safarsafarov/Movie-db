import React from 'react';

import { Router, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Catalog from '../Pages/Catalog';
import Detail from '../Pages/detail/Detail';

const Routes = () => {
    return (
        <Router>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Router>
    );
}

export default Routes;