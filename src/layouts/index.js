import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import './main.css'

const Header = () =>
  <div className="hero">
    <div className="row container-fluid">
      <div className="col-auto p-0 text-right">
        <i className="fa fa-code" />
      </div>
      <div className="col-auto">
        <h1>Smart Binary</h1>
        <h2>A Consultancy</h2>
      </div>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Smart Binary"
      meta={[
        { name: 'description', content: 'Smart Binary Consulting' },
        { name: 'keywords', content: 'smart, binary, consulting' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
