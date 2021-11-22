import React, {useEffect, useState} from "react";
import ShopInfos from './ShopInfos';
import ShopInfosLoadingComponent from './ShopInfosLoading'

function ShopsInformation() {
    const ShopInfosLoading = ShopInfosLoadingComponent(ShopInfos);
    const [appState, setAppState] = useState({
        loading: false,
        shop_infos: null,
    });
    useEffect(() => {
        setAppState({loading: true});
        const apiUrl = `http://127.0.0.1:8000/api/shop_info/`;
        fetch(apiUrl)
            .then(data => data.json())
            .then((shop_infos => {
                setAppState({loading: false, shop_infos: shop_infos});
            }));
    }, [setAppState]);
    return (
        <div>
            <h2 className='text-center'>Shop Information</h2>
            <ShopInfosLoading isLoading={appState.loading} shop_infos={appState.shop_infos}/>
        </div>
    );

}
export default ShopsInformation;