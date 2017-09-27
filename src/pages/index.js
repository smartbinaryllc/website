import React from 'react';

import backtoback from '../assets/backtoback.png';
import css from '../assets/css3.png';
import react from '../assets/reactNE.png';
import html from '../assets/HTML5_Badge_512.png';
import logo from '../assets/logo-title-light.png';
import todd from '../assets/todd_smart.jpg';

import '../layouts/main.css';
import '../layouts/fonts/font-awesome-4.7.0/css/font-awesome.min.css';

export default () => (
  <div className="">
    <section className="smart-binary container-fluid p-4">
      <h2>What is Smart Binary?</h2>
      <div className="row">
        <div className="col-sm-6">
          <p>
            Smart Binary, LLC is an{' '}
            <a href="http://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=Initial&searchNameOrder=SMARTBINARY%20L150001747200&aggregateId=flal-l15000174720-1fd468a2-2724-402b-b343-706d46b93cc8&searchTerm=smart%20binary&listNameOrder=SMARTBINARY%20L040000042080">
              incorporated
            </a>{' '}
            software consultancy.
          </p>
          <p>
            We are a partnership. Each technical partner is foremost a
            consultant for our clients. They each have proven, referenceable
            track records of analyzing, designing, implementing, and maintaining
            solutions ranging from stealth startup quick releases to long-term
            enterprise solutions for the world's largest companies.
          </p>
          <p>
            If and when you have a need to build out a team to meet your most
            extreme timelines, our partners are able to tap into our closest,
            most trusted, and proven colleagues to scale and delivery
            accordingly. We will always provide you with the opportunity to meet
            and even interview colleagues that we recommend to you to help scale
            up and deliver.
          </p>
          <p>
            To determine our corp-to-corp, all-inclusive rate, we evaluate the
            following aspects of the engagement:
          </p>
          <p>
            <li>client location</li>
            <li>on-site / remote percentage</li>
            <li>project type</li>
            <li>technology stack</li>
            <li>requested role(s)</li>
            <li>requested responsibilities</li>
            <li>length of engagement</li>
            <li>problem domain</li>
          </p>
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
          <p>
            Smart Binary is an <b>Software Consultancy</b> specializing in{' '}
            <b>Mobile Application Development</b>. We are capable of handling
            the full stack from UI to API to DB to Cloud. Founded in 1999, Smart
            Binary excels in customized, one-on-one client interaction in
            applications consulting services. We strive to provide the highest
            levels of communication and produce high quality results to
            businesses across the USA and beyond, at an affordable rate.
          </p>
          <p>
            Our Partners combine for more than 40-years of academic and
            professional experience. With our skill sets, experience levels, and
            industry connections, Smart Binary allows you to bypass expensive
            agencies and go
            <b>
              <i>"Direct to the Source".</i>
            </b>
          </p>
          <p>
            <b>
              <i>"Direct to the Source"</i>
            </b>
          </p>
          <p>
            Our Partners are industry experts that you will have direct access
            to.
          </p>
          <p>What does that fiscally mean to you?</p>
          <p>
            ...<b>no need</b> to pay heavy fees to post job ads...
          </p>
          <p>
            ...<b>no need</b> to pay a 50% up-charge to recruiters...
          </p>
          <p>
            ...<b>no need</b> to spend weeks interviewing candidates...
          </p>
          <p>
            <i>
              Save time and money by going <b>Direct to the Source</b>.
            </i>
          </p>
          <p>
            We look forward to partnering with you for your development and
            design needs.
          </p>
        </div>
        <div className="col pt-5">
          <div className="tech-logos row">
            <img
              src={logo}
              alt="Logo"
              className="col col-md-6 img-responsive"
            />
            <img
              src={html}
              alt="html5"
              className="col col-md-6  img-responsive"
            />
            <img
              src={react}
              alt="react"
              className="col col-md-6  img-responsive"
            />
            <img
              src={css}
              alt="css3"
              className="col col-md-6  img-responsive"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="founders p-4">
      <h2>Meet the Technical Partners</h2>
      <ul className="nav justify-content-center pr-0 container-fluid">
        <li className="nav-item">
          <a href="" className="nav-link active">
            Todd Smart
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Brad Bohen
          </a>
        </li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <img src={todd} alt="Todd Smart" />
        </div>
        <div className="col-sm-6 text-right">
          <h5>Todd Smart</h5>
          <h6>Software Engineer | Mentor | Agile Coach</h6>
          <p>
            Todd is a professional software engineer with nearly three decades
            of full-stack development experience.
          </p>
          <p>
            Todd builds enterprise-level mobile and web applications using React
            Native, React, GraphQL, and Node.
          </p>
          <p>
            Academically, Todd attained a master’s degree in Computer Science.
          </p>
          <div className="social-icons">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/toddsmart/"
                  className="nav-link"
                >
                  <i className="fa fa-linkedin-square" />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://twitter.com/toddsmart" className="nav-link">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/toddsmart" className="nav-link">
                  <i className="fa fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="contact-us">
      <h2>Interested in getting in touch?</h2>
      <form
        action="mailto:more.info@smartbinary.com"
        method="post"
        enctype="text/plain"
        className="row container p-0 m-0"
      >
        <div className="col-sm-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="contactName"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary">
            Send
          </button>
        </div>
      </form>
    </section>
    <footer className="p-4">
      <div className="social-icons">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/company/1745521/"
              className="nav-link"
            >
              <i className="fa fa-linkedin-square" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/smartbinary" className="nav-link">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/smartbinaryllc" className="nav-link">
              <i className="fa fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);
