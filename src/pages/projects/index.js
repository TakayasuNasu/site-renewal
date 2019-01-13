import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <h1>Project list</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects
