import React from "react";
import UserAdminProducts from "./user_products";
import UserAdminShops from "./user_shops";

export default function AdminPanel() {
    return (
        <section className="vh-100">
        <React.Fragment>
            <UserAdminProducts/>
            <UserAdminShops/>
        </React.Fragment>
        </section>
    )
}