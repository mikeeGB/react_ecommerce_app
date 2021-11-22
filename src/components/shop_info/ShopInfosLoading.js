import React from "react";

function ShopInfosLoading(Component) {
    return function ShopInfosLoadingComponent({isLoading, ...props}) {
        if (!isLoading) return <Component {...props}/>;
        return (
            <p className="text-center">Waiting the data to load...</p>
        );
    };
}
export default ShopInfosLoading;