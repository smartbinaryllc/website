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
<div>
    <section className="smart-binary">
        <h2>What is Smart Binary?</h2>
        <div className="row">
            <div className="col-sm-6">
            <p>I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .N</p>
            </div>
            <div className="col-sm-6">
                <img src={backtoback} alt="Logo" />
            </div>
        </div>
    </section>
    <section className="what-we-do_wrapper">
        <div className="what-we-do">
            <h2>What do we do?</h2>
            <div className="row">
                <div className="col-sm-6">
                <p>I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .N</p>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <img src={logo} alt="Logo" className="col-sm-6" />
                        <img src={html} alt="html5" className="col-sm-6" />
                        <img src={react} alt="react" className="col-sm-6" />
                        <img src={css} alt="css3" className="col-sm-6" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="founders">
        <h2>Meet the Founders</h2>
        <h4>Smart Binary is basically run by superheros</h4>
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="" className="nav-link">Founder 1</a></li>
                <li className="nav-item">
                    <a href="" className="nav-link">Founder 2</a></li>
                <li className="nav-item">
                    <a href="" className="nav-link">Founder 3</a></li>
                <li className="nav-item">
                    <a href="" className="nav-link">Founder 4</a></li>
            </ul>
        </nav>
        <div className="row">
            <div className="col-sm-6">
                <img src={todd} alt="Todd Smart" />
            </div>
            <div className="col-sm-6">
                <h5>Todd Smart</h5>
                <h6>Partner & Senior Consultant</h6>
                <p>I am a professional software engineer with over two decades of Full Stack development experience focused on JavaScript, Java/J2EE, and .NET.</p>
                <div className="social-icons">
                    <i className="fa fa-twitter"/>
                    <i className="fa fa-reddit"/>
                    <i className="fa fa-linkedin-square"/>
                    <i className="fa fa-dribbble"/>
                </div>
            </div>
        </div>

    </section>
</div>