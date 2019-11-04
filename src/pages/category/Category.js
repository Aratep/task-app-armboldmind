import React, {useState, useEffect, useRef} from 'react';
import {Map, Marker, TileLayer,} from 'react-leaflet'
import L from 'leaflet';
// eslint-disable-next-line
import LCG from 'leaflet-control-geocoder'; //do not remove, for map address correct work

import Input from "../../components/inputs/Input";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button";
import allFieldsValues from "../../components/hoc/allFieldsValues";
import notificationHoc from "../../components/hoc/notificationHoc";
import Notification from "../../components/notification/Notification";
import {activeLink} from "../../constants/helper-functions";
import {API_URL} from "../../constants/api-details";
import marker from "../../images/marker.svg"
import history from "../../history";
import './styles.css';

const customIcon = L.icon({
    iconUrl: marker,
});

const Category = ({...props}) => {
    const defPosition = [51.505, -0.09];

    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [location, setLocation] = useState([]);
    const [address, setAddress] = useState('');
    const markerPosition = (location.lat && location.lng) ? [location.lat, location.lng] : defPosition;

    const {data} = props;
    const defAddress = address || (data && data.address);
    const defCategoryId = categoryId || (data && data.categoryId);
    let leafletMap = useRef(null);

    useEffect(() => {
        getCategories();
        getAddress();
    }, []);

    function getCategories() {
        fetch(`${API_URL}/topic/category`)
            .then(res => res.json())
            .then(res => {
                setCategories(res.data)
            })
    }

    function getAddress() {
        const map = leafletMap.leafletElement;
        const geocoder = L.Control.Geocoder.nominatim();

        map.on('click', e => {
            geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), results => {
                var r = results[0];
                if (r) {
                    setAddress(r.name)
                }
            })
        })
    }

    function handleMapClick(e) {
        setLocation(e.latlng);
    }

    function onContinue(e) {
        e.preventDefault();
        const data = {categoryId, lat: location.lat, lng: location.lng, address};

        if (defAddress === undefined || defCategoryId === undefined) {
            props.showNotification()
        } else {
            props.hideNotification();
            activeLink(1, [1]);
            localStorage.setItem("data", JSON.stringify(data));
            localStorage.setItem("asideActiveLinks", JSON.stringify([1]));
            history.push('/dashboard/topic-content')
        }
    }

    return (
        <div className="category">
            <Notification {...props}/>
            <h1>Location and category</h1>
            <article>Please select your project category and choose location of your proposed project</article>
            <form>
                <Select
                    className="input-group"
                    label="Category"
                    id="category"
                    options={categories}
                    value={defCategoryId}
                    required={true}
                    onChange={(e) => setCategoryId(e.target.value)}
                />
                <Input
                    className="input-group"
                    label="Location"
                    id="location"
                    value={defAddress}
                    required={true}
                    readOnly
                    placeholder="Choose location"/>
                <div className="map-wrap">
                    <Map center={defPosition}
                         zoom={13}
                         ref={m => leafletMap = m}
                         onClick={handleMapClick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={markerPosition} icon={customIcon}/>
                    </Map>
                </div>
                <Button
                    text="CONTINUE"
                    className="btn-continue"
                    onClick={onContinue}
                />
            </form>
        </div>
    );
}

export default notificationHoc(allFieldsValues(Category), 'Fill required fields');
