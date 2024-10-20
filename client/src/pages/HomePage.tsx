import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";

const Wrap = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #2e2e2e;
`;

const TopContentContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MainContentContainer = styled.div`
    height: 85%;
    width: 95%;
    display: flex;
    border: 1px solid white;
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-inline-start: 25px;
    padding-block-start: 20px;
`;

const Content = styled.div`
    font-size: 20px;
    width: 100px;
    height: 30px;
    border: 1px solid white;
    font-weight: bolder;
    color: white;
    margin-right: 10px;
    text-align: center;
    cursor: pointer;

    &:hover {
        scale: 1.1;
    }
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
                    <RowContainer>
                        <Content onClick={handleIsNotice}>공지사항</Content>
                        <Content onClick={handleIsPatchNote}>패치노트</Content>
                    </RowContainer>
                </TopContentContainer>
                <MainContentContainer>

                </MainContentContainer>
            </ContentContainer>
        </Wrap>
    );
}

export default HomePage;