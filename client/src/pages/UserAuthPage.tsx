import React, { useState } from "react";
import styled from "styled-components";
import naver_oauth_login from "../assets/naver_oauth_login.png";
import background from "../assets/auth_background.png";
import Modal from "../components/Modal";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
    fontSize?: string;
    fontWeight?: string;
    backgroundColor?: string;
    marginBottom?: string;
    height?: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    marginRight?: string;
    marginLeft?: string;
    marginTop?: string;
    backgroundColor?: string;
    backgroundColor_hover?: string;
    backgroundColor_active?: string;
    width?: string;
}

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
    height: ${(props) => props.height || "400px"};
    border: 1px solid #FFFFFF;
    background-color: #2e2e2e;
    margin-bottom: 35px;
`;

const MemberSettingContainer = styled.div`
    background-color: white;
    margin-inline: 50px;
    margin-block: 30px;
    padding: 20px;
`;

const RowContainer = styled.div<DivProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${(props) => props.marginBottom};
`;

const AuthButton = styled.button`
    width: 340px;
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
    background-color: ${(props) => props.backgroundColor || "#505050"};
    border: none;
    border-radius: 5px;
    margin-right: ${(props) => props.marginRight};
    margin-left: ${(props) => props.marginLeft};
    margin-top: ${(props) => props.marginTop};
    &:hover {
        background-color: ${(props) => props.backgroundColor_hover || "#707070"};
    }

    &:active {
        background-color: ${(props) => props.backgroundColor_active || "#979696"};
    }
`;

const Input = styled.input`
    width: 300px;
    height: 37px;
    border-radius: 5px;
    border: none;
    background-color: #616161;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
    text-align: center;

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
                    <AuthContainer height="450px">
                        <Text fontSize="30px"><Span>JOBAN LAUNCHER</Span> 와 함께<br />전장을 누빌 준비가 되셨나요?</Text>
                        <AuthButton onClick={handleAuth} />
                        <Text fontSize="13px" fontWeight="100">* 저희 서비스는 오직 네이버 로그인을 통해서만 이용하실 수 있습니다.</Text>
                    </AuthContainer>
                    :
                    <AuthContainer>
                        {
                            !isMemberSetting ?
                                <>
                                    <MemberSettingContainer>
                                        1. 본 서비스(이하, JOBAN LAUNCHER)는 유저의 게임 데이터를 기록하는 것을
                                        목적으로 개발되었으며,<br /> ESL 버전 및 Final 버전을 지원합니다. <br />
                                        2. 본 서비스는 현재 시험 운영 중입니다. <br />
                                        따라서, 서비스를 이용중에 발생하는 버그에 대한 제보를 환영합니다. <br />
                                        3. 본 서비스는 조선의 반격 프로세스의 메모리만을 조회합니다. <br />
                                        4. 본 서비스는 조선의 반격 저작권자에 의해 삭제되거나 비공개 처리될 수 있습니다. <br />
                                        5. 본 서비스는 유저의 닉네임, 전적 데이터만을 수집하고 관리합니다.
                                    </MemberSettingContainer>
                                    <RowContainer>
                                        <Button
                                            onClick={handleAuthDisplay}
                                            marginRight="15px"
                                        >
                                            이전
                                        </Button>
                                        <Button
                                            onClick={handleTermsAgree}
                                            backgroundColor="#6157eb"
                                            backgroundColor_hover="#756ed3"
                                            backgroundColor_active="#8077f3"
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
                                        닉네임을 입력해주세요.
                                    </Text>
                                    <RowContainer marginBottom="12px">
                                        <Input placeholder="2~10자 사이, 한글과 영어만 사용가능"></Input>
                                        <Button
                                            marginLeft="8px"
                                            backgroundColor_hover="#d36e6e"
                                            backgroundColor_active="#f37777"
                                        >
                                            중복확인
                                        </Button>
                                    </RowContainer>
                                    <Button
                                        width="420px"
                                        backgroundColor="#6157eb"
                                        backgroundColor_hover="#756ed3"
                                        backgroundColor_active="#8077f3"
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