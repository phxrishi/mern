import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        {/* ============ NAVBAR START SECTION ============= */}
        <div className="row pt-3 pb-2 navbar  fixed-top bg-white shadow-lg">
          <div className="col-sm-1 ">
            <img src="/images.jpg" alt="" height="39vh" className="ms-5" />
          </div>
          <div className="col-md-5 navmenu">
            <ul className="menu1">
              <li>MEN</li>
              <li className="ms-4 ">WOMEN</li>
              <li className="ms-4 ">KIDS</li>
              <li className="ms-4 ">HOME</li>
              <li className="ms-4 ">BEAUTY</li>
              <li className="ms-4 ">GENZ</li>
              <li className="ms-4 ">STUDIO</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <div className="search-container">
              <CiSearch className="search-icon me-2 fs-3" />
              <input
                type="text"
                placeholder="Search for Products, Brands and  More"
                className="search-container form-control bg-light"
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              <div className="col-sm-4">
                <h5 className="fw-bold mb-1">
                  <FaRegUser />
                </h5>
                <p className="smalltext fw-bold">Profile</p>
              </div>
              <div className="col-md-4">
                <h5 className="mb-1">
                  <FaRegHeart />
                </h5>
                <p className="smalltext fw-bold">Wishlist</p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold mb-1">
                  {" "}
                  <RiShoppingBagLine />
                </h5>
                <p className="smalltext fw-bold">Bag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ NAVBAR END SECTION ============= */}

      {/* ============ POSTER SECTION 1 START ============= */}
      <div className="container-fluid ">
        <div className="container mt-5">
          <div className="row ">
            <div className="col-sm-12 mt-5">
              <img
                src="/myntra_images.jpg"
                alt=""
                height="90vh"
                className=" mt-3"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <img src="/myntra (1).jpg" alt="" height="300vh" />
            </div>
            <div className="col-sm-6">
              <img src="/myntra (2).jpg" alt="" height="300vh" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <img src="/myntra (3).jpg" alt="" width="380vh" />
            </div>
            <div className="col-sm-4">
              <img src="/myntra (4).jpg" alt="" width="380vh" />
            </div>
            <div className="col-sm-4">
              <img src="/myntra (5).jpg" alt="" width="381vh" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <img src="/myntra (6).jpg" alt="" width="287vh" />
            </div>
            <div className="col-sm-3">
              <img src="/myntra (7).jpg" alt="" width="287vh" />
            </div>
            <div className="col-sm-3">
              <img src="/myntra (8).jpg" alt="" width="287vh" />
            </div>
            <div className="col-sm-3">
              <img src="/myntra (9).jpg" alt="" width="287vh" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <img src="/myntra.gif" alt="" width="1142vh" />
              <img src="/myntra.jpeg" alt="" width="1142vh" />
            </div>
          </div>
          {/* ============ POSTER SECTION 1 END============= */}

          {/* ============ CARD SECTION 1 START============= */}
          <div className="row mt-4 ">
            <div className="col-sm-12 ">
              <img
                src="/myntra_images (18).png"
                alt=""
                width="223vh"
                height="260vh"
              />
              <img
                src="/myntra_images (21).png"
                alt=""
                width="223vh"
                height="260vh"
              />
              <img
                src="/myntra_images (24).png"
                alt=""
                width="224vh"
                height="260vh"
              />
              <img
                src="/myntra_images (22).png"
                alt=""
                width="223vh"
                height="260vh"
              />
              <img
                src="/myntra_images (23).png"
                alt=""
                width="223vh"
                height="260vh"
              />
            </div>
          </div>
          {/* ============ CARD SECTION 1 END============= */}

          {/* ============ CARD SECTION 2 START============= */}
          <div className="row py-3 categorybg">
            <div className="col-sm-12 text-center">
              <h1 className="shopbycategorytext">SHOP BY CATEGORY</h1>
            </div>
          </div>
          <div className="row mt-2 ">
            <div className="col-sm-2 ">
              <img
                src="/myntra_images (10).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (11).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (12).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (13).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (14).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (15).jpg"
                alt=""
                height="275vh"
                width="180vh"
              />
            </div>
          </div>

          <div className="row mt-2 ">
            <div className="col-sm-2 ">
              <img
                src="/myntra_images (16).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (17).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (18).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (19).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (20).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (21).jpg" alt="" height="275vh" width="180vh" />
            </div>
          </div>

          <div className="row mt-2 ">
            <div className="col-sm-2 ">
              <img src="/myntra (22).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (23).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (24).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (25).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (26).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (27).jpg" alt="" height="275vh" width="180vh" />
            </div>
          </div>

          <div className="row mt-2 ">
            <div className="col-sm-2 ">
              <img src="/myntra (28).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img src="/myntra (29).jpg" alt="" height="275vh" width="190vh" />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (30).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (31).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (32).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (33).jpg"
                alt=""
                height="275vh"
                width="180vh"
              />
            </div>
          </div>

          <div className="row mt-2 ">
            <div className="col-sm-2 ">
              <img
                src="/myntra_images (34).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (35).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (36).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (37).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (38).jpg"
                alt=""
                height="275vh"
                width="190vh"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="/myntra_images (39).jpg"
                alt=""
                height="275vh"
                width="180vh"
              />
            </div>
          </div>

          {/* ============ CARD SECTION 2 END============= */}

          {/* ============ POSTER 2 SECTION  START============= */}
          <div className="row">
            <div className="col-sm-12">
              <img src="/myntra (2).jpeg" alt="" height="208svh" />
            </div>
          </div>
          {/* ============ POSTER SECTION 2 END============= */}

          {/* ============ footer SECTION start============= */}
          {/* <div className="row">
                <div className="col-sm-2">
                  <div className="row">
                    <h6 className="fw-bold">ONLINE SHOPPING</h6>
                  </div>
                  <div className="row">
                  <ul style={{listStyle:'none'}}>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Home</li>
                    <li>Beauty</li>
                    <li>Genz</li>
                    <li>Gift cards</li>
                    <li>Myntra Insider</li>
                  </ul>
                  </div>
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-4"></div>
                <div className="col-sm-4"></div>
              </div>
 */}

          <div className="row my-3 mx-4">
            <div className="col-sm-2">
              <span
                style={{ fontSize: "12px", fontWeight: "bold" }}
                className=""
              >
                POPULAR SEARCHES
              </span>
            </div>
            <div className="col-sm-10 ">
              <span>
                <hr />
              </span>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <span style={{ color: "grey" }}>
                  Makeup | Dresses For Girls | T-Shirts |Sandals | Headphones |
                  Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags
                  | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers Wallets |
                  Tops Earrings | Fastrack Watches | Kurtis | Nike | Smart
                  Watches | Titan Watches | Designer Blouse | Gowns | Rings |
                  Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames |
                  Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick |
                  Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles |
                  Bras | Suit | Chinos Shoes | Adidas Shoes | Woodland Shoes |
                  Jewellery | Designers Sarees
                </span>
              </div>
            </div>

            <div className="row my-5">
              <div className="col-sm-4">
                <span style={{ color: "grey" }}>
                  In case of any concern,{" "}
                  <b className="text-primary"> ContactUs</b>{" "}
                </span>
              </div>
              <div className="col-sm-6 text-center">
                <span style={{ color: "grey" }}>
                  © 2026 www.myntra.com. All rights reserved.
                </span>
              </div>
              <div className="col-sm-2">
                <span style={{ color: "grey" }}>A Flipkart Company</span>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-8">
                <h6 className="fw-bold">Registered Office Address</h6>
                <p  style={{ fontSize: "14px", color:'grey', marginTop:'20px'}}>Buildings Alyssa, Buildings Alyssa,
