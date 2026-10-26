import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-9 mx-auto">
          <div className="row">
            <div className="col-sm-6">
              <img src="/pexels-tony-schnagl-5588398.jpg" alt="" />
            </div>
            <div className="col-sm-6 px-3">
              <h3 className="mt-5">
                Creafting Excellence Through <br />
                Innivation and Dedication
              </h3>

              <p className="paratext1 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                laudantium at sequi provident repellat excepturi tempora vel .
              </p>

              <p className="paratext2 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                deleniti odit nemo quibusdam architecto. Dolorem, inventore ea
                fuga nemo exercitationem quidem tempore nobis, suscipit impedit
                similique velit at possimus aliquam.
              </p>

              <div className="row  mt-5 ">
                <div className="col-sm-4 ">
                  <h4 className="text-primary hnumber fs-2">150+</h4>
                  <p className="htext">PROJECT COMPLETED</p>
                </div>

                <div className="col-sm-4">
                  <h4 className="text-primary hnumber fs-2">14+</h4>
                  <p className="htext">YEAR EXPERIENCE</p>
                </div>

                <div className="col-sm-4">
                  <h4 className="text-primary hnumber fs-2">90%</h4>
                  <p className="htext">CLIENT SATISFACTION</p>
                </div>
              </div>
              <button type="button" className="btn btn-outline-primary mt-5" >Discover Our Story  ➡</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
