import { useNotification } from '../context/NotificationContext';

const Notification = () => {
  const { notification, hideNotification } = useNotification();

  if (!notification) {
    return null;
  }

  const baseClasses = 'fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white transition-opacity duration-300';
  const typeClasses = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  return (
    <div className={`${baseClasses} ${typeClasses[notification.type]}`}>
      <span>{notification.message}</span>
      <button onClick={hideNotification} className="ml-4 font-bold">
        &times;
      </button>
    </div>
  );
};

export default Notification;
