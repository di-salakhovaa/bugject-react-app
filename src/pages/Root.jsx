import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Root = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Root;