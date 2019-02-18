import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CircleButton extends Component {
    // default
    static defaultProps = {
        width: '40px',
        height: '40px',
        border: "none",
        backgroundColor: "#20c997",
        fontSize:"20px",
        color: "white",
        borderRadius: "100%"
    }

    constructor(props){
        super(props);
        this.state = {
            effectOn: false,
            hoverDarker: false
        }
        this.circleEffect = this.circleEffect.bind(this);
        this.circleHoverOff = this.circleHoverOff.bind(this);
        this.circleHover = this.circleHover.bind(this);
        this.setOutsideClick = this.setOutsideClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    // handle outsideclick function when click target
    circleEffect() {
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
    circleHover() {
        this.setState ({
            hoverDarker: true
        })
    }
    circleHoverOff() {
        this.setState ({
            hoverDarker: false
        })
    }
    
    render(){

        const { index, width, height,border, borderRadius, fontSize, backgroundColor, color, value, icon, padding, marginBottom, fontWeight } = this.props;
        
        return(
            <div ref={this.setOutsideClick}>
                <button key={index} 
                    style={{
                    borderRadius: borderRadius, 
                    border: border,
                    fontSize: fontSize,
                    width: width,
                    height: height,
                    backgroundColor: this.state.hoverDarker ? "#0286c1" : backgroundColor,
                    color: color,
                    padding: padding,
                    marginBottom:marginBottom,
                    fontWeight:fontWeight,
                    boxShadow: this.state.effectOn ? "0 0 0 0.2rem rgba(41, 182, 245, 0.5)" : null,
                    transition: this.state.hoverDarker ? "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out" : null
                    }}
                    type='submit'
                    onClick={this.circleEffect}
                    onMouseEnter={this.circleHover}
                    onMouseLeave={this.circleHoverOff}
                    >
                    <FontAwesomeIcon icon={icon}/>
                    <span>{value}</span>
                </button>
            </div>
        )
    }
}
export default CircleButton;