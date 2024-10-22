import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import { DivProps, ButtonProps, InputProps } from "../interfaces/ElementsInterfaces";
import openedFolder from "../assets/opened-folder.png";
import closedFolder from "../assets/closed-folder.png";
import { useLocation } from "react-router-dom";
import profile from "../assets/profile1.png"

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

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 60px);
    width: calc(100% - 300px);
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
    width: calc(100% - 9px);
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
    font-size: ${(props) => props.fontSize || "20px"};
    font-weight: ${(props) => props.fontWeight || "bold"};
    color: white;
    margin-bottom: ${(props) => props.marginBottom};
    margin-top: ${(props) => props.marginTop};
`;

const Input = styled.input<InputProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 5px;
    border: ${(props) => props.border || "none"};
    background-color: ${(props) => props.backgroundColor || "#222222"};
    text-align: ${(props) => props.textAlign};;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding-left: ${(props) => props.paddingLeft};
    margin-right: ${(props) => props.marginRight};
    margin-top: ${(props) => props.marginTop};

    &::placeholder {
        color: #bebebe;
        font-size: 15px;
    }
`;

const ContentContainer = styled.div<DivProps>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || "row"};
    align-items: ${(props) => props.alignItems || "center"};
    padding-left: ${(props) => props.paddingLeft};
    margin-bottom: ${(props) => props.marginBottom || "25px"};
`;

const Container = styled.div<DivProps>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    padding-left: ${(props) => props.paddingLeft};
    margin-bottom: ${(props) => props.marginBottom};
    background-color: ${(props) => props.backgroundColor};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
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
    background-color: #222222;
    overflow-x: hidden;
    border-radius: 5px;
    margin-bottom: 25px;
`;

const GamesOption = styled.option`
    font-size: 18px;
    color: white;
    padding-left: 5px;
`;

const Button = styled.button<ButtonProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: white;
    background-color: ${(props) => props.backgroundColor || "#505050"};
    border: none;
    border-radius: 5px;
    margin-right: ${(props) => props.marginRight};
    margin-left: ${(props) => props.marginLeft};
    margin-top: ${(props) => props.marginTop};
    font-size: ${(props) => props.fontSize || "`20px"};
    &:hover {
        background-color: ${(props) => props.backgroundColor_hover || "#707070"};
    }

    &:active {
        background-color: ${(props) => props.backgroundColor_active || "#979696"};
    }
`;

const Profile = styled.div`
    width: 250px;
    height: 250px;
    background-image: url(${profile});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100%;
    border: 5px solid #ffffff;
    margin-top: 20px;
`;

const SettingPage = () => {
    const [isContent, setIsContent] = useState<number>(0);
    const [isLauncherVersion, setIsLauncherVersion] = useState<boolean>(true);
    const [isNicknameEdit, setIsNicknameEdit] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        setIsContent(location.state?.content || 0);
    }, [location?.state]);

    const handleSetContent = (num: number) => (e: React.MouseEvent<HTMLDivElement>): void => {
        setIsContent(num);
    };

    const handleCheckLauncherVersion = (): void => {
        // TODO : 비즈니스 로직 추가
    };

    return (
        <Wrap>
            <NavigationBar selectedContent="setting"></NavigationBar>
            <MenuContainer>
                <Content
                    onClick={handleSetContent(0)}
                    borderRight={isContent === 0 ? "10px solid white" : null}
                    backgroundColor={isContent === 0 ? "#4d504f" : null}
                    marginTop="5px"
                >
                    <ScaleHover>계정</ScaleHover>
                </Content>
                <Content
                    onClick={handleSetContent(1)}
                    borderRight={isContent === 1 ? "10px solid white" : null}
                    backgroundColor={isContent === 1 ? "#4d504f" : null}
                    marginTop="10px"
                >
                    <ScaleHover>런처</ScaleHover>
                </Content>
            </MenuContainer>
            <ContentWrap>
                {/* 내 계정 */}
                {isContent === 0 ?
                    <Container flexDirection="column" width="100%" height="100%" alignItems="center">
                        <Container flexDirection="column" width="90%" height="100%" alignItems="center" backgroundColor="#222222">
                            <Profile></Profile>
                            {
                                isNicknameEdit ?
                                    <Input defaultValue={"닉네임"} marginTop="20px" textAlign="center" backgroundColor="#4d504f" width="300px" height="37px"></Input>
                                    :
                                    <TitleText marginTop="20px">닉네임</TitleText>
                            }
                        </Container>
                    </Container>
                    : null}
                {/* 런처 */}
                {isContent === 1 ?
                    <>
                        <TitleText marginBottom="10px">게임 폴더 경로 지정</TitleText>
                        <ContentContainer>
                            <Input placeholder="오른쪽 폴더 모양을 클릭하여 경로 지정" paddingLeft="10px" marginRight="15px" width="85%" height="37px" />
                            <FolderIcon></FolderIcon>
                        </ContentContainer>
                        <ContentContainer marginBottom="10px">
                            <TitleText>게임 파일 등록</TitleText>
                            <Button width="25px" height="25px" marginLeft="5px">+</Button>
                            <Button width="25px" height="25px" marginLeft="3.5px">-</Button>
                        </ContentContainer>
                        <GamesSelect name="games" size={5}>
                            <GamesOption value="benz">벤츠</GamesOption>
                            <GamesOption value="bmw">BMW</GamesOption>
                            <GamesOption value="ford" selected>르노삼성</GamesOption>
                        </GamesSelect>
                        <TitleText marginBottom="5px">버전 확인</TitleText>
                        <ContentContainer flexDirection="column" paddingLeft="10px" alignItems="none">
                            <TitleText fontSize="18px" fontWeight="500">현재 버전 : 0.1 beta</TitleText>
                            <ContentContainer marginBottom="0">
                                <TitleText fontSize="18px" fontWeight="500">최신 버전 :&nbsp;</TitleText>
                                {
                                    isLauncherVersion ?
                                        <TitleText fontSize="18px" fontWeight="500">0.1 beta</TitleText>
                                        :
                                        <Button
                                            width="50px"
                                            height="20px"
                                            fontSize="15px"
                                            onClick={handleCheckLauncherVersion}
                                        >
                                            확인
                                        </Button>
                                }
                            </ContentContainer>
                        </ContentContainer>
                        <TitleText marginBottom="10px">폴더 바로가기</TitleText>
                        <ContentContainer flexDirection="row" alignItems="none" paddingLeft="10px">
                            <Button width="120px" height="30px" fontSize="15px" marginRight="10px">게임 폴더</Button>
                            <Button width="120px" height="30px" fontSize="15px">런처 폴더</Button>
                        </ContentContainer>
                    </>
                    : null}
            </ContentWrap>
        </Wrap>
    );
};

export default SettingPage;