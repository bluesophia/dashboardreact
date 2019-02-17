import React, { Component } from 'react';
import './WidgetProjectoftheMonth.css'
import CardTitlewithOptions from '../../../Components/CardTitlewithOptions/CardTitlewithOptions';
import CardSalesOverviewReportprice from '../../../Components/CardSalesOverviewReportprice/CardSalesOverviewReportprice';
import CardSalesOverviewTable from '../../../Components/CardSalesOverviewTable/CardSalesOverviewTable';

class WidgetProjectoftheMonth extends Component {
 render(){
    const tableList = [
        {
            id: 0,
            name: 'Elite admin',
            status: 'sale',
            date: 'April 18, 2017',
            price: '$24',
            priceColor: 'text-info',
            badgeBackground: '#20c997'
        },
        {
            id: 1,
            name: 'Real Homes',
            status: 'extended',
            date: 'April 19, 2017',
            price: '$1250',
            priceColor: 'text-info',
            badgeBackground: '#03a9f3'
        },
        {
            id: 2,
            name: 'Ample Admin',
            status: 'extended',
            date: 'April 19, 2017',
            price: '$1250',
            priceColor: 'text-info',
            badgeBackground: '#03a9f3'
        },
        {
            id: 3,
            name: 'Medical Pro',
            status: 'tax',
            date: 'April 20, 2017',
            price: '-$24',
            priceColor: 'text-danger',
            badgeBackground: '#E26B78'
        },
        {
            id: 4,
            name: 'Hosting press html',
            status: 'sale',
            date: 'April 21, 2017',
            price: '$24',
            priceColor: 'text-success',
            badgeBackground: '#20c997'
        },
        {
            id: 5,
            name: 'Digital Agency PSD',
            status: 'sale',
            date: 'April 23, 2017',
            price: '-$14',
            priceColor: 'text-danger',
            badgeBackground: '#20c997'
        },
        {
            id: 6,
            name: 'Helping Hands',
            status: 'member',
            date: 'April 22, 2017',
            price: '$64',
            priceColor: 'text-success',
            badgeBackground: '#fec107'
        },
        {
            id: 7,
            name: 'Ample Admin',
            status: 'extended',
            date: 'April 19, 2017',
            price: '$1250',
            priceColor: 'text-info',
            badgeBackground: '#03a9f3'
        }

    ]
     return(
        <div className="col-lg-6">
        <div className="salestable-card">
            <div className="salestable-card-body">
                <div className="salestable-table">
                    <CardTitlewithOptions />
                </div> 
            </div>
            <CardSalesOverviewReportprice />
            <div className="overview-table-responsive">
                <table className="overview-table">
                    <thead className="overview-table-head">
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>STATUS</th>
                            <th>DATE</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tableList.map((item, index) => (
                            <CardSalesOverviewTable 
                                key={index}
                                id={item.id + 1}
                                name={item.name}
                                status={item.status}
                                date={item.date}
                                price={item.price}
                                priceColor={item.priceColor}
                                badgeBackground={item.badgeBackground}
                            />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        )
    }   
}

export default WidgetProjectoftheMonth;