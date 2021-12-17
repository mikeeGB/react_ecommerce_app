import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory, useParams } from 'react-router-dom';
import {Button} from "react-bootstrap";


export default function EditShopInfo() {
    const history = useHistory();
    const id = useParams().id;

    const initialFormData = Object.freeze({
        shop_name: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    useEffect(() => {
        axiosInstance.get(`shop_info/${id}`).then((res) => {
            updateFormData({
                ...formData,
                'shop_name': res.data.shop_name,
            });
            console.log(res.data)
        });
        // eslint-disable-next-line
    }, [updateFormData]);

    console.log(formData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .patch(`admin/edit/shop_info/${id}/`, {
                shop_name: formData.shop_name,
            })
            .then((res) =>{
                history.push('/admin/');
            })
            .catch(
                function (error){
                    if (error.response) {
                        let error_message = error.response.data.shop_name.toString();
                        alert(error_message);
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
                                    <h2 className="text text-center mb-5">Rename your shop</h2>

                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4">
                                            <input className="form-control form-control-lg"
                                                   id="shop_name"
                                                   name="shop_name"
                                                   value={formData.shop_name}
                                                   required
                                            onChange={handleChange}
                                            />
                                            <label className="form-label">Shop Name</label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <Button type="submit"
                                                    className="btn btn-success"
                                            >
                                                Change shop name
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
    )

}