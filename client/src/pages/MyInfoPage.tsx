import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import { DivProps } from "../interfaces/ElementsInterfaces";

import profile from "../assets/profile1.png"


const Wrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #2e2e2e;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
`;

const IndexContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Index = styled.div<DivProps>`
    font-size: 20px;
    height: 30px;
    border-bottom: ${(props) => props.borderBottom};
    font-weight: 200;
    color: white;
    margin-right: 20px;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;

    &:hover {
        scale: 1.05;
    }
`;

const OverViewContainer = styled.div`
    width: calc(100vw - 160px);
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: #222222;
    color: white;
    align-items: center;
    justify-content: space-between;
`;

const ProfileWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 90%;
    padding: 25px;
    /* border-top-right-radius: 15px; */
    /* border-bottom-right-radius: 15px; */
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`;

const Profile = styled.div`
    width: 400px;
    height: 400px;
    background-image: url(${profile});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100%;
    border: 2px solid #ffffff;
    margin-left: 50px;
    
    @media all and (max-height: 750px), (max-width: 1600px) {
        width: 300px;
        height: 300px;
    }
`;

const Text = styled.div<DivProps>`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-top: ${(props) => props.marginTop};
    margin-right: ${(props) => props.marginRight};
    margin-left: ${(props) => props.marginLeft};
    margin-bottom: ${(props) => props.marginBottom};
    -webkit-user-select: none;
    user-select: none;

    @media all and (max-height: 700px) {
        font-size: ${(props) => props.MediafontSize};
        font-weight: ${(props) => props.fontWeight};
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        margin-top: ${(props) => props.marginTop};
        margin-right: ${(props) => props.marginRight};
    }
`;

const RecordContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    align-items: end;
`;

const Record = styled.div`
    margin-right: 20px;
`;

const ESLContiner = styled.div<DivProps>`
    display: flex;
    flex-direction: column;
    background-color: #0f61ad;
    width: 100%;
    height: 300px;
    padding-left: 20px;
    margin-left: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    border: 1px solid white;

    &:hover {
        scale: 1.02;
    }

    @media all and (max-height: 750px), (max-width: 1600px) {
        height: 100px;
    }
`;

const FinalContiner = styled.div<DivProps>`
    display: flex;
    flex-direction: column;
    background-color: #80471a;
    width: 100%;
    height: 300px;
    padding-left: 20px;
    margin-left: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid white;

    &:hover {
        scale: 1.02;
    }

    @media all and (max-height: 750px), (max-width: 1600px) {
        height: 100px;
    }
`;


const MyInfoPage = () => {
    const [isIndex, setIsIndex] = useState<number>(0);

    const handleSetIndex = (num: number) => (e: React.MouseEvent<HTMLDivElement>): void => {
        setIsIndex(num);
    };

    return (
        <Wrap>
            <NavigationBar selectedContent="myinfo"></NavigationBar>
            <Container>
                <IndexContainer>
                    <Index onClick={handleSetIndex(0)} borderBottom={isIndex === 0 ? "2px solid white" : null}>개요</Index>
                    <Index onClick={handleSetIndex(1)} borderBottom={isIndex === 1 ? "2px solid white" : null}>도전과제</Index>
                    <Index onClick={handleSetIndex(2)} borderBottom={isIndex === 2 ? "2px solid white" : null}>대전기록</Index>
                    <Index onClick={handleSetIndex(3)} borderBottom={isIndex === 3 ? "2px solid white" : null}>랭킹</Index>
                    <Index onClick={handleSetIndex(4)} borderBottom={isIndex === 4 ? "2px solid white" : null}>통계</Index>
                </IndexContainer>
                {
                    isIndex === 0 ?
                        <OverViewContainer>
                            <ProfileWrap>
                                <Profile></Profile>
                                <ProfileContainer>
                                    <Text
                                        fontSize="80px"
                                        MediafontSize="40px"
                                    >
                                        {"일일일일일일일일일일"}&nbsp;
                                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" cursor="pointer" >
                                            <path d="M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Text>
                                    <Text
                                        marginTop="1px"
                                        fontSize="40px"
                                        MediafontSize="20px"
                                    >
                                        종합 전적 : 12승 12패 (50%)
                                    </Text>
                                    <Text
                                        marginTop="1px"
                                        fontSize="40px"
                                        MediafontSize="20px"
                                    >
                                        종합 점수 : 100점
                                    </Text>
                                </ProfileContainer>
                            </ProfileWrap>
                            <RecordContainer>
                                <ESLContiner>
                                    <Text
                                        fontSize="100px"
                                        MediafontSize="25px"
                                        marginBottom="5px"
                                    >
                                        ESL ver
                                    </Text>
                                    <Text
                                        fontSize="40px"
                                        MediafontSize="16px"
                                    >
                                        전적 : 10승 2패 (80%)
                                    </Text>
                                    <Text
                                        fontSize="40px"
                                        MediafontSize="16px"
                                    >
                                        점수 : 80점
                                    </Text>
                                </ESLContiner>
                                <FinalContiner>
                                <Text
                                        fontSize="100px"
                                        MediafontSize="25px"
                                        marginBottom="5px"
                                    >
                                        FINAL ver
                                    </Text>
                                    <Text
                                        fontSize="40px"
                                        MediafontSize="16px"
                                    >
                                        전적 : 2승 8패 (20%)
                                    </Text>
                                    <Text
                                        fontSize="40px"
                                        MediafontSize="16px"
                                    >
                                        점수 : 20점
                                    </Text>
                                </FinalContiner>
                            </RecordContainer>
                        </OverViewContainer>
                        : null
                }
            </Container>
        </Wrap>
    );
};

export default MyInfoPage;