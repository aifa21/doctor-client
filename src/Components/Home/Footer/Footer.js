import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>quick links</h3>
            <Link to="#"> <i class="fas fa-chevron-right"></i> home </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> services </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> about </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> doctors </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> book </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> review </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> blogs </Link>
        </div>

        <div class="box">
            <h3>our services</h3>
            <Link to="#"> <i class="fas fa-chevron-right"></i> dental care </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> message therapy </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> cardioloty </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> diagnosis </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> ambulance service </Link>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <Link to="#"> <i class="fas fa-phone"></i> +012-456-7890 </Link>
            <Link to="#"> <i class="fas fa-phone"></i> +345-222-3333 </Link>
            <Link to="#"> <i class="fas fa-envelope"></i> abc@gmail.com </Link>
            <Link to="#"> <i class="fas fa-map-marker-alt"></i> Dhaka-Bangladesh </Link>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <Link to="#"> <i class="fab fa-facebook-f"></i> facebook </Link>
            <Link to="#"> <i class="fab fa-twitter"></i> twitter </Link>
            <Link to="#"> <i class="fab fa-twitter"></i> twitter </Link>
            <Link to="#"> <i class="fab fa-instagram"></i> instagram </Link>
            <Link to="#"> <i class="fab fa-linkedin"></i> linkedin </Link>
            <Link to="#"> <i class="fab fa-pinterest"></i> pinterest </Link>
        </div>

    </div>

    <div class="credit">  <p>Copyright {(new Date()).getFullYear()} <span>Aifa faruque</span> | All Rights Reserved</p>  </div>

</section>

  );
 
};

export default Footer;
