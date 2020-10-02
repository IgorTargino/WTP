import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from  './pages/Home/index'
import Etapa01 from  './pages/Etapa01/index'
// import Etapa02 from  './pages/Etapa02/index'
// import Etapa03 from  './pages/Etapa03/index'
// import Etapa04 from  './pages/Etapa04/index'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pergunta" exact component={Etapa01} />
        {/* <Route path="/02" exact component={Etapa02} />
        <Route path="/03" exact component={Etapa03} />
        <Route path="/04" exact component={Etapa04} /> */}
      </Switch>
    </BrowserRouter>
  )
}