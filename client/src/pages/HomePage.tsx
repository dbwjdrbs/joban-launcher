import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import { DivProps } from "../interfaces/ElementsInterfaces";

const Wrap = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    background-color: #2e2e2e;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 60px);
    width: calc(100% - 100px);
`;

const TopContentContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 10px;
`;

const MainContentContainer = styled.div`
    height: 90%;
    width: 95%;
    display: flex;
    border: 1px solid red;
    margin-left: 20px;
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-inline-start: 25px;
    padding-block-start: 20px;
`;

const Content = styled.div<DivProps>`
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

const GamestartButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: #6157eb;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    border-bottom: 1px solid #000000;
    border-right: 1px solid #000000;
    font-size: 25px;
    margin-top: 3vh;
    margin-right: 3vw;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;

    &:hover {
        scale: 1.05;
    }

    &:active {
        scale: 0.95;
    }
`;

const GameSelector = styled.select`
    width: 230px;
    height: 30px;
    margin-right: 10px;
    background-color: #505050;
    font-weight: bold;
    color: white;
    padding-left: 5px;
`;

const GameSelectorOption = styled.option`
    color: white;
    font-weight: bold;
    text-align: center;
`;

const GameStarterContainer = styled.div`
    margin-top: 15px;
`;

const HomePage = () => {
    const [isPatchNote, setIsPatchNote] = useState<boolean>(false);

    const handleIsNotice = (): void => {
        setIsPatchNote(false);
    };

    const handleIsPatchNote = (): void => {
        setIsPatchNote(true);
    };

    return (
        <Wrap>
            <NavigationBar selectedContent="home"></NavigationBar>
            <ContentContainer>
                <TopContentContainer>
                    <TitleContainer>
                        <RowContainer>
                            <Content
                                onClick={handleIsNotice}
                                borderBottom={isPatchNote ? null : "2px solid white"}
                            >
                                공지사항
                            </Content>
                            <Content
                                onClick={handleIsPatchNote}
                                borderBottom={isPatchNote ? "2px solid white" : null}
                            >
                                패치노트
                            </Content>
                        </RowContainer>
                    </TitleContainer>
                    <GameStarterContainer>
                        <GameSelector name="games">
                            <GameSelectorOption disabled hidden selected>
                                게임 버전을 선택해주세요.
                            </GameSelectorOption>
                            <GameSelectorOption>불러오기</GameSelectorOption>
                        </GameSelector>
                        <GamestartButton>GAME START</GamestartButton>
                    </GameStarterContainer>
                </TopContentContainer>
                <MainContentContainer>
                    {
                        isPatchNote
                            ?
                            null
                            :
                            null
                    }
                </MainContentContainer>
            </ContentContainer>
        </Wrap>
    );
}

export default HomePage;