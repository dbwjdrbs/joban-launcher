import React from "react";
import { DivProps } from "../interfaces/ElementsInterfaces";
import styled from "styled-components";

const Wrap = styled.div`
    width: 880px;
    height: 130px;
    margin-top: 20px;
    background-color: #2e2e2e;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin-left: 20px;
`;

const ProfileImg = styled.div<DivProps>`
    background-image: url(${(props) => props.backgroundImage});
    border: 1.7px solid #fff457;
    width: 120px;
    height: 120px;
    border-radius: 100%;
`;

const ElImg = styled.div`
    background-color: white;
    width: 50px;
    height: 50px;
`;

const Container = styled.div<DivProps>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    margin-left: ${(props) => props.marginLeft};
    margin-right: ${(props) => props.marginRight};
    align-items: ${(props) => props.alignItems};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

const Font = styled.div<DivProps>`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
`;

const RecordBar = () => {
    return (
        <Wrap>
            <ProfileImg>
            </ProfileImg>
            <Container flexDirection="column" justifyContent="center" marginLeft="20px" width="250px">
                <Font fontSize="22px">일일일일일일일일일일</Font>
                <Font fontSize="15px">30:02</Font>
                <Font fontSize="18px" color="aqua">승리</Font>
                <Font fontSize="18px" color="red">패배</Font>
            </Container>
            <Container flexDirection="column" justifyContent="center" alignItems="center" marginRight="20px">
                <ElImg></ElImg>
                <Font fontSize="20px">병사</Font>
                <Font>1000</Font>
            </Container>
            <Container flexDirection="column" justifyContent="center" alignItems="center" marginRight="20px">
                <ElImg></ElImg>
                <Font fontSize="20px">건물</Font>
                <Font>1000</Font>
            </Container>
            <Container flexDirection="column" justifyContent="center" alignItems="center" marginRight="20px">
                <ElImg></ElImg>
                <Font fontSize="20px">자원</Font>
                <Font>1000</Font>
            </Container>
            <Container flexDirection="column" justifyContent="center" alignItems="center" marginRight="20px">
                <ElImg></ElImg>
                <Font fontSize="20px">얻은 점수</Font>
                <Font>1000</Font>
            </Container>
            <Container flexDirection="column" justifyContent="center" alignItems="center" marginRight="50px">
                <ElImg></ElImg>
                <Font fontSize="20px">승점</Font>
                <Font>+200</Font>
            </Container>
            <ElImg></ElImg>
        </Wrap>
    );
}

export default RecordBar;