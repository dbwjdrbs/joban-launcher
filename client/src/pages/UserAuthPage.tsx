import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import naver_oauth_login from "../assets/naver_oauth_login.png";
import background from "../assets/auth_background.png";
import { Link } from "react-router-dom";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
    fontSize?: string;
    fontWeight?: string;
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

const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 850px;
    height: 400px;
    border: 1px solid #FFFFFF;
    background-color: #2e2e2e;
    margin-bottom: 35px;
`;

const Button = styled.button`
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

const Text = styled.div<TextProps>`
    font-size: ${(props) => props.fontSize || "15px"};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: ${(props) => props.fontWeight || "bold"};
    color: white;
    margin-bottom: 40px;
    text-align: center;
    -webkit-user-select: none;
`;

const Span = styled.span`
    font-size: 45px;
    color: #eeff00;
`;

const UserAuthPage = () => {
    const handleAuth = (): void => {
        window.location.hash = "#/main-page";
    }

    return (
        <Wrap>
            <AuthContainer>
                <Text fontSize="30px"><Span>JOBAN LAUNCHER</Span> 와 함께<br />전장을 누빌 준비가 되셨나요?</Text>
                <Button onClick={handleAuth}/>
                <Text fontSize="13px" fontWeight="100">* 저희 서비스는 오직 네이버 로그인을 통해서만 이용하실 수 있습니다.</Text>
            </AuthContainer>
        </Wrap>
    );
};

export default UserAuthPage;