import React, {useState} from "react";
import axiosInstance from '../../axios';
import {useHistory} from "react-router-dom";


export default function SignUp() {
    const history = useHistory();
    const initialFormData = Object.freeze({
        email: '',
        username: '',
        password: '',
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
            .post(`user/register/`, {
                email: formData.email,
                user_name: formData.username,
                password: formData.password,
        })
            .then((res) => {
                console.log(res.data)
                history.push('/login');


            }).catch(e => {
                console.log(e.response)
                if (e.response.data.user_name && e.response.data.user_name.length !== 0) {
                    alert(e.response.data.user_name[0]);
                }
                if (e.response.data.email && e.response.data.email.length !== 0) {
                    alert(e.response.data.email[0]);
                }
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
                                    <h2 className="text-uppercase text-center mb-5">Sign up</h2>

                                    <form>

                                        <div className="form-outline mb-4">
                                            <input type="text"
                                                   className="form-control form-control-lg"
                                                   id="username"
                                                   name="username"
                                            onChange={handleChange}
                                            />
                                            <label className="form-label">Your Username</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email"
                                                   className="form-control form-control-lg"
                                                   id="email"
                                                   name="email"
                                            onChange={handleChange}
                                            />
                                            <label className="form-label">Your Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password"
                                                   className="form-control form-control-lg"
                                                   id="password"
                                                   name="password"
                                            onChange={handleChange}
                                            />
                                            <label className="form-label">Password</label>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label">
                                                I agree all statements in <a href="#!" className="text-body"><u>Terms of
                                                service</u></a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                            onClick={handleSubmit}
                                            >
                                                Register
                                            </button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a
                                            href={"/login"} className="fw-bold text-body"><u>Login here</u></a></p>

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