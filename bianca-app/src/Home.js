
import React, { Component } from 'react';
import bianca from './img/bianca.png'

export default class Home extends Component {
  render() { 
    return (
    <div>
    <br />
    <br />
    <br />
    <img height="500" width="350" src={bianca} />
    <div className="row"> 
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <br />
        <h5>Hello! I am a UCLA graduate interested in the field of digital marketing, specifically media planning and strategy. Some of my favorite marketing campaigns include Fenty Skin’s debut, Google’s Black history month and Forvr mood’s fall collection. When I’m not analyzing campaign videos, you can find me reading a book, cooking, learning a new skill or playing with my cat.</h5>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div className="row"> 
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <h5>What I do in my free time:</h5>
        <br />
        <h5>Reading</h5>
        <h5>Podcasts</h5>
        <h5>Branding</h5>
        <h5>Media planning</h5>
        <h5>Fitness</h5>
        <h5>Cooking</h5>
        <h5>Learning HTML/CSS</h5>
        <h5>Copywriting</h5>
        
      </div>
    </div>
    </div>
  
    );
    }
  }