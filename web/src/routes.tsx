import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrfanatosMap from './pages/OrfanatosMap';

// As rotas também são componentes no react
function Routes () {
    return (
        // BrowserRouter = componente responsável por informar a aplicação que a partir de onde ele 
        // é chamado teremos um roteamento de componentes
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrfanatosMap} />
            </Switch>
        </BrowserRouter>
    
    );
}

export default Routes;