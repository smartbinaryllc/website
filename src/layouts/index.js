import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import './main.css';


const Header = () =>
  <div className="hero"></div>

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
