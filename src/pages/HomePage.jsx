import React from "react";
import DesktopSideMenu from "../component/DesktopSideMenu";


const HomePage = () => {
    return (
        <div className="d-flex">
            <DesktopSideMenu />
            <div className="content flex-grow-1 p-3">
                <h1>HOMEPAGE</h1>
                <p>This is the content of the homepage.</p>
            </div>

        </div>
    )
}

export default HomePage;