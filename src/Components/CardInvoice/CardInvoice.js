import React, { Component } from 'react';
import './CardInvoice.css'
import CardSalesOverviewOptions from '../CardSalesOverviewOptions/CardSalesOverviewOptions';
import CardSalesOverviewReportprice from '../CardSalesOverviewReportprice/CardSalesOverviewReportprice';
import CardInvoiceTable from '../CardInvoiceTable/CardInvoiceTable';

class CardInvoice extends Component {
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
     return(
        <div className="row col-lg-6">
                <div className="invoice-card">
                    <div className="invoice-card-body">
                        <div className="invoice-card-body-printableArea">
                        {/* header */}
                        <h3><b>INVOICE</b><span> #5669626</span></h3>
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
                            {/* <div class="pull-right text-right">
                                <address>
                                    <h3>To,</h3>
                                    <h4 class="font-bold">Gaala &amp; Sons,</h4>
                                    <p class="text-muted m-l-30">E 104, Dharti-2,
                                        <br> Nr' Viswakarma Temple,
                                        <br> Talaja Road,
                                        <br> Bhavnagar - 364002</p>
                                    <p class="m-t-30"><b>Invoice Date :</b> <i class="fa fa-calendar"></i> 23rd Jan 2017</p>
                                    <p><b>Due Date :</b> <i class="fa fa-calendar"></i> 25th Jan 2017</p>
                                </address>
                            </div> */}
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
                                        key={tableList.id}
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
                    </div>
                    </div>        
            </div>            
        </div>
        )
    }   
}

export default CardInvoice;