/** @jsxImportSource @emotion/react */
import { Fragment, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as WarningIcon } from '../assets/ic_warning.svg';
import { ReactComponent as ErrorIcon } from '../assets/ic_error.svg';
import { ReactComponent as SuccessIcon } from '../assets/ic_success.svg';
import Toast from '../components/Toast';
import { Colors } from '../constants/colors';

export type ToastType = 'success' | 'error' | 'warning';

export type ToastData = {
  id: number;
  title: 'Success!' | 'Error!' | 'Warning';
  content: string;
  color: string;
  icon: ReactNode;
};

export type ToastProps = {
  toastType: ToastType;
  content: string;
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = ({ toastType, content }: ToastProps) => {
    const id = new Date().getTime();

    switch (toastType) {
      case 'success':
        setToasts([
          {
            id,
            title: 'Success!',
            content,
            color: `${Colors.green[100]}`,
            icon: <SuccessIcon />,
          },
        ]);
        break;

      case 'error':
        setToasts([
          {
            id,
            title: 'Error!',
            content,
            color: `${Colors.point.appleRed}`,
            icon: <ErrorIcon />,
          },
        ]);
        break;

      case 'warning':
        setToasts([
          {
            id,
            title: 'Warning',
            content,
            color: `${Colors.yellow[100]}`,
            icon: <WarningIcon />,
          },
        ]);
        break;
    }
  };

  const toastHolder = createPortal(
    <>
      {toasts.map((toast) => {
        return (
          <Fragment key={toast.id}>
            <Toast toast={toast} setToasts={setToasts} />
          </Fragment>
        );
      })}
    </>,
    document.getElementById('toast') as HTMLElement,
  );

  return { addToast, toastHolder };
};
