import React from "react";


import backtoback from '../assets/backtoback.png'
import css from '../assets/css3.png'
import react from '../assets/reactNE.png'
import html from '../assets/HTML5_Badge_512.png'
import logo from '../assets/logo-title-light.png'
import todd from '../assets/todd_smart.jpg'


import '../layouts/main.css';
import '../layouts/fonts/font-awesome-4.7.0/css/font-awesome.min.css';


export default () =>
<div className="">
    <section className="smart-binary container-fluid p-4">
        <h2>What is Smart Binary?</h2>
        <div className="row">
            <div className="col-sm-6">
            <p>I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .N</p>
            </div>
            <div className="col-sm-6">
                <img src={backtoback} alt="Logo" className=" img-responsive" />
            </div>
        </div>
    </section>
    <section className="what-we-do_wrapper">
        <div className="what-we-do p-4 row container-fluid">
            <div className="col-8">
            <h2>What do we do?</h2>
            <p>I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .N</p>
            </div>
            <div className="col pt-5">
                <div className="tech-logos row">
                    <img src={logo} alt="Logo" className="col col-md-6 img-responsive" />
                    <img src={html} alt="html5" className="col col-md-6  img-responsive" />
                    <img src={react} alt="react" className="col col-md-6  img-responsive" />
                    <img src={css} alt="css3" className="col col-md-6  img-responsive" />
                </div>
            </div>
        </div>
    </section>
    <section className="founders p-4">
        <h2>Meet the Founders</h2>
        <h4>Smart Binary is basically run by superheros</h4>
        <ul className="nav justify-content-center pr-0 container-fluid">
            <li className="nav-item">
                <a href="" className="nav-link active">Todd Smart</a></li>
            <li className="nav-item">
                <a href="" className="nav-link">Founder 2</a></li>
            <li className="nav-item">
                <a href="" className="nav-link">Founder 3</a></li>
            <li className="nav-item">
                <a href="" className="nav-link">Founder 4</a></li>
        </ul>
        <div className="row">
            <div className="col-sm-6">
                <img src={todd} alt="Todd Smart" />
            </div>
            <div className="col-sm-6 text-right">
                <h5>Todd Smart</h5>
                <h6>Partner & Senior Consultant</h6>
                <p>I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.</p>
                <div className="social-icons">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <i className="fa fa-twitter"/></a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <i className="fa fa-reddit"/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <i className="fa fa-linkedin-square"/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <i className="fa fa-dribbble"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section className="contact-us">
        <h2>Interested in getting in touch?</h2>
        <form className="row container p-0 m-0">
            <div className="col-sm-6">
                <div className="form-group">
                    <input type="text" className="form-control" id="contactName" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="emailAddress" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="subject" placeholder="Subject"/>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="form-group">
                    <textarea className="form-control" id="message" rows="3" placeholder="Your Message"/>
                </div>
                <button type="submit" className="btn btn-block btn-primary">Send</button>
            </div>
        </form>
    </section>
    <footer className="p-4">
        <div className="social-icons">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a href="" className="nav-link">
                        <i className="fa fa-twitter"/></a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                        <i className="fa fa-dribbble"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                        <i className="fa fa-linkedin-square"/>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</div>