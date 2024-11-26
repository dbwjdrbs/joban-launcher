import React, { useState } from "react";
import styled from "styled-components";
import naver_oauth_login from "../assets/naver_oauth_login.png";
import background from "../assets/auth_background.png";
import Modal from "../components/Modal";

import { DivProps, ButtonProps } from "../interfaces/ElementsInterfaces";

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
`;

const AuthContainer = styled.div<DivProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 850px;
    height: 420px;
    border: 1px solid #FACE54;
    background-color: #2e2e2e;
`;

const TermsContainer = styled.div`
    font-size: 16px;
    background-color: #222222;
    color: white;
    margin-inline: 50px;
    margin-block: 30px;
    height: 210px;
    display: flex;
    width: 720px;
    flex-direction: column;
    border: 1px solid #FACE54;
    justify-content: center;
    align-items: center;
`;

const RowContainer = styled.div<DivProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${(props) => props.marginBottom};
`;

const AuthButton = styled.button`
    width: 337.5px;
    height: 90px;
    margin-bottom: 10px;
    background-image: url(${naver_oauth_login});
    background-color: #2e2e2e;
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        scale: 1.03;
    }

    &:active {
        scale: 1;
    }
`;

const Button = styled.button<ButtonProps>`
    width: ${(props) => props.width || "100px"};
    height: 40px;
    color: white;
    background-color: ${(props) => props.backgroundColor || "#484848"};
    border: 1px solid #FACE54;
    border-radius: 5px;
    margin-right: ${(props) => props.marginRight};
    margin-left: ${(props) => props.marginLeft};
    margin-top: ${(props) => props.marginTop};
    font-size: 15px;

    &:hover {
        background-color: ${(props) => props.backgroundColor_hover || "#707070"};
    }

    &:active {
        background-color: ${(props) => props.backgroundColor_active || "#979696"};
    }
`;

const Input = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #FACE54;
    background-color: #222222;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
    text-align: center;
    outline: none;

    &:focus {
        border: 1px solid #FACE54;
    }   

    &::placeholder {
        color: #bebebe;
        font-size: 15px;
    }
`;

const Text = styled.div<DivProps>`
    font-size: ${(props) => props.fontSize || "15px"};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: ${(props) => props.fontWeight || "bold"};
    color: white;
    margin-bottom: ${(props) => props.marginBottom || "40px"};
    text-align: center;
    -webkit-user-select: none;
    user-select: none;
`;

const Span = styled.span`
    font-size: 45px;
    color: #6157eb;
`;

const UserAuthPage = () => {
    const [isAuthDisplay, setIsAuthDisplay] = useState<boolean>(true);
    const [isMemberSetting, setIsMemberSetting] = useState<boolean>(false);
    const [isMember, setIsMember] = useState<boolean>(false);

    const handleNextPage = (): void => {
        window.location.hash = "#/main-page";
    };

    const handleSignUp = (): void => {
        setIsAuthDisplay(false);
        // setIsMember(true);
    };

    const handleAuth = (): void => {
        isMember ? handleNextPage() : handleSignUp();
    };

    const handleAuthDisplay = (): void => {
        setIsAuthDisplay(!isAuthDisplay);
    };

    const handleTermsAgree = (): void => {
        setIsMemberSetting(!isMemberSetting);
    };

    return (
        <Wrap>
            {
                isAuthDisplay ?
                    <AuthContainer>
                        <Text fontSize="30px"><Span>JOBAN LAUNCHER</Span> 와 함께<br />전장을 누빌 준비가 되셨나요?</Text>
                        <AuthButton onClick={handleAuth} />
                        <Text fontSize="13px" fontWeight="100" marginBottom="0px">* 저희 서비스는 오직 네이버 로그인을 통해서만 이용하실 수 있습니다.</Text>
                        <div onClick={() => window.location.hash="#/main-page"} >Main 화면으로 이동</div>
                    </AuthContainer>
                    :
                    <AuthContainer>
                        {
                            !isMemberSetting ?
                                <>
                                    <TermsContainer>
                                        1. 본 서비스(이하, JOBAN LAUNCHER)는 유저의 게임 데이터를 기록하는 것을
                                        목적으로 개발되었으며,<br /> ESL 버전 및 Final 버전을 지원합니다. <br />
                                        2. 본 서비스는 현재 시험 운영 중입니다. <br />
                                        따라서, 서비스를 이용중에 발생하는 버그에 대한 제보를 환영합니다. <br />
                                        3. 본 서비스는 조선의 반격 프로세스의 메모리만을 조회합니다. <br />
                                        4. 본 서비스는 조선의 반격 저작권자에 의해 삭제되거나 비공개 처리될 수 있습니다. <br />
                                        5. 본 서비스는 유저의 닉네임, 전적 데이터만을 수집하고 관리합니다.
                                    </TermsContainer>
                                    <RowContainer>
                                        <Button
                                            onClick={handleAuthDisplay}
                                            marginRight="15px"
                                        >
                                            이전
                                        </Button>
                                        <Button
                                            onClick={handleTermsAgree}
                                            backgroundColor="#222222"
                                            backgroundColor_hover="#111111"
                                            backgroundColor_active="#111111"
                                        >
                                            확인
                                        </Button>
                                    </RowContainer>
                                </>
                                :
                                <>
                                    <Text
                                        fontSize="30px"
                                        marginBottom="20px"
                                    >
                                        닉네임을 입력해주세요
                                    </Text>
                                    <RowContainer marginBottom="12px">
                                        <Input placeholder="2~10자 사이, 한글과 영어만 사용가능"></Input>
                                        <Button
                                            marginLeft="8px"
                                            backgroundColor="#8B2020"
                                            backgroundColor_hover="#f54343"
                                            backgroundColor_active="#fd8585"
                                        >
                                            중복확인
                                        </Button>
                                    </RowContainer>
                                    <Button
                                        width="420px"
                                        backgroundColor="#222222"
                                        backgroundColor_hover="#111111"
                                        backgroundColor_active="#111111"
                                        onClick={handleNextPage} // 나중에 등록 로직에 추가.
                                    >
                                        등록하기
                                    </Button>
                                    <Button
                                        width="420px"
                                        marginTop="8px"
                                        onClick={handleAuthDisplay}
                                    >
                                        취소
                                    </Button>
                                </>
                        }
                    </AuthContainer>
            }

        </Wrap>
    );
};

export default UserAuthPage;