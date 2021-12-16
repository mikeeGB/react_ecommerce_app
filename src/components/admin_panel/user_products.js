import React, {useState, useEffect} from "react";
import axiosInstance from "../../axios";
import {Table, Container, Button} from "react-bootstrap";
import "../admin.css"

export default function UserAdminProducts() {

    const [data, setData] = useState({ admin_products: []});



    useEffect(() => {
        axiosInstance.get('my_products/').then((res) => {
            setData({admin_products: res.data});
        });
        }, [setData]);

    console.log(data)

    return (
        <React.Fragment>
            <Container className="mt-5">
                <h2 className='text-center mb-5'>Admin panel</h2>
                <h4>My products</h4>
                <Table bordered hover>
                    <thead className="text-center">
                    <tr>
                        <th>id</th>
                        <th>Shop name</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody className="text-center">
                    {data.admin_products.map((admin_prod) => {
                        return(
                            <tr key={admin_prod.id}>
                                <td>{admin_prod.id}</td>
                                <td><a href={`/shops/${admin_prod.shop_inf}`} className="admin-link">{admin_prod.shop_name}</a></td>
                                <td><a href={`/products/${admin_prod.id}`} className="admin-link">{admin_prod.title}</a></td>
                                <td>{admin_prod.price}$</td>
                                <td>{admin_prod.quantity}</td>
                                <td>{admin_prod.color}</td>
                                <td>{admin_prod.size}</td>
                                <td>
                                    <div className="row text-center">
                                        <div className="col">
                                            <a href={`/admin/edit/product/${admin_prod.id}/`}><i className="fas fa-edit admin-edit-icon"/></a>
                                        </div>
                                        <div className="col">
                                            <a href={`/admin/delete/product/${admin_prod.id}/`}><i className="fas fa-trash-alt admin-del-icon"/></a>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
                <div className="text-end mb-5"><Button href={"/admin/create/product/"} className={"btn-success"}>Add product</Button></div>
            </Container>
        </React.Fragment>
    )
}