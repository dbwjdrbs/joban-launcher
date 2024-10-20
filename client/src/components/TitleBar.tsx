import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { ButtonProps } from "../interfaces/ElementsInterfaces";

const Wrap = styled.div`
    background-color: #1b1b1b;
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 3px;
`;

const TitleBarContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    -webkit-user-select: none;
    user-select: none;
    -webkit-app-region: drag;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-app-region: no-drag;
    margin-right: 5px;
`;

const Button = styled.button<ButtonProps>`
  height: 25px;
  width: 35px;
  margin-right: 5px;
  align-items: center;
  background-color: #1b1b1b; /* 버튼 배경색 */
  color: white; /* 텍스트 및 아이콘 색상 */
  border: none; /* 기본 테두리 제거 */
  border-radius: 4px; /* 둥근 모서리 */
  cursor: pointer; /* 포인터 커서 */
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#383838"}; /* 호버 시 배경색 */
  }

  &:active {
    background-color: ${(props) => props.activeColor || "#4d4d4d"};
  }
`;

const TitleText = styled.div`
    color: white;
    margin-left: 15px;
`;

const TitleBar: React.FC = () => {
    // const [maximize, setMaximize] = useState<boolean>(true);
    const isMaximized = useSelector((state: RootState) => state.window.isMaximized);

    useEffect(() => {
        console.log("Maximized State:", isMaximized);
      }, [isMaximized]);

    const handleMinimizeApp = (): void => {
        window.electron.sendRequest('minimizeApp', null);
    };

    const handleMaximizeApp = (): void => {
        // setMaximize(!maximize);
        !isMaximized ? window.electron.sendRequest('maximizeApp', null) : window.electron.sendRequest('restoreApp', null);
    };

    const handleCloseApp = (): void => {
        window.electron.sendRequest('closeApp', null);
    };

    return (
        <Wrap>
            <TitleBarContainer>
                <TitleText>JOBAN LAUNCHER</TitleText>
                <ButtonsContainer>
                    <Button onClick={handleMinimizeApp}>
                        <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </Button>
                    <Button onClick={handleMaximizeApp}>
                        {
                            !isMaximized ?
                                <svg width="21px" height="21px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
                                </svg>
                                :
                                <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                        }
                    </Button>
                    <Button hoverColor="#c21b1b" activeColor="#e26c6c" onClick={handleCloseApp}>
                        <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </Button>
                </ButtonsContainer>
            </TitleBarContainer>
        </Wrap>
    );
};

export default TitleBar;