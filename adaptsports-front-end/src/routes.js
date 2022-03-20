import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/index';
import Locais from './Pages/Locais/index';
import SobreNos from './Pages/SobreNos/index';
import Esportes from './Pages/Esportes/index';
import NavBar from './Components/NavBar/NavBar';
import Contatos from './Pages/Contatos';
import Login from './Pages/Login/Login'
import PutLocais from './Pages/Requisicoes/PutLocais/PutLocais';
import PostLocais from './Pages/Requisicoes/PostLocais/PostLocais'

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/sobrenos' component={SobreNos} />
                    <Route path='/locais' component={Locais} />
                    <Route path='/esportes' component={Esportes} />
                    <Route path='/contatos' component={Contatos} />
                    <Route path='/login' component={Login} />
                    <Route path='/atualizarLocal' component={PutLocais} />
                    <Route path='/adicionarLocal' component={PostLocais} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}