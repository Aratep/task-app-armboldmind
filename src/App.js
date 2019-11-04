import React from 'react';

import {AppRoutes} from './routes'
import SuccessModal from "./components/success-modal/SuccessModal";
import Carousel from "./components/carousel/Carousel";
import Overlay from "./components/overlay/Overlay";
import { closeSuccessModal, resetActiveLinks} from "./constants/helper-functions"
import { slideImages} from "./constants/images"
import history from "./history";
import './App.css';

function App() {

    function onSuccessClick() {
        resetActiveLinks();
        closeSuccessModal();
        history.push("/dashboard/category")
    }

    return (
        <>
            <AppRoutes/>
            <Overlay>
                <SuccessModal onClick={onSuccessClick}/>
                <Carousel images={slideImages}/>
            </Overlay>
        </>
    );
}

export default App;
