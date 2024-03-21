import { ToastContainer, toast } from 'react-toastify';

const ToastComponent = ({ message }) => {
    return (
      <div className="toast-container">
        <div className="toast-content">
          {message}
        </div>
      </div>
    );
  };