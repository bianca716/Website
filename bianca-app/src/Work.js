import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import bianca from './img/bianca.png'
import fileoneprev from './docs/fileoneprev.png'
import filetwoprev from './docs/filetwoprev.png'

export default class Work extends Component {

    render(){
        return(
            <div>
                <br />
                <br />
                <br />
                <h2>My Portfolio</h2>
                <Carousel>
  <Carousel.Item>
    <a style={{color: "inherit", textDecoration: "none"}} href="https://drive.google.com/file/d/100-XEWrmJfNX4yoIMO7DBIIzCrFaD8Vg/view?usp=sharing" target="_blank">
    <img
      className="d-block w-100"
      src={filetwoprev}
      alt="First slide"
    />
    </a>
    <Carousel.Caption>
      <h3 style={{background:'#4d4d4d',borderRadius: 25}}>Bankruptcy: AB1885</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <a style={{color: "inherit", textDecoration: "none"}} href="https://drive.google.com/file/d/1r7B8OaSoddggAaPHTgeCcv_w0aRzOWA6/view?usp=sharing" target="_blank">  
        <img
        className="d-block w-100"
        src={fileoneprev}
        alt="Second slide"
        />
    </a>
    <Carousel.Caption>
    
      <h3 style={{background:'#4d4d4d',borderRadius: 25}}>Bankruptcy: COVID-19</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
<br />
                <br />
                <br />
                <h2>Work Experience</h2>
                <br />
                <br />
                <br />
                <div className="row">             
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h4><b>T.L. Brown Law Firm (Present) </b></h4>
                        <h5>I currently work with T.L. Brown law firm as a copywriter to increase their seo ranking. You can find some of the key articles I’ve written for them in my portfolio section. </h5>
                        <br />
                        <br />
                        <h4><b>Valerie Allen Public Relations (April - August 2020)</b></h4>
                        <h5>As a summer intern at VAPR, I researched relevant media outlets and created media lists for client pitches. I also corresponded with media outlets to gain more client coverage through pitches.</h5>
                        <br />
                        <br />
                        <h4><b>UCLA Student Media (May 2019 - June 2020)</b></h4>
                        <h5>I worked for UCLA student media at the internal managing editor of NOMMO magazine. The only Black magazine on UCLA’s campus. As the internal editor, I oversaw the publication of all print magazines and organized staff events.</h5>
                        <br />
                        <br />
                        <h4><b>BeautyCon (August 2018, 2019)</b></h4>
                        <h5>I worked with beautycon for two conferences where I assisted with consumer research and strategy. I worked with their talent team to facilitate interviews and press coverage on the pink carpet.</h5>
                        <br />
                        <br />
                        <h4><b>Seidlits Lab (April 2018 - June 2019)</b></h4>
                        <h5>In the seidlits lab, I along with another student researched and worked on a project quantifying and optimizing our hydrogel formula</h5>
                    </div>
                </div>
            </div>
   
            
        );
    }

}