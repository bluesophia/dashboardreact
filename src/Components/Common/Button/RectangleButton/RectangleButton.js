import React, { Component } from 'react';
import './RectangleButton.css'

class RectangleButton extends Component {
    
    static defaultProps = {
        border: "1px solid transparent",
        backgroundColor: "#00c292",
        borderColor: "#00c292",
        borderRadius: "0.25rem",
        color: "white",
        value: "Design Weblayout",
        fontWeight: "500",
        hoverColor: "white",
        backgroundColorHover: "#009c75",
        marginBottom: "0"
    }

    constructor(props){
        super(props);
        this.state = {
            effectOn: false,
            hoverDarker: false
        }
        this.buttonEffect = this.buttonEffect.bind(this);
        this.buttonHoverOff = this.buttonHoverOff.bind(this);
        this.buttonHover = this.buttonHover.bind(this);
        this.setOutsideClick = this.setOutsideClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    // handle outsideclick function when click target
    buttonEffect() {
        if(!this.state.effectOn) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState (prevState => ({
            effectOn: !prevState.effectOn
        }))
    }
    // outline none when outslide click
    // set ref
    setOutsideClick(node) {
        this.OutsideClick = node;
    }
    handleOutsideClick(e){
        if(this.OutsideClick && !this.OutsideClick.contains(e.target)){
            this.setState ({
                effectOn: false
            })
        }
    }

    // button background color darker when hover
    buttonHover() {
        this.setState ({
            hoverDarker: true
        })
    }
    buttonHoverOff() {
        this.setState ({
            hoverDarker: false
        })
    }
    
    render(){

        const { index, color, hoverColor, borderColor,border, backgroundColor, value, fontWeight, 
            marginBottom, marginTop, fontSize, borderRadius, padding, iconsrc, backgroundColorHover, url } = this.props;
        
        return(
            <div ref={this.setOutsideClick}>
                <a key={index} className="rectanglebutton" href={url}
                style={{
                    color: this.state.hoverDarker ? hoverColor : color,
                    borderColor: borderColor,
                    border: border,
                    borderRadius: borderRadius,
                    padding: padding,
                    backgroundColor: this.state.hoverDarker ? backgroundColorHover : backgroundColor,
                    fontWeight:fontWeight,
                    marginBottom:marginBottom,
                    marginTop:marginTop,
                    fontSize:fontSize,
                    boxShadow: this.state.effectOn ? "0 0 0 0.2rem rgba(41, 182, 245, 0.5)" : null,
                    transition: this.state.hoverDarker ? "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out" : null
                }}
                    onClick={this.buttonEffect}
                    onMouseEnter={this.buttonHover}
                    onMouseLeave={this.buttonHoverOff}
                >
                    { iconsrc ? <img src={iconsrc} style={{width: "10px", marginRight: "10px"}}/> : null }
                    <span style={{fontWeight:fontWeight}}>{value}</span>
                </a>
            </div>
        )
    }
}

export default RectangleButton;