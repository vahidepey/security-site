import cctvImage from '../assets/uu88.jpg'
import networkImage from '../assets/u55.jpg'
import securityImage from '../assets/u9.jpg'
import { Link } from 'react-router-dom'

function Projects({showMore=false}){
    return(
        <main>
           
                <section className="projects" id="projects" >
                  <div className="projects-header">
                    
            <span > OUR PROJECTS</span>
                  
                  
                  <h2>  پروژه های اجرا شده</h2>
                  {showMore &&(<Link to='/projects' className='view-more'>مشاهده بیشتر</Link>  )}

                 
               
                   
            </div>
                  <div className="projects-container">
                    
            
                    <div className="project-card">
            
                      <div className="project-image">   <img src={networkImage} alt="CCTV CAMERA INSTALLATION" /></div>
            
                      <div className="project-content">
                        <h3>  پروژه نصب دوربین</h3>
                        <p>طراحی و نصب سرویس دوربین مدار بسته</p>
                            </div>
                    </div>
            
            
            <div className="project-card">
                      <div className="project-image">  <img src={cctvImage} alt="CCTV CAMERA INSTALLATION" /> </div>
                      <div className="project-content">
                        <h3>  پروژه اجرای شبکه</h3>
                        <p>طراحی و اجرای زیر ساخت شبکه</p>
                            </div>
                    </div>
            
            
                    
            <div className="project-card">
                      <div className="project-image">   <img src={securityImage} alt="CCTV CAMERA INSTALLATION" />  </div>
                      <div className="project-content">
                        <h3>  پروژه سیستم امنیتی </h3>
                        <p> اجرای سیستم حفاظتی و امنیتی</p>
                            </div>
                    </div>
                    
            
            
            </div>
                  
            
                </section>
            
        </main>
    )
}

export default Projects