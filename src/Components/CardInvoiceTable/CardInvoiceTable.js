import React, { Component } from 'react';
import './CardInvoiceTable.css';

class CardInvoiceTable extends Component {
    render(){
        const { id, name, quantity, cost, total } = this.props;
        return(
                <tr className="invoice-table-tr">
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>${cost}</td>
                    <td>${total}</td>
                </tr>
        )
    }
}

export default CardInvoiceTable;