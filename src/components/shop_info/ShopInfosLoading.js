import React from "react";

function ShopInfosLoading(Component) {
    return function ShopInfosLoadingComponent({isLoading, ...props}) {
        if (!isLoading) return <Component {...props}/>;
        return (
            <section className="vh-100">
            <p className="text-center">Waiting the data to load...</p>
            </section>
        );
    };
}
export default ShopInfosLoading;