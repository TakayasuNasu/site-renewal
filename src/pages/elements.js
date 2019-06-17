import React from 'react'
import { Link } from 'gatsby'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { TiNews, TiDeviceLaptop, TiEdit, TiHtml5 } from 'react-icons/ti'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WrapperL from '../components/atoms/divisions/wrapperL'
import H1 from '../components/atoms/headline/h1'
import H2 from '../components/atoms/headline/h2'
import H3 from '../components/atoms/headline/h3'
import H4 from '../components/atoms/headline/h4'
import ContactButton from '../components/atoms/buttons/contact'
import MenuButon from '../components/atoms/buttons/menu'
import CircleImg from '../components/atoms/img/circle'
import DL from '../components/atoms/list/dl'
import DT from '../components/atoms/list/terms'
import DD from '../components/atoms/list/description'
import SNS from '../components/organisms/blocks/sns'
import CircleIcon from '../components/atoms/icon/circle'
import Rectangle from '../components/molecules/panel/rectangle'
import Project from '../components/organisms/blocks/projects'
import RightNav from '../components/organisms/nav/right'

import SideMenuStore from '../store/side-menu'

const Elements = () => (
  <Layout>
    <SEO title="Elements page" />
    <WrapperL>
      <Project />
      <H1 ss={2.2}>H1 @TakayasuNasu</H1>
      <H2>H2 Takayasu Nasu</H2>
      <H3>H3 UI/UX Designer &amp; Front End Developer</H3>
      <H4>H4 Programing/Framework</H4>
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
      <SideMenuStore>
        <RightNav />
      </SideMenuStore>
      <ul>
        <li><CircleIcon><TiNews /></CircleIcon></li>
        <li><CircleIcon><TiDeviceLaptop /></CircleIcon></li>
        <li><CircleIcon><TiEdit /></CircleIcon></li>
        <li><CircleIcon><TiHtml5 /></CircleIcon></li>
      </ul>
      <Rectangle><H4>UI/UX Designer</H4></Rectangle>
      <Link to="/">Go back to the homepage</Link>
    </WrapperL>
  </Layout>
)

export default Elements
