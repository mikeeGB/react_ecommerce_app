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
import LogOut from "./components/auth/logout";
import Shop from "./components/shop/single_shop";
import All_products from "./components/products/all_products";
import ProductDetailed from "./components/products/product_detailed";
import AdminPanel from "./components/admin_panel/admin";
import CreateShopInfo from "./components/admin_panel/create_shop_info";
import EditShopInfo from "./components/admin_panel/edit_shop_info";
import DeleteShopInfo from "./components/admin_panel/delete_shop_info";
import CreateProduct from "./components/admin_panel/create_product";
import DeleteProduct from "./components/admin_panel/delete_product";


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
                <Route path="/shops/:id" component={Shop} />
                <Route path="/products/:id" component={ProductDetailed} />
                <Route path="/products" component={All_products} />
                <Route exact path="/admin/create/shop_info/" component={CreateShopInfo} />
                <Route exact path="/admin/edit/shop_info/:id/" component={EditShopInfo} />
                <Route exact path="/admin/delete/shop_info/:id/" component={DeleteShopInfo} />


                <Route exact path="/admin/create/product/" component={CreateProduct}/>
                <Route exact path="/admin/delete/product/:id/" component={DeleteProduct}/>


                <Route path="/admin" component={AdminPanel} />





            </Switch>
            <Footer/>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);
