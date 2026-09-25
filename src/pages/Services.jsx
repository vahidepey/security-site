import securityImage from '../assets/sec.jpg'
import networkImage from '../assets/net2.jpg'
import cctvImage from '../assets/c.jpg'


function Services () {
    return(

        <main>

        <section className="services"  id="services">
          <div className="services-header">
            <span>WHAT WE DO</span>
            <h2>خدمات تخصصی ما</h2>
            <p>ارایه راهکارهای حرفه ای در زمینه شبکه و دوربین مدار بسته و سیستم های امنیت</p>
          </div>
          
          <div className="services-container">
            <div className="service-card">
             
              <img src={cctvImage} alt='cctvtyImage' className='service-image'/> 
            <h3>دوربین مدار بسته</h3>
            <p>نصب و راه اندازی انواع دوربین مدار بسته برای شرکت ها سازمان هاو مراکز تجاری</p>
            </div>
            <div className="service-card" > 
                <img src={networkImage} alt='networkImage' className='service-image'/>
              <h3>اجرای شبکه</h3>
              <p> طراحی و اجرای شبکه های کامپیوتری و زیر ساخت شبکه برای شرکت ها و مجموعه ها </p>
            </div>
            <div className="service-card">
               <img src={securityImage} alt='securityImage' className='service-image'/>
              <h3>سیستم های امنیتی</h3>
              <p> نصب و اجرای سیستم های امنیتی متناسب با نیاز مجموعه شما </p>
    
            </div>
    
            </div>
        </section>
        </main>
    )
}

export default Services