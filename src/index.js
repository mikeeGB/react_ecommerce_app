import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Home} from "./components/Home";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import ShopInformation from "./components/shop_info/ShopInformation";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop_infos" component={ShopInformation} />

            </Switch>
            <Footer/>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);
