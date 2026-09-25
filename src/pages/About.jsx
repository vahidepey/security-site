import securityImage from '../assets/sec.jpg'
import '../App.css'

function About (){
    return(
        <main>
            
                <section className="about"  id="about">
                  <div className="about-content">
                    <span> ABOUT US</span>
                    <h2>راهکارهای حرفه ای برای امنیت و زیر ساخت</h2>
                    
                <p>  ما در زمینه طراحی و اجرای سیستم های امنیتی و دوربین مدار بسته و زیر ساخت شبکه فعالیت میکنیم . هدف ما ارایه راهکارهای مطمین, حرفه ای و متناسب با نیاز شما می باشد.
                  </p>
                  <p>از مشاوره و طراحی تا نصب و راه اندازی کنار شما هستیم</p>
                  <a href="contact" className="about-button">دریافت مشاوره</a>
            
                  </div>
                  
             </section>
        </main>
    )
}

export default About