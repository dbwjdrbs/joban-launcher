import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import { DivProps, ButtonProps } from "../interfaces/ElementsInterfaces";
import openedFolder from "../assets/opened-folder.png";
import closedFolder from "../assets/closed-folder.png";

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
    padding: 20px;
    padding-left: 30px;
    background-color: #353535;
    -webkit-user-select: none;
    user-select: none;
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
    -webkit-user-selects: none;
    user-select: none;
    margin-top: ${(props) => props.marginTop};
`;

const ScaleHover = styled.div`
    &:hover{
        scale: 1.05;
    }
`
const TitleText = styled.div<DivProps>`
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-bottom: ${(props) => props.marginBottom};
`;

const Input = styled.input`
    width: 85%;
    height: 37px;
    border-radius: 5px;
    border: none;
    background-color: #616161;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
    margin-right: 15px;

    &::placeholder {
        color: #bebebe;
        font-size: 15px;
    }
`;

const RowContainer = styled.div<DivProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${(props) => props.marginBottom || "25px"};
`;

const FolderIcon = styled.button`
    background-image: url(${closedFolder});
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #00000000;
    border: none;
    width: 40px;
    height: 40px;

    &:hover {
        background-image: url(${openedFolder});
    }
`;

const GamesSelect = styled.select`
    width: 86.5%;
    background-color: #616161;
    overflow-x: hidden;
    border-radius: 5px;
    margin-bottom: 5px;
`;

const GamesOption = styled.option`
    font-size: 18px;
    color: white;
    padding-left: 5px;
`;

const Button = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: white;
    background-color: ${(props) => props.backgroundColor || "#505050"};
    border: none;
    border-radius: 5px;
    margin-right: ${(props) => props.marginRight};
    margin-left: ${(props) => props.marginLeft};
    margin-top: ${(props) => props.marginTop};
    font-size: 20px;
    &:hover {
        background-color: ${(props) => props.backgroundColor_hover || "#707070"};
    }

    &:active {
        background-color: ${(props) => props.backgroundColor_active || "#979696"};
    }
`;

const SettingPage = () => {
    const [isContent, setIsContent] = useState<number>(1);

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
                    backgroundColor={isContent === 0 ? "#4d504f" : null}
                    marginTop="5px"
                >
                    <ScaleHover>내 계정</ScaleHover>
                </Content>
                <Content
                    onClick={handleSetContent(1)}
                    borderRight={isContent === 1 ? "2px solid white" : null}
                    backgroundColor={isContent === 1 ? "#4d504f" : null}
                    marginTop="10px"
                >
                    <ScaleHover>런처</ScaleHover>
                </Content>
            </MenuContainer>
            <ContentContainer>
                {isContent === 0 ? <div>내정보수정 세팅</div> : null}
                {isContent === 1 ?
                    <>
                        <TitleText marginBottom="10px">게임 폴더 경로 지정</TitleText>
                        <RowContainer>
                            <Input></Input>
                            <FolderIcon></FolderIcon>
                        </RowContainer>
                        <RowContainer marginBottom="10px">
                            <TitleText>게임 파일 등록</TitleText>
                            <Button width="25px" height="25px" marginLeft="5px">+</Button>
                            <Button width="25px" height="25px"marginLeft="3.5px">-</Button>
                        </RowContainer>
                        <GamesSelect name="games" size={5}>
                            <GamesOption value="benz">벤츠</GamesOption>
                            <GamesOption value="bmw">BMW</GamesOption>
                            <GamesOption value="ford" selected>르노삼성</GamesOption>
                        </GamesSelect>
                    </>
                    : null}
            </ContentContainer>
        </Wrap>
    );
};

export default SettingPage;