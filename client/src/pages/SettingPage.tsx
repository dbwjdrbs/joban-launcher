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

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 150px;
    align-items: center;
    margin-left: 2px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 60px);
    width: calc(100% - 250px);
`;

const Content = styled.div<DivProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    height: 45px;
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    border-right: ${(props) => props.borderRight};
    color: white;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    margin-top: 20px;
`;

const ScaleHover = styled.div`
    &:hover{
        scale: 1.05;
    }
`

const SettingPage = () => {
    const [isContent, setIsContent] = useState<number>(0);

    const handleSetContent = (num: number) => (e: React.MouseEvent<HTMLDivElement>): void => {
        setIsContent(num);
    };

    return (
        <Wrap>
            <NavigationBar selectedContent="setting"></NavigationBar>
            <MenuContainer>
                <Content
                    onClick={handleSetContent(0)}
                    borderRight={isContent === 0 ? "2px solid white" : null}
                    backgroundColor={isContent === 0 ? "#4d504f": null}
                >
                    <ScaleHover>런처 설정</ScaleHover>
                </Content>
                <Content
                    onClick={handleSetContent(1)}
                    borderRight={isContent === 1 ? "2px solid white" : null}
                    backgroundColor={isContent === 1 ? "#4d504f": null}
                >
                    <ScaleHover>내 정보 설정</ScaleHover>
                </Content>
            </MenuContainer>
            <ContentContainer>
                {isContent === 0 ? <div>런처 세팅</div> : null}
                {isContent === 1 ? <div>내정보수정 세팅</div> : null}
            </ContentContainer>
        </Wrap>
    );
};

export default SettingPage;