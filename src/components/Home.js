import React from "react";
import {MainPageSlider} from "./MainPageSlider";
import MainPageDescription from "./MainPageDescription";

export function Home() {
    return(
        <React.Fragment>
            <MainPageSlider/>
            <MainPageDescription/>
        </React.Fragment>
    )
}