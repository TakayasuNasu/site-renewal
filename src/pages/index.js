import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
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
