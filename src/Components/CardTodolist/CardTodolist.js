import React, { Component } from 'react';
import './CardTodolist.css';
import Badge from '../Common/Badge/Badge'

class CardTodolist extends Component {
    render(){

        const { comment, date, imgUrl, imgUrl2, imgUrl3, imgUrl4, backgroundColor, status, value, color } = this.props;
        return(
            <div>
                <ul className="todo-list">
                    <li className="todo-list-group-item">
                        <div className="todo-list-custom-control">
                            <input type="checkbox" className="todo-list-custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">
                                <span>{comment}</span>
                                <Badge 
                                    value={status} 
                                    backgroundColor={backgroundColor}
                                    color={color}
                                />    
                            </label>
                        </div>
                        <div className="item-date">{date}</div>
                        <ul className="assignedto">
                            <li><img src={imgUrl} alt={imgUrl}/></li>
                            <li><img src={imgUrl2} alt={imgUrl2}/></li>
                            <li><img src={imgUrl3} alt={imgUrl3}/></li>
                            <li><img src={imgUrl4} alt={imgUrl4}/></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
};
export default CardTodolist;