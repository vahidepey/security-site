import  "../App.css"

import heroImage from '../assets/brt.jpg'
import Services from "./Services"
import Projects from "./Projects"
import { Link } from 'react-router-dom';
import Contact from "./Contact";
import {
  FaInstagram, FaWhatsapp, FaTelegramPlane
} from 'react-icons/fa';



function Home(){
    return(
        <main>
            
                <section className="hero" id="home"  >
                 <img src={heroImage} alt="Security and network System" className="hero-image" />
                  <div className="hero-overlay"></div>
                  <div className="hero-content">
                    <span className="hero-lable">SECURITY & NETWORK SOLUTIONS</span>
                    <h2>امنیت شبکه و آینده ای مطمئن</h2>
                    <p>ارائه راهکارهای تخصصی درزمینه امنیت شبکه,سیستم های نظارتی ودوربین های مدار بسته باجدیدترین تجهیزات و فن اوری های روز دنیا</p>
                    <div className=" hero-buttons">
                      <a href="#contact" className="btn-primary">
                        دریافت مشاوره
                     
                      </a>
                      <button className="btn-video">
                        <span className="play-icon">▶</span>
                        مشاهده ویدئو
                      </button>
                    </div>
                   
                  </div>
                </section>


    
        <main>

        <section className="services"  id="services">
          <div className="services-header">
    
          </div>

          <div className="home-servises-header">
            <div className="services-title-line">

            </div>
          </div>
         <Services/>
         
       
         <Projects  showMore={true} />
         
        <section className= "about-preview" >
          <h2> : درباره ما </h2>
         <p>ما با بیش از 15 سال تجربه در زمینه طراحی, نصب و پشتیبانی سیستم های امنیتی و شبکه و با بیش از  ده ها پروژه سازمانها و ارگانهای دولتی و خصوصی آماده ایم تا امنیت و آرامش خاطر را  را برای شما فراهم کنیم با تیم مجرب و حرفه ای گروه نمی دونم جیجی</p>
         </section>
         
        
        </section>
        </main>

        
   <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>امنیت امروز آرامش فردا</h2>
        <p>راهکارهای مطمئن با ما</p>
        </div>

        <div className="footer-contact" >
          <h3>ارتباط با ما</h3>
          <p>    example@gmail.com  : ایمیل</p>
          <p> 021-88241977 : تلفن</p>
          <p>موبایل : 09123338815</p>
          <p> آدرس : ایران - تهران</p>
          <div className="footer-social">
            <a href="#" aria-lable='Instagram'><FaInstagram/></a>
            <a href="#" aria-lable='Whatsapp'><FaWhatsapp/></a>
            <a href="#" aria-lable='TelegramPlane'><FaTelegramPlane/></a>


          </div>
        </div>
      </div>
      <div className="footer-button">
        @2025 NetWork . All Rights Reserved .
      </div>
    </footer>
</main>

    )}

export default Home