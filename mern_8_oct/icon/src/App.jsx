import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { GiCutDiamond } from "react-icons/gi";
import Typewriter from "typewriter-effect";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {

   const handleClick = () => {
       toast('🦄 Wow so easy!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});
      }
      return(
        <>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
        <button onClick={handleClick}  className="btn btn-warning text-light mx-4 rounded">Click mee</button>
        </>
      )
 
};

export default App;
