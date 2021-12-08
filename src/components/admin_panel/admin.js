import React from "react";
import UserAdminProducts from "./user_products";
import UserAdminShops from "./user_shops";

export default function AdminPanel() {
    return (
        <React.Fragment>
            <UserAdminProducts/>
            <UserAdminShops/>
        </React.Fragment>
    )
}