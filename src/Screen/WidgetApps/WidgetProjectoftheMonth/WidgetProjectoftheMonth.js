import React, { Component } from 'react';
import './WidgetProjectoftheMonth.css'
import CardTitlewithOptions from '../../../Components/CardTitlewithOptions/CardTitlewithOptions';
import CardWidgetProjectofMonthTable from '../../../Components/CardWidgetProjectofMonthTable/CardWidgetProjectofMonthTable';

class WidgetProjectoftheMonth extends Component {
 render(){
    const tableList = [
        {
            id: 0,
            name: 'Elite admin',
            circleName: 'S',
            status: 'sale',
            date: 'April 18, 2017',
            price: '$24',
            priceColor: 'text-info',
            badgeBackground: '#20c997',
            backgroundColor: 'var(--cyan)'
        },
        {
            id: 1,
            name: 'Real Homes',
            src: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg',
            status: 'extended',
            date: 'April 19, 2017',
            price: '$1250',
            priceColor: 'text-info',
            badgeBackground: '#03a9f3'
        },
        {
            id: 2,
            name: 'Ample Admin',
            circleName: 'B',
            status: 'extended',
            date: 'April 19, 2017',
            price: '$1250',
            priceColor: 'text-info',
            badgeBackground: '#03a9f3',
            backgroundColor: 'var(--teal)'
        },
        {
            id: 3,
            name: 'Medical Pro',
            circleName: 'N',
            status: 'tax',
            date: 'April 20, 2017',
            price: '-$24',
            priceColor: 'text-danger',
            badgeBackground: '#E26B78',
            backgroundColor: 'var(--primary)'
        },
        {
            id: 4,
            name: 'Hosting press html',
            circleName: 'M',
            status: 'sale',
            date: 'April 21, 2017',
            price: '$24',
            priceColor: 'text-success',
            badgeBackground: '#20c997',
            backgroundColor: 'var(--yellow)'
        },
        {
            id: 5,
            name: 'Digital Agency PSD',
            circleName: 'N',
            status: 'sale',
            date: 'April 23, 2017',
            price: '-$14',
            priceColor: 'text-danger',
            badgeBackground: '#20c997',
            backgroundColor: 'var(--red)'
        }
    ]
     return(
        <div className="col-lg-6">
        <div className="projectomonth-card">
            <div className="projectomonth-card-body">
                <div className="projectomonth-table">
                    <CardTitlewithOptions />
                </div> 
            </div>
            <div className="projectomonth-table-responsive">
                <table className="projectomonth-table">
                    <thead className="projectomonth-table-head">
                        <tr>
                            <th colSpan="2">Assigned</th>
                            <th>NAME</th>
                            <th>Priority</th>
                            <th>Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tableList.map((item, index) => (
                            <CardWidgetProjectofMonthTable 
                                key={index}
                                src={item.src}
                                name={item.name}
                                circleName={item.circleName}
                                status={item.status}
                                date={item.date}
                                price={item.price}
                                priceColor={item.priceColor}
                                badgeBackground={item.badgeBackground}
                                backgroundColor={item.backgroundColor}
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