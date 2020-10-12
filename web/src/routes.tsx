import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
        </BrowserRouter>
    );
}

export default Routes;