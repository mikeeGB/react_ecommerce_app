import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory, useParams } from 'react-router-dom';
import {Button} from "react-bootstrap";


export default function EditProduct() {
    const history = useHistory();
    const id = useParams().id;

    const initialFormData = Object.freeze({
        shop_inf: '',
        title: '',
        category: '',
        description: '',
        price: '',
        size: '',
        color: '',
        quantity: '',
    });

    const [productData, updateFormData] = useState(initialFormData);


    useEffect(() => {
        axiosInstance.get(`products/${id}`).then((res) => {
            updateFormData({
                ...productData,
                'shop_inf': res.data.shop_inf,
                'title': res.data.title,
                'category': res.data.category,
                'description': res.data.description,
                'price': res.data.price,
                'size': res.data.size,
                'color': res.data.color,
                'quantity': res.data.quantity,
            }
            );
        }
        );
        // eslint-disable-next-line
    }, [updateFormData]);


    const handleChange = (e) => {
        updateFormData({
            ...productData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('shop_inf', productData.shop_inf);
        formData.append('title', productData.title);
        formData.append('category', productData.category);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('size', productData.size);
        formData.append('color', productData.color);
        formData.append('quantity', productData.quantity);


        axiosInstance
            .patch(`admin/edit/product/${id}/`, formData)
            .then((res) =>{
                history.push('/admin/');
            })
            .catch(
                function (error){
                    if (error.response) {
                        console.log(error.response);
                    }
                }
            );
    };



    return (
        <React.Fragment>
            <section className="vh-100">
            <div className="mask d-flex align-items-center h-100 m-5">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: 15}}>
                                <div className="card-body p-5">
                                    <h2 className="text-center mb-4">Edit product</h2>

                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4">

                                            <input className="form-control form-control-md"
                                                   id="title"
                                                   name="title"
                                                   value={productData.title}
                                            onChange={handleChange}
                                                   required
                                            />
                                            <label className="form-label">Title</label>

                                            <select className="form-select form-select-md"
                                                   id="category"
                                                   name="category"
                                                    value={productData.category}
                                            onChange={handleChange}
                                            required>
                                                <option value="" disabled>Choose a category...</option>
                                                <option value="1">clothing</option>
                                                <option value="2">shoes</option>
                                                <option value="3">sport</option>

                                            </select>
                                            <label className="form-label">Category</label>


                                            {/*<input className="form-control form-control-md"*/}
                                            {/*       accept="image/*"*/}
                                            {/*       type="file"*/}
                                            {/*       id="image"*/}
                                            {/*       name="image"*/}
                                            {/*onChange={handleChange}*/}
                                            {/*/>*/}
                                            {/*<label className="form-label">Image</label>*/}


                                            <textarea className="form-control form-control-md"
                                                   id="description"
                                                   name="description"
                                                      value={productData.description}
                                            onChange={handleChange}
                                                      required
                                            />
                                            <label className="form-label">Description</label>

                                            <input className="form-control form-control-md"
                                                   id="price"
                                                   name="price"
                                                   value={productData.price}
                                            onChange={handleChange}
                                                   required
                                                   type="number" step="0.01"
                                            />
                                            <label className="form-label">Price</label>

                                            <select className="form-select form-select-md"
                                                   id="size"
                                                   name="size"
                                                    value={productData.size}
                                            onChange={handleChange}
                                            required>
                                                <option value="" disabled>Choose size...</option>
                                                <option value="xs">xs</option>
                                                <option value="s">s</option>
                                                <option value="m">m</option>
                                                <option value="l">l</option>
                                                <option value="xl">xl</option>
                                                <option value="xxl">xxl</option>
                                             </select>
                                            <label className="form-label">Size</label>

                                            <select className="form-select form-select-md"
                                                   id="color"
                                                   name="color"
                                                    value={productData.color}
                                            onChange={handleChange}
                                            required>
                                                <option value="" disabled>Choose color...</option>
                                                <option value="black">black</option>
                                                <option value="white">white</option>
                                                <option value="yellow">yellow</option>
                                                <option value="green">green</option>
                                                <option value="red">red</option>
                                                <option value="orange">orange</option>

                                             </select>
                                            <label className="form-label">Color</label>

                                            <input className="form-control form-control-md"
                                                   id="quantity"
                                                   name="quantity"
                                                   value={productData.quantity}
                                            onChange={handleChange}
                                                   type="number"
                                                   required
                                            />
                                            <label className="form-label">Quantity</label>
                                        </div>


                                        <div className="d-flex justify-content-center">
                                            <Button type="submit"
                                                    className="btn btn-success"

                                            >
                                                Edit product
                                            </Button>
                                        </div>
                                        </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </React.Fragment>
    )

}