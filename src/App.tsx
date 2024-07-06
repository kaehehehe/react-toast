/** @jsxImportSource @emotion/react */
import { useToast } from './hooks/useToast';
import { css } from '@emotion/react';
import { Colors } from './constants/colors';
import { Fonts } from './constants/fonts';

const App = () => {
  const { addToast, toastHolder } = useToast();
  return (
    <div css={Container}>
      <button
        css={ButtonStyle}
        onClick={() => {
          addToast({
            toastType: 'success',
            content: 'success 토스트 보여주기',
          });
        }}
      >
        success
      </button>
      <button
        css={ButtonStyle}
        onClick={() => {
          addToast({
            toastType: 'error',
            content: 'error 토스트 보여주기',
          });
        }}
      >
        error
      </button>
      <button
        css={ButtonStyle}
        onClick={() => {
          addToast({
            toastType: 'warning',
            content: 'warning 토스트 보여주기',
          });
        }}
      >
        warning
      </button>
      {toastHolder}
    </div>
  );
};

export default App;

const Container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 20px;
  background-color: ${Colors.black};
`;
const ButtonStyle = css`
  ${Fonts.body.M}
  max-height: 34px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${Colors.primary[100]};
  color: ${Colors.white};
  transition: all 300ms ease;

  :hover {
    background-color: ${Colors.secondary[50]};
  }

  :active {
    background-color: ${Colors.secondary[100]};
  }
`;
