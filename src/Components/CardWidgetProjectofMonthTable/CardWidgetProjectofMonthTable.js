import React, { Component } from 'react';
import './CardWidgetProjectofMonthTable.css';
import Badge from '../Common/Badge/Badge'
import ImgColorCircleStatus from '../Common/ImgColorCircleStatus/ImgColorCircleStatus';
import ImgCircle from '../Common/ImgCircle/ImgCircle';

class CardWidgetProjectofMonthTable extends Component {
    render(){
        const { src, name, status, date, price, priceColor, badgeBackground, backgroundColor, circleName } = this.props;
        return(
                <tr className="overview-table-tr">
                    <td>{ src ? <ImgCircle src={src} width={"50px"}/> : <ImgColorCircleStatus backgroundColor={backgroundColor} circleName={circleName}/> }</td>
                    <td>{name}</td>
                    <td><Badge value={status} backgroundColor={badgeBackground}/></td>
                    <td>{date}</td>
                    <td><span className={priceColor}>{price}</span></td>
                </tr>
        )
    }
}

export default CardWidgetProjectofMonthTable;