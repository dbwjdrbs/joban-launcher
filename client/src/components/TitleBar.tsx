import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    hoverColor?: string;
    activeColor?: string;
}

const Wrap = styled.div`
    background-color: #1b1b1b;
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-user-select: none;
    -webkit-app-region: drag;
`;

const TitleBarContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

    const handleMinimizeWindow = () => {
        window.electron.sendRequest('minimizeApp', null);

    };

    const handleCloseWindow = () => {
        window.electron.sendRequest('closeApp', null);
    };


    return (
        <Wrap>
            <TitleBarContainer>
                <TitleText>JOBAN LAUNCHER</TitleText>
                <ButtonsContainer>
                    <Button onClick={handleMinimizeWindow}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                        </svg>
                    </Button>
                    <Button hoverColor={"#c21b1b"} activeColor={"#e26c6c"} onClick={handleCloseWindow}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </Button>
                </ButtonsContainer>
            </TitleBarContainer>
        </Wrap>
    );
};

export default TitleBar;