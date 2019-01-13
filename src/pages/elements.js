import React from 'react'
import { Link } from 'gatsby'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import Layout from '../components/layout'
import SEO from '../components/seo'
import WrapperL from '../components/atoms/divisions/wrapperL'
import H1 from '../components/atoms/headline/h1'
import H2 from '../components/atoms/headline/h2'
import H3 from '../components/atoms/headline/h3'
import ContactButton from '../components/atoms/buttons/contact'
import MenuButon from '../components/atoms/buttons/menu'
import CircleImg from '../components/atoms/img/circle'
import DL from '../components/atoms/list/dl'
import DT from '../components/atoms/list/terms'
import DD from '../components/atoms/list/description'
import SNS from '../components/organisms/blocks/sns'

const Elements = () => (
  <Layout>
    <SEO title="Elements page" />
    <WrapperL>
      <H1 ss={2.2}>H1 @TakayasuNasu</H1>
      <H2>H2 Takayasu Nasu</H2>
      <H3 bigLetter={true}>H3 UI/UX Designer &amp; Front End Developer</H3>
      <ContactButton>contact</ContactButton>
      <MenuButon bg='#010101' />
      <CircleImg />
      <SNS />
      <DL>
        <DT>Address</DT>
        <DD>Shinjuku, Tokyo</DD>
        <DT>Email</DT>
        <DD>taka.beckham@gmail.com</DD>
      </DL>
      <Slider trackStyle={{ backgroundColor: 'black' }} handleStyle={{ backgroundColor: 'black', borderColor: 'black' }} />
      <Link to="/">Go back to the homepage</Link>
    </WrapperL>
  </Layout>
)

export default Elements
