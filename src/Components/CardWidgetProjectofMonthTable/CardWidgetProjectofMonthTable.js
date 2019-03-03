import React, { Component } from 'react';
import './CardWidgetProjectofMonthTable.css';
import ImgColorCircleStatus from '../Common/ImgColorCircleStatus/ImgColorCircleStatus';
import ImgCircle from '../Common/ImgCircle/ImgCircle';

class CardWidgetProjectofMonthTable extends Component {
    render(){
        const { src,assignedName,  name, job, priority, budget, backgroundColor, circleName } = this.props;
        return(
                <tr className="projectofmonth-table-tr">
                    <td>{ src ? <ImgCircle src={src} width={"50px"}/> : <ImgColorCircleStatus backgroundColor={backgroundColor} circleName={circleName}/> }</td>
                    <td><h6 className="projectofmonth-table-h6">{assignedName}</h6>
                        <small className="projectofmonth-table-small">{job}</small>
                    </td>
                    <td>{name}</td>
                    <td>{priority}</td>
                    <td>${budget}K</td>
                </tr>
        )
    }
}

export default CardWidgetProjectofMonthTable;