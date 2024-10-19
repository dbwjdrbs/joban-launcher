import React from "react";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";

const Wrap = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
`;

const MyInfoPage = () => {
    return (
        <Wrap>
            <NavigationBar selectedContent="myinfo"></NavigationBar>
        </Wrap>
    );
};

export default MyInfoPage;