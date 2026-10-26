import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        {/* ======================= NAVBAR START ============================ */}

        <div className="row  navouterborder pt-2 pb-2  ">
          <div className="col-sm-2 logorightborder">
            <div className="container-fluid">
              <nav className="navbar">
                <img
                  src="/Screenshot 2026-08-21 081050.png"
                  alt=""
                  height="42vh"
                  width="122vh"
                />
              </nav>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="row text-center">
              <h5 className="mt-2 fw-bold">Delivery in 8 minutes</h5>
              <small>14/666,Sector 14,indira-nagar,..▼</small>
            </div>
          </div>
          <div className="col-sm-4">
            <form className="d-flex" role="search">
              <input
                // <CiSearch />
                className="form-control me-2 py-2 mt-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-sm-1 mt-3 text-center ">
            <a href="#" className="logintext ">
              Login
            </a>
          </div>
          <div className="col-sm-2 ">
            <center>
              <button className="btn pt-2 mt-2 text-center buton">
                <IoCartOutline className="carticon fs-3 me-2 fw-bold" />
               <small className="text-light"> My Cart</small>
              </button>
            </center>
          </div>
        </div>
        {/* ======================= NAVBAR END ============================ */}

        {/* ================= POSTER 1 START =========================== */}
        <div className="row">
          <div className="col-sm-12">
            <a href="">
              <img src="/Frame-1437256605-2-2.jpg" alt="" className="poster1 img-fluid" />
            </a>
          </div>
        </div>
        {/* ================= POSTER 1  SECTION END =========================== */}

        {/* =============POSTER 2 SECTION START ======================= */}
        <div className="row  mt-3 ">
          <div className="col-sm-3 ">
            <a href="">
              <img src="/pharmacy-WEB.avif" alt="" height="195vh" />
            </a>
          </div>
          <div className="col-sm-3 px-5 me-4">
              <img src="/pet_crystal_WEB-1.avif" alt="" height="195vh"  />
            </div>
            <div className="col-sm-3 px-5 ms-3">
              <img src="/baby_crystal_WEB-1.avif" alt="" height="195vh"/>
            </div>
        </div>

        {/* =============== POSTER2 SECTION END ====================== */}


         {/* =================== CARDS SECTION -  1 START ======== */}
          <div className="row mt-3 mb-0">
            <div className="col-sm-12">
               <a href="">
                <img src="/paan-corner_web.jpg" alt="" height='169.17647058823528' width='117.4' className="img-fluid "/>
              </a>
              <a href="">
                <img src="/Slice-2_10.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-3_9.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-4_9.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-5_4.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-6_5.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
               <a href="">
                <img src="/Slice-7_3.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-8_4.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="public/Slice-7-1_0.avif" alt="" height='169.17647058823528' width='119.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-10.jpg" alt="" height='169.17647058823528' width='117.4' className="img-fluid " />
              </a>
              
            </div>
          </div>

         {/* =================== CARDS SECTION -  1 END ======== */}


         {/* ===================== CARD SECTION 2  START ============== */}
          <div className="row ">
            <div className="col-sm-12">
               <a href="">
                <img src="/Slice-11.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid "/>
              </a>
              <a href="">
                <img src="/Slice-12.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-13.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-14.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-15.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-16.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
               <a href="">
                <img src="/Slice-17.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-18.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-19.avif" alt="" height='169.17647058823528' width='119.4' className="img-fluid mx-1" />
              </a>
              <a href="">
                <img src="/Slice-20.avif" alt="" height='169.17647058823528' width='117.4' className="img-fluid " />
              </a>
              
            </div>
          </div>


        {/* ===================== CARD SECTION 2  END ============== */}



{/* =============== FOOTER SECTION 1 START ====================== */}

<div className="row mt-5">
<div className="col-sm-4">
  <div className="row">
    <h5>Useful links</h5>
    <div className="col-sm-4 li1css mt-3">
      <ul className="ms-2">
        <li className="my-1">Blog</li>
        <li className="my-1">Privacy</li>
        <li className="my-1">Terms</li>
        <li className="my-1">FAQs</li>
        <li className="my-1">Security</li>
        <li className="my-1">Contact</li>
      </ul>
    </div>
    <div className="col-sm-4 li1css mt-3">
      <ul className="ms-2">
        <li className="my-1">Partner</li>
        <li className="my-1">Frenchies</li>
        <li className="my-1">Seller</li>
        <li className="my-1">Warehouse</li>
        <li className="my-1">Deliver</li>
        <li  className="my-1">Resource</li>
      </ul>
    </div>

    <div className="col-sm-4 li1css mt-3 ">
      <ul className="ms-2">
        <li className="my-1">Recipes</li>
        <li className="my-1">Bistro</li>
        <li className="my-1">District</li>
        <li className="my-1">BlinkitAmbulance</li>
        <li className="my-1">Feeding India</li>
        
      </ul>
    </div>
  </div>
