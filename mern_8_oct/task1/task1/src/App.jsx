import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { CgPlayButton } from "react-icons/cg";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-2">
        {/* =======navbar section start =============== */}

        <div className="col-sm-4">
          <div className="row">
            <h4 className="text-center">Devin</h4>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="row navbar-section">
            <ul>
              <li className="me-3">
                <a href="#" className="home">Home</a>
              </li>
              <li className="me-3">
                <a href="#" className="home">About</a>
              </li>
              <li className="me-3">
                <a href="#">Portfolio</a>
              </li>
              <li className="me-3">
                <a href="#">Services</a>
              </li>
               <li className="me-3">
                <a href="#">Team</a>
              </li>
              <li className="me-3">
                <a href="#">Dropdown ▾</a>
                
              </li>

              <li className="me-3">
                <a href="#">Extended Dropdown ▾</a>
                
              </li>

              <li className="me-3">
                <a href="#">Megamenu ▾</a>
                
              </li>
              <li className="me-3">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
      {/* =======navbar section end =============== */}


      {/* ================MIDDLE SECTION START ==================== */}

        <div className="row midsec">
          <div className="col-sm-6">

            <div className="row text-center mt-5">
              <h4 className="mt-5 mb-4">Transform Your <span className="text-primary digitalfuture">DigitalFuture</span></h4>
              <small className="middletext ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Similique  dolor neque molestiae quisquam saepe!</small>
            </div>
            <div className="row text-center mt-4">
             <span>
               <button className="btn btn-primary text-white w-25 buton shadow">START JOURNEY</button>
              <button className=" btn btn-primary playbtnout  ms-2 shadow" ><CgPlayButton  className="playbtnin"/> </button><span className="ms-1 watchdemo fw-bold">Watch demo</span>
             </span>
            </div>
          </div>

          <div className="col-sm-6"></div>
        </div>



       {/* ================MIDDLE SECTION END ==================== */}


       {/* ============= BOTTOM SECTION START ============================= */}

        <div className="row ">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 mx-auto">
            <div className="row footer">
              {/* <img src="/US_Viatris_Logo_Horiz_RGB_VIOLET900px.png" alt="" className="logo" />
              <img src="/zoetis-com-logo.png" alt="" className="logo"/> */}
              <ul>
                <li>
                  <img src="/US_Viatris_Logo_Horiz_RGB_VIOLET900px.png" alt="" className="logo" />
                </li>
                <li>
                  <img src="/zoetis-com-logo.png" alt="" className="logo"/>
                </li>
                <li>
                  <img src="/US_Viatris_Logo_Horiz_RGB_VIOLET900px.png" alt="" className="logo" />
                </li>
                <li>
                  <img src="/zoetis-com-logo.png" alt="" className="logo"/>
                </li>
                <li>
                  <img src="/US_Viatris_Logo_Horiz_RGB_VIOLET900px.png" alt="" className="logo" />
                </li>
                <li>
                  <img src="/zoetis-com-logo.png" alt="" className="logo"/>
                </li>
                
              </ul>
            </div>
          </div>

          
        </div>

       {/* ====================BOTTOM SECTION END ======================== */}
    </div>
  );
};
export default App;
