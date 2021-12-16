import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import {Button} from "react-bootstrap";


export default function CreateShopInfo() {
    const history = useHistory();
    const initialFormData = Object.freeze({
        shop_name: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .post('admin/create/shop_info/', {
                shop_name: formData.shop_name,
            })
            .then((res) =>{
               history.push('/admin/create/product/');
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
        <section className="vh-100 bg-image">

            <div className="mask d-flex align-items-center h-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: 15}}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Give name to your shop</h2>

                                        <div className="form-outline mb-4">
                                            <input className="form-control form-control-lg"
                                                   id="shop_name"
                                                   name="shop_name"
                                            onChange={handleChange}
                                            />
                                            <label className="form-label">Your Shop Name</label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <Button type="button"
                                                    className="btn btn-success"
                                            onClick={handleSubmit}
                                            >
                                                Add shop name
                                            </Button>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}