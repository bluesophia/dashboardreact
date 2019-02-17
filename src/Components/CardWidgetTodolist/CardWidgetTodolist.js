import React, { Component } from 'react';
import './CardWidgetTodolist.css';
import Badge from '../Common/Badge/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ImgCircle from '../Common/ImgCircle/ImgCircle';

class CardWidgetTodolist extends Component {
    constructor(props){
        super(props);
        this.togglelineThrough = this.togglelineThrough.bind(this)
        this.state = {
            todoDone : false
        }
    }

    togglelineThrough() {
        const currentState = this.state.todoDone;
        this.setState({
            todoDone: !currentState
        })
    }

    render(){

        const { comment, date, imgUrl, imgUrl2, imgUrl3, imgUrl4, backgroundColor, status, color } = this.props;
        
        return(
            <div>
                <ul className="widgettodo-list">
                    <li className="widgettodo-list-group-item">
                        <div className="widgettodo-list-custom-control">
                            <label className="widgettodo-checkbox">
                            <input className="widgettodo-checkbox-input" type="checkbox" checked={this.state.todoDone ? "checked" : null} onClick={this.togglelineThrough}/>
                            <span className={ this.state.todoDone ? "widgettodo-checkbox-checkmark-checked" : "widgettodo-checkbox-checkmark"}>
                            <FontAwesomeIcon icon={faCheck} style={{
                                visibility: this.state.todoDone ? "visible" : "hidden",
                                color: "white",
                                width: "9px",
                                height: "10px",
                                position: "absolute",
                                left: "3px",
                                top: "2px"
                                }}
                            />
                            </span>
                            </label>
                            <label className="widgettodo-control-label" htmlFor="customCheck">
                                <span onClick={this.togglelineThrough} style={{textDecoration: this.state.todoDone ? 'line-through' : 'none'}}>{comment}</span>
                                <div className="widgettodo-control-badege">
                                <Badge 
                                    value={status} 
                                    backgroundColor={backgroundColor}
                                    color={color}
                                />    
                                </div>
                            </label>
                        </div>
                        <div className="widgettodo-item-date">{date}</div>
                        <ul className="widgettodo-assignedto">
                        {
                            imgUrl ?  <li><ImgCircle src={imgUrl} width="30px"/></li> : null
                        }
                        {
                            imgUrl2 ?  <li><ImgCircle src={imgUrl2}  width="30px"/></li> : null
                        }
                        {
                            imgUrl3 ?  <li><ImgCircle src={imgUrl3}  width="30px"/></li> : null
                        }
                        {
                            imgUrl4 ?  <li><ImgCircle src={imgUrl4}  width="30px"/></li> : null
                        }
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
};
export default CardWidgetTodolist;