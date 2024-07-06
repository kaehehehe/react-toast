/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { css, keyframes } from '@emotion/react';
import { ToastData } from '../hooks/useToast';
import { ReactComponent as CloseIcon } from '../assets/ic_close.svg';
import { Colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';

const Toast = ({
  toast,
  setToasts,
}: {
  toast: ToastData;
  setToasts: Dispatch<SetStateAction<ToastData[]>>;
}) => {
  const { id, title, color, content, icon } = toast;

  useEffect(() => {
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  const onClickCloseButton = () => {
    setToasts([]);
  };

  return (
    <div css={[ToastContainer, Animation.fadeIn]}>
      <div css={Wrapper.icon}>{icon}</div>

      <div css={Wrapper.content}>
        <h2 css={ToastTitle(color)}>{title}</h2>
        <p css={ToastContent}>{content}</p>
      </div>

      <button
        type='button'
        onClick={() => onClickCloseButton()}
        css={CloseButton}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default Toast;

const ToastContainer = css`
  z-index: 99999;
  position: absolute;
  top: 32px;
  left: 50%;
  display: flex;
  align-items: center;
  width: 400px;
  padding: 10px 16px 10px 12px;
  background-color: ${Colors.white};
  border-radius: 8px;
  transform: translate(-50%, 0);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
`;

const Wrapper = {
  icon: css`
    margin-right: 10px;
  `,

  content: css`
    display: flex;
    flex-direction: column;
    flex: 1;
  `,
};

const ToastTitle = (color: string) => {
  return css`
    ${Fonts.body.B}
    color: ${color};
  `;
};

const ToastContent = css`
  ${Fonts.body.SB}
  color: ${Colors.black}
`;

const CloseButton = css`
  cursor: pointer;
`;

const fadeIn = keyframes`
  from {
    top: -10px;
    opacity: 0;
  }

  to {
    top: 32px;
    opacity: 1;
  }
`;

const Animation = {
  fadeIn: css({
    animation: `300ms ease ${fadeIn} forwards`,
  }),
};
