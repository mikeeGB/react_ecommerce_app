import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Home} from "./components/Home";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import ShopInformation from "./components/shop_info/ShopInformation";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import LogOut from "./components/auth/logout"

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop_infos" component={ShopInformation} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={LogOut} />


            </Switch>
            <Footer/>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);
