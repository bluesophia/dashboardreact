import React, { Component } from 'react';
import './CardSalesOverviewTable.css';
import Badge from '../Common/Badge/Badge'

class CardSalesOverviewTable extends Component {
    render(){
        const { id, name, status, date, price, priceColor, badgeBackground } = this.props;
        return(
                <tr className="overview-table-tr">
                    <td>{id}</td>
                    <td>{name}</td>
                    <td><Badge value={status} backgroundColor={badgeBackground}/></td>
                    <td>{date}</td>
                    <td><span className={priceColor}>{price}</span></td>
                </tr>
        )
    }
}

export default CardSalesOverviewTable;