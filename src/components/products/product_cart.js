import React, {useEffect, useState} from "react";
import "../admin.css";

export default function ProductCart() {

    const [data, setData] = useState({cart_products: []})

    useEffect(() => {
        let cart_products = JSON.parse(localStorage.getItem("cart")) || [];
        setData({cart_products: cart_products});
    }, [])



    if(data.cart_products.length === 0){
        var info = "Your cart is empty, please add products"
    }

    function removeProduct(prodTitle) {
        // change state
        setData({cart_products: data.cart_products.filter(prod => prod.title !== prodTitle)});

        // rewrite localStorage
        let productArray = JSON.parse(localStorage.getItem("cart"));
        let index_of_object_to_delete = productArray.findIndex(prod => prod.title === prodTitle)
        productArray.splice(index_of_object_to_delete, 1);
        localStorage.setItem("cart", JSON.stringify(productArray));
    }

    function count_total_sum() {
        return data.cart_products.map(prod => prod.price).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    }



    return (
        <React.Fragment>
            <section className="h-100" style={{backgroundColor: "#eee"}}>
                <div className="container h-100 py-5 min-vh-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                            </div>
                            <h5 className="fw-normal mb-2 text-black">{info}</h5>

                            {data.cart_products.map((cart_product) => {
                                return (
                                    <div className="card rounded-3 mb-4" key={cart_product.title}>
                                        <div className="card-body p-4">
                                            <div className="row d-flex justify-content-between align-items-center">
                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                    <img
                                                        src={cart_product.image}
                                                        className="img-fluid rounded-3" alt="Product cart item"/>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                    <p className="lead fw-normal mb-2">{cart_product.title}</p>
                                                    <p><span className="text-muted">Size: </span>{cart_product.size} <span
                                                        className="text-muted">Color: </span>{cart_product.color}</p>
                                                </div>

                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                    <h5 className="mb-0">${cart_product.price}</h5>
                                                </div>
                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                    <i className="admin-del-icon" onClick={()=> removeProduct(cart_product.title)}><i className="fas fa-trash fa-lg"/></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}



                            <div className="card">
                                <div className="card-body text-center">
                                    <h5>Total: $ {count_total_sum()}</h5>

                                    <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}