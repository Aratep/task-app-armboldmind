import React, {useState, useEffect} from 'react';

import Button from "../../components/button/Button";
import CartGroup from "../../components/cart/CartGroup";
import notificationHoc from "../../components/hoc/notificationHoc";
import Notification from "../../components/notification/Notification";
import {activeLink, openOverlay} from "../../constants/helper-functions"
import history from "../../history";
import './styles.css';

function Media({...props}) {
    const [imgURIArray, setImgURIArray] = useState([]);

    useEffect(() => {
        if (!window.file || window.file.length <= 0) {
            props.showNotification();
        } else {
            props.hideNotification();
        }
    })

    function onCartClick() {
        openOverlay("carousel")
    }

    const handleImageUpload = (e) => {
        if (e.target.files) {
            const _files = Array.from(e.target.files);
            window.file = _files;

            Promise.all(_files.map(file => {
                return (new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.addEventListener('load', (ev) => {
                        resolve(ev.target.result);
                    });
                    reader.addEventListener('error', reject);
                    reader.readAsDataURL(file);
                }));
            }))
                .then(images => {
                    setImgURIArray(images);
                    window.slideImages = images;
                }, error => {
                    console.error(error);
                });
        }
    }

    const onContinue = (e) => {
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem('data'));

        if (!window.file || window.file.length <= 0) {
            props.showNotification();
        } else {

            props.hideNotification();
            activeLink(3);
            localStorage.setItem("data", JSON.stringify(storedData));
            localStorage.setItem("asideActiveLinks", JSON.stringify([1, 2, 3]));

            history.push('/dashboard/preview')
        }

    }

    const imagesURI = window.slideImages ? window.slideImages : [];
    const images = imgURIArray.length > 0 ? imgURIArray :
        imagesURI !== null ? imagesURI : [];

    return (
        <div className="media">
            <Notification {...props}/>
            <h1>Media</h1>
            <article>Choose images for the overview section of your topic.</article>
            <form>
                <CartGroup
                    onClick={onCartClick}
                    images={images}
                    onChange={handleImageUpload}
                    name="file"
                />
                <Button
                    text="CONTINUE"
                    className="btn-continue"
                    onClick={onContinue}
                />
            </form>
        </div>
    );
}

export default notificationHoc(Media, "Must choose min 1 file");
