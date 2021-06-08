import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { motion } from "framer-motion";

type ModalWrapperDefaultProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
};

const ModalWrapper = styled.div<ModalWrapperDefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: 0.3s;
  z-index: 100;
  overflow: hidden;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children(props: { "data-modal-safe-area": string }): React.ReactElement;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
         const target = event.target as Element;
        const isSafeArea = target.closest('[data-modal-safe-area="true"]');

        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}

      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: "100%",
          },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        {children({
          "data-modal-safe-area": "true",
        })}
      </motion.div>
    </ModalWrapper>
  );
};

export default Modal;
