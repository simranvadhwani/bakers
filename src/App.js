import './App.css';
import Spinner from './Components/Spinner/Spinner';
import Navbar from './Components/Navbar/Navbar';
import Slides from './Components/Slides/Slides';
import Experience from './Components/Experience/Experience';
import AboutUs from './Components/AboutUs/AboutUs';
import Products from './Components/Products/Products';
import Services from './Components/Services/Services';
import OurTeam from './Components/OurTeam/OurTeam';
import Clients from './Components/Clients/Clients';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <>
    <Spinner/>
 
    {/* <div className="container-fluid top-bar bg-dark text-light px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a className="small text-light" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="small text-light" href="#">Career</a></li>
                    <li className="breadcrumb-item"><a className="small text-light" href="#">Terms</a></li>
                    <li className="breadcrumb-item"><a className="small text-light" href="#">Privacy</a></li>
                </ol>
            </div>
            <div className="col-lg-6 px-5 text-end">
                <small>Follow us:</small>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn-lg-square text-primary border-end rounded-0" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn-lg-square text-primary border-end rounded-0" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn-lg-square text-primary border-end rounded-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn-lg-square text-primary pe-0" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div> */}
    
   <Navbar/>
   <Slides/>
  <Experience/>
   <AboutUs/>
  <Products/>
   <Services/>
   <OurTeam/>
<Clients/>
   <Footer/>
    
 
   
   
   
  
    {/* <div className="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                  
                    <br/>Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                </div>
            </div>
        </div>
    </div> */}
   
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
  
   </>
  );
}

export default App;
