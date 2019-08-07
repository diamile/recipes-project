import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import Describe from './describe';
import Commande from './commande';

const Router=()=>( 
    <BrowserRouter >
    <Switch>
    <Route path='/' component={App} exact/>
    <Route path='/recette/:id' component={Describe}/>
    <Route path='/commande/:id' component={Commande}/>
    </Switch>
    </BrowserRouter>
);

export default Router;