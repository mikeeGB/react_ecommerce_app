import React, {useEffect, useState} from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import {Button} from "react-bootstrap";



export default function CreateProduct() {
    const history = useHistory();
    const initialFormData = Object.freeze({
        shop_inf: '',
        title: '',
        category: '',
        description: '',
        price: '',
        size: '',
        color: '',
        quantity: ''
    });

    const [productData, updateFormData] = useState(initialFormData);
    const [productImage, setProductImage] = useState(null);


    const handleChange = (e) => {
        if(e.target.name === 'image'){
            setProductImage({
                image: e.target.files,
            });
            console.log(e.target.files)
        } else {
        updateFormData({
            ...productData,
            [e.target.name]: e.target.value.trim(),
        });
        }
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
        formData.append('image', productImage.image[0]);


        axiosInstance
            .post('admin/create/product/', formData)
            .then((res) =>{
                // create, or update shop - if exists. Add all associated products to chosen shop
                return axiosInstance.post('admin/create/shop/', {shop_info: productData.shop_inf})
            })
            .then((res => {
                console.log(res);
                history.push(`/admin/`);
            }))
            .catch(
                function (error){
                    if (error.response) {
                        console.log(error.response)
                        let error_message = error.response.statusText;
                        alert(error_message);
                    }
                }
            );
    };



   const [shopInfo, setShopInfo] = useState({ shop_infos: []});

    useEffect(() => {
        axiosInstance.get('my_shops/').then((res) => {
            setShopInfo({shop_infos: res.data});
        });
        }, [setShopInfo]);

    function get_shop_id_options() {
        let id_array_content = []
        for(let i=0; i < shopInfo.shop_infos.length; i++) {
            id_array_content.push(
                <option value={shopInfo.shop_infos[i].id} key={i}>
                    {shopInfo.shop_infos[i].shop_name}
                </option>
            )
        }
        return id_array_content
    }


    return (
        <React.Fragment>
            <div className="mask d-flex align-items-center h-100 m-5">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: 15}}>
                                <div className="card-body p-5">
                                    <h2 className="text-center mb-4">Create product</h2>

                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4">
                                            <select className="form-select form-select-md"
                                                   id="shop_inf"
                                                   name="shop_inf"
                                            onChange={handleChange}
                                            defaultValue=""
                                            required>
                                                <option value="" disabled>Choose a shop...</option>


                                                {get_shop_id_options()}

                                            </select>
                                            <label className="form-label">Shop_inf</label>

                                            <input className="form-control form-control-md"
                                                   id="title"
                                                   name="title"
                                            onChange={handleChange}
                                                   required
                                            />
                                            <label className="form-label">Title</label>

                                            <select className="form-select form-select-md"
                                                   id="category"
                                                   name="category"
                                            onChange={handleChange}
                                            defaultValue=""
                                            required>
                                                <option value="" disabled>Choose a category...</option>
                                                <option value="1">clothing</option>
                                                <option value="2">shoes</option>
                                                <option value="3">sport</option>

                                            </select>
                                            <label className="form-label">Category</label>


                                            <input className="form-control form-control-md"
                                                   accept="image/*"
                                                   type="file"
                                                   id="image"
                                                   name="image"
                                            onChange={handleChange}
                                                   required
                                            />
                                            <label className="form-label">Image</label>

                                            <textarea className="form-control form-control-md"
                                                   id="description"
                                                   name="description"
                                            onChange={handleChange}
                                                      required
                                            />
                                            <label className="form-label">Description</label>

                                            <input className="form-control form-control-md"
                                                   id="price"
                                                   name="price"
                                            onChange={handleChange}
                                                   required
                                                   type="number" step="0.01"
                                            />
                                            <label className="form-label">Price</label>

                                            <select className="form-select form-select-md"
                                                   id="size"
                                                   name="size"
                                            onChange={handleChange}
                                            defaultValue=""
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
                                            onChange={handleChange}
                                            defaultValue=""
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
                                                Add product
                                            </Button>
                                        </div>
                                        </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
    )

}