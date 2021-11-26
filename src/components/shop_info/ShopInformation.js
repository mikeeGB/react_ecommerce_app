import React, {useEffect, useState} from "react";
import ShopInfos from './ShopInfos';
import ShopInfosLoadingComponent from './ShopInfosLoading'
import axiosInstance from "../../axios";

function ShopsInformation() {
    const ShopInfosLoading = ShopInfosLoadingComponent(ShopInfos);
    const [appState, setAppState] = useState({
        loading: false,
        shop_infos: null,
    });
    useEffect(() => {
        setAppState({loading: true});

        axiosInstance.get('shop_info/')
            .then(res => {
                const shop_infos = res.data
                setAppState({loading: false, shop_infos: shop_infos})
            });
    }, [setAppState]);
    return (
        <div>
            <h2 className='text-center'>Shop Information</h2>
            <ShopInfosLoading isLoading={appState.loading} shop_infos={appState.shop_infos}/>
        </div>
    );

}
export default ShopsInformation;