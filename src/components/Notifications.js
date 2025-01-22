import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Notifications.css';  // Importing Notifications styles
import { toast } from 'react-toastify';


const Notifications = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Notifications;
