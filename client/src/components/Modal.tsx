import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
`;

// 백그라운드
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
`;

// 모달창 CSS
export const ModalView = styled.div.attrs(() => ({
    role: 'dialog',
}))`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 430px;
  height: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  div {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

interface ModalProps {
    children?: ReactNode;
    isOpenModal?: boolean;
};

const Modal = ({children, isOpenModal}: ModalProps) => {
    const openModalHandler = () => {
        console.log(isOpenModal);
        isOpenModal = false;
        console.log(isOpenModal);
    };

    return (
        <>
            <ModalContainer>
                {isOpenModal ? (
                    <></>
                    // <ModalBackdrop onClick={openModalHandler}>
                    //     <ModalView onClick={(event) => event.stopPropagation()}>
                    //         {children}
                    //     </ModalView>
                    // </ModalBackdrop>
                ) : null}
            </ModalContainer>
        </>
    );
};

export default Modal;