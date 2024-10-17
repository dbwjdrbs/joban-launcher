import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Button = styled.button`
    width: 200px;
    height: 100px;
`;

const UserAuthPage = () => {
    return (
        <Wrap>
            <Button>비회원 로그인</Button>
            <Button>로그인</Button>
            <Button>회원가입</Button>
        </Wrap>
    );
};

export default UserAuthPage;