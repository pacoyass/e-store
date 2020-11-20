import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './component/product/Products';
import { Datacenter } from './Contextapi/Datacenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar/Navbar';
import Addnew from './component/product/Addnew';
import Cards from './component/product/Cards';
import Updates from './component/product/Updates';
import Showinfos from './component/product/Showinfos';

function App() {
  return (
    <div>
      <Datacenter>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/Addnew" component={Addnew} />
            <Route exact path="/Cards" component={Cards} />
            <Route exact path="/update/:id" component={Updates} />
            <Route exact path="/infos/:id" component={Showinfos} />
          </Switch>
        </Router>
      </Datacenter>
    </div>
  );
}

export default App;
