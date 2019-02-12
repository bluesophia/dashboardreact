import React, { Component } from 'react';
import './CardInvoice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPrint } from '@fortawesome/free-solid-svg-icons';
import CardInvoiceTable from '../CardInvoiceTable/CardInvoiceTable';
import { RectangleButton } from '../Common/Button/ButtonExports';

class CardInvoice extends Component {
    static defaultProps = {
        backgroundColor: "#03a9f3",
        invoiceNumber: '5669626',
        invoiceDate: '23rd Jan 2017',
        dueDate: '25th Jan 2017',
        to:"Gaala & Sons,"
    }
 render(){
    const tableList = [
        {
            id: 0,
            name: 'Milk Powder',
            quantity: '2',
            cost: '24',
            total: '48'
        },
        {
            id: 1,
            name: 'Air Conditioner',
            quantity: '3',
            cost: '500',
            total: '1500'
        },
        {
            id: 2,
            name: 'RC Cars',
            quantity: '20',
            cost: '600',
            total: '12000'
        },
        {
            id: 3,
            name: 'Down Coat',
            quantity: '60',
            cost: '5',
            total: '300'
        },
    ]
    const { invoiceNumber, invoiceDate, dueDate, to } = this.props;
     return(
        <div className="row col-lg-6">
                <div className="invoice-card">
                    <div className="invoice-card-body">
                        <div className="invoice-card-body-printableArea">
                            {/* header-left */}
                            <h3><b>INVOICE</b><span>#{invoiceNumber}</span></h3>
                            <hr className="invoice-card-body-hr"/>
                                <div className="invoice-card-body-lefttext">
                                    <address className="invoice-card-address">
                                        <h3> &nbsp;<b className="invoice-card-title">Material Pro Admin</b></h3>
                                        <p className="invoice-card-address-p">E 104, Dharti-2,
                                            <br /> Nr' Viswakarma Temple,
                                            <br /> Talaja Road,
                                            <br /> Bhavnagar - 364002</p>
                                    </address>
                                </div>
                            {/* header-right */}
                            <div className="invoice-card-body-righttext">
                                <address className="invoice-card-address">
                                    <h3 className="invoice-card-body-righttext-h3">To,</h3>
                                    <h4>{to}</h4>
                                    <p className="invoice-card-address-right-p">E 104, Dharti-2,
                                        <br /> Nr' Viswakarma Temple,
                                        <br /> Talaja Road,
                                        <br /> Bhavnagar - 364002</p>
                                    <p className="invoice-card-address-right-bottom-p">
                                        <b className="invoice-card-body-righttext-b">Invoice Date :</b> 
                                        <FontAwesomeIcon icon={faCalendar} style={FontAwesomeIconStyle}/>
                                        {invoiceDate}
                                    </p>
                                    <p>
                                        <b className="invoice-card-body-righttext-b">Due Date :</b> 
                                        <FontAwesomeIcon icon={faCalendar} style={FontAwesomeIconStyle}/>{dueDate}
                                    </p>
                                </address>
                            </div>
                            {/* table */}
                            <div className="overview-table-responsive">
                                <table className="overview-table">
                                    <thead className="overview-table-head">
                                        <tr>
                                            <th>#</th>
                                            <th>Description</th>
                                            <th>Quantity</th>
                                            <th>Unit Cost</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        tableList.map((item, index) => (
                                            <CardInvoiceTable 
                                                key={index}
                                                id={item.id + 1}
                                                name={item.name}
                                                quantity={item.quantity}
                                                cost={item.cost}
                                                total={item.total}
                                            />
                                        ))
                                    }
                                    </tbody>
                                </table>
                             </div>
                             {/* footer */}
                             <div className="invoice-card-body-footer-righttext">
                                <div className="invoice-card-body-footer-righttext-amount">
                                    <p>Sub - Total amount: $13,848</p>
                                    <p>vat (10%) : $138 </p>
                                    <hr className="invoice-card-body-footer-hr"/>
                                    <h3 className="invoice-card-body-footer-righttext-h3"><b>Total :</b> $13,986</h3>
                                </div>
                                <div className="clearfix"></div>
                                <hr className="invoice-card-body-footer-hr"/>
                                {/* footer-print */}
                                <div className="invoice-card-body-footer-print">
                                    <RectangleButton 
                                        value={"Proceed to payment"}
                                        backgroundColor={"var(--red)"}
                                        // onclick={handleSubmit}
                                    />
                                    <div className="invoice-card-body-footer-print-btn">
                                        <FontAwesomeIcon icon={faPrint} />
                                        <RectangleButton 
                                        value={"Print"}
                                        backgroundColor={"white"}
                                        border={"none"}
                                        borderColor={"none"}
                                        color={"var(--gray-extra-dartk)"}
                                        fontWeight={"300"}
                                        marginBottom={"0"}
                                        // onclick={handleSubmit}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>        
            </div>            
        </div>
        )
    }   
}
// FontAwesomeIconStyle
const FontAwesomeIconStyle = {
    marginLeft: '5px',  
    marginRight: '5px'
}

export default CardInvoice;