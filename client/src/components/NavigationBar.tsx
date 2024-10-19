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
                    <Components backgroundColor="#303030">
                        <GameStartContainer>
                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 4.98951C5 4.01835 5 3.53277 5.20249 3.2651C5.37889 3.03191 5.64852 2.88761 5.9404 2.87018C6.27544 2.85017 6.67946 3.11953 7.48752 3.65823L18.0031 10.6686C18.6708 11.1137 19.0046 11.3363 19.1209 11.6168C19.2227 11.8621 19.2227 12.1377 19.1209 12.383C19.0046 12.6635 18.6708 12.886 18.0031 13.3312L7.48752 20.3415C6.67946 20.8802 6.27544 21.1496 5.9404 21.1296C5.64852 21.1122 5.37889 20.9679 5.20249 20.7347C5 20.467 5 19.9814 5 19.0103V4.98951Z" fill="#6157eb" stroke="#6157eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </GameStartContainer>
                    </Components>
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