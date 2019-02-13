import React, { Component } from 'react';
import CardRegularPrice  from '../../../Components/CardRegularPrice/CardRegularPrice';
import './PopularPrice.css';
class PopularPrice extends Component {
    static defaultProps = {
            id:0,
            title:'silver',
            price:'24',
            icon1:'user',
            icon2:'screen-smartphone',
            icon3:'drawer',
            icon4:'refresh',
            text1:'3 Members',
            text2:'Single Device',
            text3:'50GB Storage',
            text4:'Monthly Backups',
        }
    
    render(){
        const { title, price, icon1, icon2, icon3, icon4, text1, text2, text3, text4  } = this.props;
        return(
                <div>
                    <CardRegularPrice 
                        title={title}
                        icon1={icon1}
                        icon2={icon2}
                        icon3={icon3}
                        icon4={icon4}
                        text1={text1}
                        text2={text2}
                        text3={text3}
                        text4={text4}
                        price={price}
                    />
                </div>
        )
    }
}

export default PopularPrice;