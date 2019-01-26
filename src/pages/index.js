import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MV from '../components/organisms/mv'
import Skills from '../components/organisms/blocks/skills'
import Profile from '../components/organisms/blocks/profile'
import Timeline from '../components/organisms/blocks/timeline'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MV />
    <Skills />
    <Profile />
    <Timeline />
  </Layout>
)

export default IndexPage
