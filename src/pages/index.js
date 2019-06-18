import React from 'react'
import { Element } from 'react-scroll'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MV from '../components/organisms/mv'
import Skills from '../components/organisms/blocks/skills'
import Profile from '../components/organisms/blocks/profile'
import Timeline from '../components/organisms/blocks/timeline'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <MV />
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="profile">
        <Profile />
      </Element>
      <Element name="timeline">
        <Timeline />
      </Element>
    </Layout>
  )
}

export default IndexPage