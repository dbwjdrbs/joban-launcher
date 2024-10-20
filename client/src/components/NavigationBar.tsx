import React, { useState, useEffect } from "react";
import styled from "styled-components";

import home from "../assets/icons/120x120.png"
import myInfo from "../assets/swords2.png";
import setting from "../assets/gear.png";
import gamestart from "../assets/play-button.png";

import { Link } from "react-router-dom";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundImage?: any;
    backgroundColor?: string;
    backgroundColor_hover?: string;
};

interface NavigationBarProps {
    selectedContent: string;
};

const Wrap = styled.div`
    background-color: #1b1b1b;
    width: 100px;
    height: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 95%;
`;

const Components = styled.div<DivProps>`
    width: 65px;
    height: 65px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.backgroundColor_hover};
    }
`;

const Icon = styled.div<DivProps>`
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;

    &:hover {
        scale: 1.2;
    }
`;

const GameStartContainer = styled.div`
    position: relative;
    left: 4px;
    top: 2px;

    &:hover {
        scale: 1.2;
    }
`;

const NavigationBar = ({ selectedContent }: NavigationBarProps) => {
    const [isHome, setIsHome] = useState<boolean>(false);
    const [isMyInfo, setIsMyInfo] = useState<boolean>(false);
    const [isSetting, setIsSetting] = useState<boolean>(false);

    useEffect(() => {
        setIsHome(selectedContent === "home");
        setIsMyInfo(selectedContent === "myinfo");
        setIsSetting(selectedContent === "setting");
    }, []);

    return (
        <Wrap>
            <Container>
                <div>
                    <Link to='/main-page'>
                        <Components backgroundColor={isHome ? "#4d504f" : "#303030"}>
                            <Icon backgroundImage={home} />
                        </Components>
                    </Link>
                    <Link to="/myinfo-page">
                        <Components backgroundColor={isMyInfo ? "#4d504f" : "#303030"}>
                            <Icon backgroundImage={myInfo} />
                        </Components>
                    </Link>
                </div>
                <div>
                    <div onClick={() => window.location.hash = "#/"}>뒤로 가기</div>
                    <Link to="/setting-page">
                        <Components backgroundColor={isSetting ? "#4d504f" : "#303030"}>
                            <Icon backgroundImage={setting} />
                        </Components>
                    </Link>
                </div>
            </Container>
        </Wrap>
    );
};

export default NavigationBar;