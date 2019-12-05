import React, { Component } from 'react';


export class ImageFilterCaption extends Component {
    render() {
        const imgPath = "/images/" + this.props.imgName + "." +  this.props.ext;
        const classNames = "imgFilterCpt " + this.props.name;
        return (
            <div className={classNames}>
                <img src={imgPath} alt={this.props.name}/>
                <div className="caption">{this.props.caption}</div>
            </div>
        );
    }
}