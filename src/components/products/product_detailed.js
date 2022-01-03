import React, {useState, useEffect} from "react";
import axiosInstance from "../../axios";
import {useParams} from "react-router-dom";
import "../product_details.css";



export default function ProductDetailed() {
    const {id} = useParams();

    const [data, setData] = useState({ products: [] });

    useEffect(() => {
        axiosInstance.get(`products/${id}`).then((res) => {
            setData({products: res.data});
            console.log(res.data);
        });
        }, [id, setData]);


    const quantity_options = quantity => {
        let content = [];
        for (let i=1; i <= quantity; i++) {
            content.push(<option key={i}>{i}</option>);
        }
        return content;
    }

    function add_to_cart() {
        var cart_products = JSON.parse(localStorage.getItem("cart")) || [];

        // check if product is in cart already
        let product_is_already_in_cart = cart_products.some(elem => elem.title === data.products.title)
        console.log(product_is_already_in_cart);

        if(product_is_already_in_cart){
            alert("This product is already in your shopping cart. Please add another product")
        }
        else {
            cart_products.push({title: data.products.title, description: data.products.description, creator: data.products.creator, shop_name: data.products.shop_name, color: data.products.color,
                                size: data.products.size, image: data.products.image, price: data.products.price});
            localStorage.setItem("cart", JSON.stringify(cart_products));
            alert("Product added to cart!");
        }

    }

    return (
        <React.Fragment>

            <div className="container mt-5">
                <div className="card">
                    <div className="row">
                        <aside className="col-sm-5 border-right">
                            <article className="gallery-wrap">
                                <div className="img-big-wrap">
                                    <div><a href={data.products.image}><img src={data.products.image} alt="prod_img"/></a>
                                    </div>
                                </div>
                                <div className="img-small-wrap">
                                    <div className="item-gallery"><img src="" alt=""/></div>
                                    <div className="item-gallery"><img src="" alt=""/></div>
                                    <div className="item-gallery"><img src="" alt=""/></div>
                                    <div className="item-gallery"><img src="" alt=""/></div>
                                </div>
                            </article>
                        </aside>
                        <aside className="col-sm-7">
                            <article className="card-body p-5">
                                <h3 className="title mb-3">{data.products.title}</h3>
                                <p className="price-detail-wrap">
                                    <span className="price h3 text-warning">
                                        <span className="currency">US $</span><span className="num">{data.products.price}</span>
                                    </span>
                                </p>
                                <dl>
                                    <dt>Description</dt>
                                    <dd><p>{data.products.description}</p></dd>
                                </dl>
                                <dl>
                                    <dt>Model creator</dt>
                                    <dd>{data.products.creator}</dd>
                                </dl>
                                <dl>
                                    <dt>Color</dt>
                                    <dd>{data.products.color}</dd>
                                </dl>
                                <dl className="param param-feature">
                                    <dt>Category</dt>
                                    <dd>{data.products.category}</dd>
                                </dl>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-5">
                                        <dl className="param param-inline">
                                            <dt>Quantity:</dt>
                                            <dd>
                                                <select className="form-control form-control-sm"
                                                        style={{width:70}}>
                                                    {quantity_options(data.products.quantity)}

                                                </select>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="col-sm-7">
                                        <dl className="param param-inline">
                                            <dt>Size:</dt>
                                            <dd>
                                                <label className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                           name="inlineRadioOptions" id="inlineRadio2"
                                                           value="option2"/>
                                                    <span className="form-check-label">{data.products.size}</span>
                                                </label>
                                                {/*<label className="form-check form-check-inline">*/}
                                                {/*    <input className="form-check-input" type="radio"*/}
                                                {/*           name="inlineRadioOptions" id="inlineRadio2"*/}
                                                {/*           value="option2"/>*/}
                                                {/*    <span className="form-check-label">MD</span>*/}
                                                {/*</label>*/}
                                                {/*<label className="form-check form-check-inline">*/}
                                                {/*    <input className="form-check-input" type="radio"*/}
                                                {/*           name="inlineRadioOptions" id="inlineRadio2"*/}
                                                {/*           value="option2"/>*/}
                                                {/*    <span className="form-check-label">XXL</span>*/}
                                                {/*</label>*/}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <hr />
                                <button className="btn btn-lg btn-primary text-uppercase"> Buy now </button>
                                <button className="btn btn-lg btn-outline-success text-uppercase" onClick={add_to_cart}>
                                    <i className="fas fa-shopping-cart"/> Add to cart </button>

                            </article>
                        </aside>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}