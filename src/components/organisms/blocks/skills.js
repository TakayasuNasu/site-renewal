import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import H3 from '../../atoms/headline/h3'
import H4 from '../../atoms/headline/h4'
import { VW } from '../../style-utils'

const Wrapper = styled.div`
  padding-bottom: ${VW(80)};
  ${breakpoint('md')`
    padding-bottom: 80px;
  `}
  background: linear-gradient(to bottom, rgb(255,255,255) 0%,rgb(238,238,238) 100%);
`

const Section = styled.section`
  display: block;
  ${breakpoint('md')`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (450px)[2];
    grid-template-columns: repeat(2, 450px);
    justify-content: space-between;
  `}
  margin-top: ${VW(80)};
  ${breakpoint('md')`
    margin-top: 80px;
  `}
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  ${breakpoint('md')`
    max-width: 960px;
  `}
`

const Article = styled.article`
  margin-top: ${VW(50)};
  ${breakpoint('md')`
    margin-top: 50px;
  `}
  width: 100%;
  ${breakpoint('md')`
    width: 95%;
  `}
  ${breakpoint('lg')`
    width: 450px;
  `}
`

const Div = styled.div`
  margin-top: ${VW(30)};
  ${breakpoint('md')`
    margin-top: 30px;
  `}
  padding-top: ${VW(40)};
  padding-bottom: ${VW(30)};
  padding-left: ${VW(20)};
  padding-right: ${VW(20)};
  ${breakpoint('md')`
    padding-top: 40px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
  `}
  height: ${VW(250)};
  ${breakpoint('md')`
    height: 250px;
  `}
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
`

const DT = styled.dt`
  &~dt{
    margin-top: ${VW(30)};
    ${breakpoint('md')`
      margin-top: 30px;
    `}
  }
`

const DD = styled.dd`
  padding-top: ${VW(12)};
  ${breakpoint('md')`
    padding-top: 12px;
  `}
`

const Skills = () => (
  <Wrapper>
    <Section>
      <Article>
        <H3>Programing/Framework 01</H3>
        <Div>
          <dl>
            <DT><H4>php - zend/cake/larabel/slim/palcon</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={5}
                trackStyle={{ backgroundColor: '#2196F3', height: 2 }}
                handleStyle={{ backgroundColor: '#2196F3', borderColor: '#2196F3' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>Javascript - Angular/React/jquery</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={5}
                trackStyle={{ backgroundColor: '#4CAF50', height: 2 }}
                handleStyle={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>Ruby - ruby on rails/Sinatra</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={4}
                trackStyle={{ backgroundColor: '#FFEB3B', height: 2 }}
                handleStyle={{ backgroundColor: '#FFEB3B', borderColor: '#FFEB3B' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>Go - echo</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={4}
                trackStyle={{ backgroundColor: '#7C4DFF', height: 2 }}
                handleStyle={{ backgroundColor: '#7C4DFF', borderColor: '#7C4DFF' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
          </dl>
        </Div>
      </Article>
      <Article>
        <H3>Programing/Framework 02</H3>
        <Div>
          <dl>
            <DT><H4>Java - struts/spring</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={3}
                trackStyle={{ backgroundColor: '#2196F3', height: 2 }}
                handleStyle={{ backgroundColor: '#2196F3', borderColor: '#2196F3' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>Node.js - express</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={2}
                trackStyle={{ backgroundColor: '#4CAF50', height: 2 }}
                handleStyle={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>Scala - play2</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={2}
                trackStyle={{ backgroundColor: '#FFEB3B', height: 2 }}
                handleStyle={{ backgroundColor: '#FFEB3B', borderColor: '#FFEB3B' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
          </dl>
        </Div>
      </Article>
      <Article>
        <H3>Database</H3>
        <Div>
          <dl>
            <DT><H4>MySql</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={4}
                trackStyle={{ backgroundColor: '#2196F3', height: 2 }}
                handleStyle={{ backgroundColor: '#2196F3', borderColor: '#2196F3' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>PostgreSQL</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={2}
                trackStyle={{ backgroundColor: '#4CAF50', height: 2 }}
                handleStyle={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>SQLite</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={2}
                trackStyle={{ backgroundColor: '#FFEB3B', height: 2 }}
                handleStyle={{ backgroundColor: '#FFEB3B', borderColor: '#FFEB3B' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
          </dl>
        </Div>
      </Article>
      <Article>
        <H3>Cloud/Virtualization</H3>
        <Div>
          <dl>
            <DT><H4>Docker</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={4}
                trackStyle={{ backgroundColor: '#2196F3', height: 2 }}
                handleStyle={{ backgroundColor: '#2196F3', borderColor: '#2196F3' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>Vagrant</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={4}
                trackStyle={{ backgroundColor: '#4CAF50', height: 2 }}
                handleStyle={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>AWS</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={3}
                trackStyle={{ backgroundColor: '#FFEB3B', height: 2 }}
                handleStyle={{ backgroundColor: '#FFEB3B', borderColor: '#FFEB3B' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>Chef</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={3}
                trackStyle={{ backgroundColor: '#7C4DFF', height: 2 }}
                handleStyle={{ backgroundColor: '#7C4DFF', borderColor: '#7C4DFF' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
          </dl>
        </Div>
      </Article>
      <Article>
        <H3>Other 01</H3>
        <Div>
          <dl>
            <DT><H4>HTML5/CSS3</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={5}
                trackStyle={{ backgroundColor: '#2196F3', height: 2 }}
                handleStyle={{ backgroundColor: '#2196F3', borderColor: '#2196F3' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>Wordpress</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={4}
                trackStyle={{ backgroundColor: '#4CAF50', height: 2 }}
                handleStyle={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>Android</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={3}
                trackStyle={{ backgroundColor: '#FFEB3B', height: 2 }}
                handleStyle={{ backgroundColor: '#FFEB3B', borderColor: '#FFEB3B' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
          </dl>
        </Div>
      </Article>
      <Article>
        <H3>Other 02</H3>
        <Div>
          <dl>
            <DT><H4>Git/Github</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={5}
                trackStyle={{ backgroundColor: '#2196F3', height: 2 }}
                handleStyle={{ backgroundColor: '#2196F3', borderColor: '#2196F3' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>JUnit/PHPUnit/RSpec</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={3}
                trackStyle={{ backgroundColor: '#4CAF50', height: 2 }}
                handleStyle={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
            <DT><H4>Wercker</H4></DT>
            <DD>
              <Slider
                max={5}
                defaultValue={2}
                trackStyle={{ backgroundColor: '#FFEB3B', height: 2 }}
                handleStyle={{ backgroundColor: '#FFEB3B', borderColor: '#FFEB3B' }}
                railStyle={{ backgroundColor: '#bababa', height: 2 }} />
            </DD>
          </dl>
        </Div>
      </Article>
    </Section>
  </Wrapper>

)

export default Skills