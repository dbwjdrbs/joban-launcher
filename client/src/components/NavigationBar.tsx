import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { DivProps, ButtonProps } from "../interfaces/ElementsInterfaces";

interface NavigationBarProps {
    selectedContent: string;
};

const Wrap = styled.div`
    background-color : rgba(0,0,0,0.85);
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Content = styled.h1<{ isSelected: boolean }>`
    color: ${(props) => (props.isSelected ? "white" : "#D0A657")};
    margin: 0;
    margin-left: 45px;
    cursor: pointer;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Button = styled.button`
    width: 280px;
    height: 70px;
    color: white;
    background-color: #222222;
    border: 1px solid #FACE54;
    border-radius: 4px;
    font-size: 30px;

    &:hover {
        background-color: #707070;
    }

    &:active {
        background-color: #979696;
    }
`;

const Select = styled.select`
    width: 300px;
    height: 35px;
    border: 1px solid #FACE54;
    background-color: #222222;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
    text-align: center;
    outline: none;
    margin-right: 45px;

    &:focus {
        border: 1px solid #FACE54;
    }   

    &::placeholder {
        color: #bebebe;
        font-size: 15px;
    }
`;

const Option = styled.option`
`;

const NavigationBar = ({ selectedContent }: NavigationBarProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(1);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedContent === "main") setSelectedIndex(1);
        else if (selectedContent === "myinfo") setSelectedIndex(2);
        else if (selectedContent === "setting") setSelectedIndex(3);
    }, [selectedContent]);

    const handleClick = (index: number) => {
        setSelectedIndex(index);

        if (index === 1)
            navigate('/main-page');
        else if (index === 2)
            navigate('/myinfo-page');
        else if (index === 3)
            navigate('/setting-page');
    };

    return (
        <Wrap>
            <Container>
                <Content isSelected={selectedIndex === 1} onClick={() => handleClick(1)}>홈</Content>
                <Content isSelected={selectedIndex === 2} onClick={() => handleClick(2)}>내정보</Content>
                <Content isSelected={selectedIndex === 3} onClick={() => handleClick(3)}>설정</Content>
                {/* <div onClick={() => navigate('/')}>뒤로 가기</div> */}
            </Container>
            <Button>게임 시작</Button>
            <Select>
                <Option value="Test1Test1">Test1Test1</Option>
                <Option value="Test2Test2">Test2Test2</Option>
            </Select>
        </Wrap>
    );
};

export default NavigationBar;