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
    flex-direction: column;
`;

const Button = styled.button`
    width: 400px;
    height: 50px;
    margin-bottom: 10px;
`;

const UserAuthPage = () => {
    return (
        <Wrap>
            <ButtonContainer>
                <Button>비회원 로그인</Button>
                <Button>로그인</Button>
                <Button>회원가입</Button>
            </ButtonContainer>
        </Wrap>
    );
};

export default UserAuthPage;