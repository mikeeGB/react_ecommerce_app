import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';


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
               history.push('/admin/');
            });
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

                                    <form>

                                        <div className="form-outline mb-4">
                                            <input className="form-control form-control-lg"
                                                   id="shop_name"
                                                   name="shop_name"
                                            onChange={handleChange}
                                            />
                                            <label className="form-label">Your Shop Name</label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                            onClick={handleSubmit}
                                            >
                                                Add shop name
                                            </button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}