import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import MV from '../components/organisms/mv'
import Skills from '../components/organisms/blocks/skills'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MV />
    <Skills />
    <h1>Hi people who are you?</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/posts/">Go to posts</Link>
    <Link to="/projects/">Go to project</Link>
    <Link to="/elements">Go to elements</Link>
  </Layout>
)

export default IndexPage
