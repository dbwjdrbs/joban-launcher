import React from "react";

const MainPage = () => {
    return (
        <div onClick={() => window.location.hash="#/"}>
            메인
        </div>
    );
}

export default MainPage;