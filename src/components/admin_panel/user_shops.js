import React, {useState, useEffect} from "react";
import axiosInstance from "../../axios";
import {Table, Container, Button} from "react-bootstrap";
import "../admin.css"

export default function UserAdminShops() {

    const [data, setData] = useState({ admin_shops: []});


    useEffect(() => {
        axiosInstance.get('my_shops/').then((res) => {
            setData({admin_shops: res.data});
        });
        }, [setData]);

    console.log(data)

    return (
        <React.Fragment>
            <Container className="mt-5">
                <h4>My shops</h4>
                <Table bordered hover>
                    <thead className="text-center">
                    <tr>
                        <th>id</th>
                        <th>Shop name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody className="text-center">
                    {data.admin_shops.map((admin_shop) => {
                        return(
                            <tr key={admin_shop.id}>
                                <td>{admin_shop.id}</td>
                                <td><a href={`/shops/${admin_shop.id}`} className="admin-link">{admin_shop.shop_name}</a></td>
                                <td>
                                    <div className="row text-center">
                                        <div className="col">
                                            <a href={`/admin/edit/shop_info/${admin_shop.id}/`}><i className="fas fa-edit admin-edit-icon"/></a>
                                        </div>
                                        <div className="col">
                                            <a href={`/admin/delete/shop_info/${admin_shop.id}/`}><i className="fas fa-trash-alt admin-del-icon"/></a>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
                <div className="text-end mb-5"><Button href={"/admin/create/shop_info/"} className={"btn-success"}>Add shop</Button></div>
            </Container>
        </React.Fragment>
    )
}