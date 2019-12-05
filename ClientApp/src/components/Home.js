import React, { Component } from 'react';
import {ImageFilterCaption} from './ImageFilterCaption';

import "../css/home.css";

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="home">    
         <ImageFilterCaption 
                name="environment"
                imgName="glacier"
                ext="jpg"
                caption="Environnement"/>
          <ImageFilterCaption 
                name="mountain"
                imgName="glacier"
                ext="jpg"
                caption="Montagne"/>
          <ImageFilterCaption 
                name="health"
                imgName="glacier"
                ext="jpg"
                caption="Santé"/>
          <ImageFilterCaption 
                name="life"
                imgName="glacier"
                ext="jpg"
                caption="Vie"/>
          <ImageFilterCaption 
                name="quality"
                imgName="glacier"
                ext="jpg"
                caption="Qualité"/>
      </div>
    );
  }
}
