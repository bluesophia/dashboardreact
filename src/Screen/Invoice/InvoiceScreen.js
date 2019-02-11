import React, { Component } from 'react';
import CardInvoice  from '../../Components/CardInvoice/CardInvoice';
import './InvoiceScreen.css'

class InvoiceScreen extends Component {
    render(){
        return(
            <div>
                <div><CardInvoice /></div>
            </div>
        )
    }
}

export default InvoiceScreen;