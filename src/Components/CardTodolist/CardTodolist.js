import React, { Component } from 'react';
import './CardTodolist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Badge from '../Common/Badge/Badge'
import ImgCircle from '../Common/ImgCircle/ImgCircle'

class CardTodolist extends Component {
    constructor(props){
        super(props);
        this.togglelineThrough = this.togglelineThrough.bind(this)
        this.state = {
            todoDone : false
        }
    }

    // linethrough function
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
                <ul className="todo-list">
                    <li className="todo-list-group-item">
                        <div className="todo-list-custom-control">
                            <input type="checkbox" className="todo-checkbox-input" id="customCheck" checked={this.state.todoDone ? "checked" : null} onClick={this.togglelineThrough}/>
                            <label className="custom-control-label" htmlFor="customCheck">
                            <span className={ this.state.todoDone ? "todo-checkbox-checkmark-checked" : "todo-checkbox-checkmark"}>
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
                            <label className="custom-control-label">
                                <span onClick={this.togglelineThrough} style={{textDecoration: this.state.todoDone ? 'line-through' : 'none'}}>{comment}</span>
                                <Badge 
                                    value={status} 
                                    backgroundColor={backgroundColor}
                                    color={color}
                                />    
                            </label>
                        </div>
                        <div className="item-date">{date}</div>
                        <ul className="assignedto">
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
export default CardTodolist;