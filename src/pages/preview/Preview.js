import React, { useEffect} from 'react';

import Notification from "../../components/notification/Notification";
import notificationHoc from "../../components/hoc/notificationHoc";
import Button from "../../components/button/Button";
import yard from "../../images/yard@2x.png"
import flat from "../../images/flat@2x.png"
import avatar from "../../images/avatar.png";
import {openOverlay, activeLink} from "../../constants/helper-functions"
import './styles.css';
import {API_URL} from "../../constants/api-details";

const Preview = ({...props}) => {

    useEffect(() => {
        activeLink(null, [1, 2, 3])
    }, []);


    function publish() {
        const data = JSON.parse(localStorage.getItem('data'));
        const authToken = localStorage.getItem('authToken');
        const file = Object.assign({}, {file: window.file})

        const formData = new FormData();
        formData.append("categoryId", data.categoryId);
        formData.append("address", data.address);
        formData.append("lat", data.lat);
        formData.append("lng", data.lng);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("file", file.file);

        fetch(`${API_URL}/topic`, {
            method: "POST",
            headers: {
                Authorization: `bearer ${authToken}`,
                "accept": "application/json",
                // 'Content-Type': 'multipart/form-data',
            },
            body: formData
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                if (response.success === true) {
                    props.hideNotification();
                    openOverlay("successModal");
                    localStorage.removeItem("data");
                    localStorage.removeItem("imagesURI");
                    localStorage.removeItem("asideActiveLinks");
                } else {
                    props.showNotification()
                }
            })
    }

    function onPublish(e) {
        e.preventDefault();
        publish()
    }

    return (
        <div className="preview">
            <Notification {...props}/>
            <h1>Preview</h1>
            <form>
                <div className="image-group">
                    <img src={yard} alt="yard"/>
                    <img src={flat} alt="flat"/>
                </div>
                <div className="person-info">
                    <img src={avatar} alt="avatar" className="avatar"/>
                    <span>Anna Smith</span>
                </div>
                <h1>Lets help Abovyan secondary school and start main building reconstraction</h1>
                <article>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to
                    popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classical literature, discovered the undoubtable
                    source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                    Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                    This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                    section 1.10.32.
                </article>

                <Button
                    text="PUBLISH"
                    className="btn-continue"
                    onClick={onPublish}
                />
            </form>
        </div>
    );
};

export default notificationHoc(Preview, `Can't create topic`);
