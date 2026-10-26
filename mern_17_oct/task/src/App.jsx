import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Aos from "aos";
import "./App.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="row bg-light p-3 my-3 shadow text-center">
        <div className="col-sm-12">
          <div data-aos="fade-up">
            <h1 className="text-primary">welcome to React</h1>
          </div>
        </div>
      </div>

      <div className="row ">
        <div data-aos="fade-down">
          <div className="col-sm-10 mx-auto mt-2 p-2 bg-warning outer"></div>

          <div className="row">
            <div data-aos="fade-up">
              <div className="col-sm-10 mx-auto mt-2 p-2 bg-dark outer"></div>
            </div>
          </div>

          <div className="row">
            {/* <div className="col-sm-5 mx-auto mt-2 p-2 bg-warning outer"></div> */}

            
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
