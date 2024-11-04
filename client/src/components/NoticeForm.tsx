import React from "react";
import { DivProps } from "../interfaces/ElementsInterfaces";
import styled from "styled-components";

interface FormsProps {
    backgroundImage?: string;
    link?: string;
};

const Container = styled.div<DivProps>`
    background-image: ${(props) => props.backgroundImage};
    position: relative;
    width: 100%;
    height: 100%;
`;

const Index = styled.div`
    background-color: rgb(255,255,255,0.2);
    width: 50%;
    height: 10%;
    position: absolute;
    top: 90%;
    left: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NoticeForm = ({ backgroundImage }: FormsProps) => {
    return (
        <>
            <Container backgroundImage={backgroundImage}>
                <Container></Container>
                <Index>{"<  >"}</Index>
            </Container>
        </>
    );
};