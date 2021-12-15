import React from "react";
import axiosInstance from "../../axios";
import {useHistory, useParams} from "react-router-dom";
import {Button, Container} from "react-bootstrap";


export default function DeleteProduct() {
    const history = useHistory();
    const {id} = useParams();
    console.log(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .delete(`admin/delete/product/${id}/`)
            .catch(function (error){
                if (error.response) {
                    console.log(error.response.data);
                }
            })
            .then(function () {
                history.push({
                    pathname: '/admin/',
                });
                window.location.reload();
            });
    };

    return (
        <section className="vh-100">
        <Container>
            <div className="text-center mt-5 top-50">
            <h2>Do you want to delete chosen product?</h2>
                <Button onClick={handleSubmit} className="btn-danger m-4">Delete this product</Button>
                <Button className="m-4" href={'/admin/'}>Go back to admin</Button>
            </div>
        </Container>
        </section>
    )


}