</div>
<div className="col-sm-8">
  <div className="row">
    <h5>Categories <small><a href="#" className="text-success fw-0">See all</a></small></h5>
    <div className="col-sm-4 li1css mt-3">
      <ul className="my-2">
        <li className="my-1">Bath & Body</li>
        <li className="my-1">Beauty & Cosmetics</li>
        <li className="my-1">Health & Pharma</li>
        <li className="my-1">Atta, Rice & Dal</li>
        <li className="my-1">Bakery & Biscuits</li>
        <li className="my-1">Kitchenware & Appliances</li>
        <li className="my-1">Drinks & Juices</li>
        <li className="my-1">Sauces & Spreads</li>
        <li className="my-1">Home & Lifestyle</li>
        <li className="my-1">Stationery & Games</li>
        <li className="my-1">Rakhi Gifts</li>
      </ul>
    </div>

     <div className="col-sm-4 li1css mt-3">
      <ul className="my-2">
        <li className="my-1">Hair</li>
        <li className="my-1">Feminine Hygiene</li>
        <li className="my-1">Sexual Wellness</li>
        <li className="my-1">Oil, Ghee & Masala</li>
        <li className="my-1">Dry Fruits & Cereals</li>
        <li className="my-1">Chips & Namkeen</li>
        <li className="my-1">Tea, Coffee & Milk Drinks</li>
        <li className="my-1">Paan Corner</li>
        <li className="my-1">Cleaners & Repellents</li>
        <li className="my-1">Print Store</li>
        
      </ul>
    </div>

     <div className="col-sm-4 li1css mt-3">
      <ul className="my-2">
        <li className="my-1">Skin & Face</li>
        <li className="my-1">Baby Care</li>
        <li className="my-1">Vegetables & Fruits</li>
        <li className="my-1">Dairy, Bread & Eggs</li>
        <li className="my-1">Chicken, Meat & Fish</li>
        <li className="my-1">Sweets & Chocolates</li>
        <li className="my-1">Instant Foods</li>
        <li className="my-1">Ice Creams & More</li>
        <li className="my-1">Electronics</li>
        <li className="my-1">E-Gift cards</li>
        
      </ul>
    </div>
  </div>
</div>
  </div> 



{/* =============== FOOTER SECTION 1 END  ====================== */}

{/* ====================== FOOTER SECTION 2 START ============= */}
<div className="row mt-4">
<div className="col-sm-4 text-center">
  <p className="footersec2 ">© Blink Commerce Private Limited, 2016-2026</p>
</div>
<div className="col-sm-4">
  <span className="download me-3">Download App</span>
  <span><img src="/d61019073b700ca49d22.webp" alt="" height='30vh' className="me-2"/></span>
  <span><img src="/8ed033800ea38f24c4f0.webp" alt="" height='30vh'/></span>
</div>

<div className="col-sm-4  " >
  <ul style={{display:'flex'}}>
    <li style={{display:'flex'}}>
      <div className="iconbg p-2 me-3">
  <FaFacebookF className="text-light text-center fs-4 "/>
</div>
    </li>
    <li style={{display:'flex'}}>
      <div className="iconbg p-2 me-3">
  <FaThreads className="text-light text-center fs-4 "/>
</div>
</li>

 <li style={{display:'flex'}}>
  <div className="iconbg p-2 me-3 ">
  <FaInstagram className="text-light text-center fs-4 "/>
</div>
 </li>

 <li style={{display:'flex'}}>
  <div className="iconbg p-2 me-3">
  <FaLinkedinIn className="text-light text-center fs-4 "/>
</div>
 </li>

<li style={{display:'flex'}}>
  <div className="iconbg p-2 me-3">
  <BsTwitterX className="text-light text-center fs-4 "/>
</div>
</li>
    
  </ul>
</div>
</div>


{/* ====================== FOOTER SECTION 2 END  ============= */}


{/* ======================= FOOTER SECTION 3 START ================= */}
<div className="row">
  <div className="col-sm-12">
    <small className="footersec2
    ">
      “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
    </small>
  </div>
</div>


{/* ======================= FOOTER SECTION 3 END  ================= */}
      </div>
    </>
  );
};

export default App;