Begonia and Clover situated in Embassy Tech Village, Outer Ring Road,Devarabeesanahalli Village,</p>
                
              </div>
            </div>




            <hr />
            <div className="row">
              <div className="col-sm-12">
                <span
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  className="my-4"
                >
                  ONLINE SHOPPING MADE EASY AT MYNTRA
                </span>
                <p
                  p
                  style={{ fontSize: "14px", color: "grey", marginTop: "10px" }}
                >
                  If you would like to experience the best of online shopping
                  for men, women and kids in India, you are at the right place.
                  Myntra is the ultimate destination for fashion and lifestyle,
                  being host to a wide array of merchandise including clothing,
                  footwear, accessories, jewellery, personal care products and
                  more. It is time to redefine your style statement with our
                  treasure-trove of trendy items. Our online store brings you
                  the latest in designer products straight out of fashion
                  houses. You can shop online at Myntra from the comfort of your
                  home and get your favourites delivered right to your doorstep.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginTop: "30px",
                  }}
                >
                  BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
                </span>
                <p
                  p
                  style={{ fontSize: "14px", color: "grey", marginTop: "10px" }}
                >
                  Be it clothing, footwear or accessories, Myntra offers you the
                  ideal combination of fashion and functionality for men, women
                  and kids. You will realise that the sky is the limit when it
                  comes to the types of outfits that you can purchase for
                  different occasions.
                </p>
              </div>
            </div>


            <div className="row my-3">
              <div className="col-sm-12">
                1.<span style={{fontSize:'14px', fontWeight:'bold'}}>Smart men’s clothing -</span><span style={{fontSize:'14px', color:'grey'}}>
                  At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.
                </span>
              </div>
            </div>


            <div className="row my-3">
              <div className="col-sm-12">
                2.<span style={{fontSize:'14px', fontWeight:'bold'}}>Trendy women’s clothing -</span><span style={{fontSize:'14px', color:'grey'}}>
                  Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay  on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.
                </span>
              </div>
            </div>


            <div className="row my-3">
              <div className="col-sm-12">
                3.<span style={{fontSize:'14px', fontWeight:'bold'}}>Smart men’s clothing -</span><span style={{fontSize:'14px', color:'grey'}}>
                  At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wea Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.
                </span>
              </div>
            </div>


            <div className="row my-3">
              <div className="col-sm-12">
                4.<span style={{fontSize:'14px', fontWeight:'bold'}}>Smart men’s clothing -</span><span style={{fontSize:'14px', color:'grey'}}>
                  At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.
                </span>
              </div>
            </div>


            <div className="row my-3">
              <div className="col-sm-12">
                5.<span style={{fontSize:'14px', fontWeight:'bold'}}>Smart men’s clothing -</span><span style={{fontSize:'14px', color:'grey'}}>
                  At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <span style={{fontSize:'14px', color:'grey'}}>
                  Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.
                </span>
              </div>
            </div>
          </div>
          {/* ============ FOOTER SECTION END============= */}
        </div>
      </div>
    </>
  );
};

export default App;
