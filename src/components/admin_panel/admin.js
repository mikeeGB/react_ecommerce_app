import React from "react";
import UserAdminProducts from "./user_products";
import UserAdminShops from "./user_shops";

export default function AdminPanel() {
    return (
        <section className="vh-100">
        <React.Fragment>
            <h2 className='text-center mt-5'>Admin panel</h2>
            <UserAdminShops/>
            <UserAdminProducts/>
        </React.Fragment>
        </section>
    )
}