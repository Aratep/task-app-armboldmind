import React, {useEffect} from 'react';
import {Switch, Route, useRouteMatch} from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AsideMenu from "../../components/aside-menu/AsideMenu";
import Category from "../category/Category";
import TopicContent from "../topic-content/TopicContent";
import Media from "../media/Media";
import Preview from "../preview/Preview";
import history from "../../history";

import './styles.css';
import {activeLink} from "../../constants/helper-functions";

const DashBoard = ({...props}) => {
    let {path} = useRouteMatch();
    const asideActiveLinks = JSON.parse(localStorage.getItem("asideActiveLinks")) || [];

    useEffect(() => {
        if (props.location.pathname === '/' || props.location.pathname === '/dashboard' || props.location.pathname === '/dashboard/') {
            history.push('/dashboard/category')
        }
        activeLink(null, asideActiveLinks)

    });

    return (
        <>
            <Header/>
            <main className="dashboard-page">
                <AsideMenu className="aside"/>

                <section className="content">
                    <Switch>
                        <Route path={`${path}/category`} component={Category}/>
                        <Route path={`${path}/topic-content`} component={TopicContent}/>
                        <Route path={`${path}/media`} component={Media}/>
                        <Route path={`${path}/preview`} component={Preview}/>
                        <Route path={`${path}/`} component={Category}/>

                    </Switch>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default DashBoard;
