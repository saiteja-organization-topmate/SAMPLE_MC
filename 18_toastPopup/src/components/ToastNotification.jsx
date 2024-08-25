import { useState, useEffect } from 'react';
import './ToastNotification.css'; // Assuming you keep the CSS as is and just import it here

const ToastNotification = () => {
  const [horizontalPosition, setHorizontalPosition] = useState('left');
  const [verticalPosition, setVerticalPosition] = useState('top');
  const [toastType, setToastType] = useState('success');
  const [message, setMessage] = useState('This is a toast message!');
  const [duration, setDuration] = useState(5);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    // This effect will clean up the toasts that have timed out
    const timer = setInterval(() => {
      setToasts((currentToasts) =>
        currentToasts.filter(
          (toast) => Date.now() - toast.time < duration * 1000
        )
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [duration]);

  const showToast = () => {
    setToasts([
      ...toasts,
      {
        message,
        toastType,
        horizontalPosition,
        verticalPosition,
        time: Date.now(),
      },
    ]);
  };

  const removeToast = (time) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.time !== time)
    );
  };

  return (
    <div className='container text-center'>
      <form className='flex'>
        {/* Horizontal Position Selector */}
        <select
          value={horizontalPosition}
          onChange={(e) => setHorizontalPosition(e.target.value)}
        >
          <option value='left'>Left</option>
          <option value='right'>Right</option>
        </select>

        {/* Vertical Position Selector */}
        <select
          value={verticalPosition}
          onChange={(e) => setVerticalPosition(e.target.value)}
        >
          <option value='top'>Top</option>
          <option value='bottom'>Bottom</option>
        </select>

        {/* Toast Type Selector */}
        <select
          value={toastType}
          onChange={(e) => setToastType(e.target.value)}
        >
          <option value='success'>Success</option>
          <option value='error'>Error</option>
          <option value='warning'>Warning</option>
          <option value='info'>Info</option>
        </select>

        {/* Message Input */}
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message'
        />

        {/* Duration Range Input */}
        <label>
          Duration
          <input
            type='range'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            min='3'
            max='10'
          />
        </label>

        {/* Show Toast Button */}
        <button type='button' onClick={showToast}>
          Show Toast
        </button>
      </form>

      {/* Toast Containers */}
      <div
        className={`toast-container tc-${horizontalPosition}-${verticalPosition}`}
      >
        {toasts.map((toast, index) => (
          <div key={index} className={`toast ${toast.toastType}`}>
            <span className='toast-message'>{toast.message}</span>
            <button className='remove' onClick={() => removeToast(toast.time)}>
              &#x2715;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToastNotification;
