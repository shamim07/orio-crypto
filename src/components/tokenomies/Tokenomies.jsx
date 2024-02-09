
import  { Component } from "react";
import Chart from 'react-apexcharts'

import './tokenomies.css'
class Tokenomies extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          options: {chart: {
            width: 410,
          },
          colors: ['#8A75E2', '#E275CA', '#75C1E2', '#E7C369', '#E28975', '#E06262', '#DEE062', '#8BE275'],
          labels: ['PUBLIC SALE ', 'PRIVATE SALE', 'MANAGEMENT FEE', 'TEAM', 'ORION CRYPTO AMC', 'LIQUIDITY', 'MARKETING', 'DEVELOPMENT'],
          fill: {
            opacity: 8
          },  states: {
            active: {
              filter: {
                type: 'none'
              }
            },
            hover: {
              filter: {
                type: 'none'
              }
            }
          },  stroke: {
            show: false
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
              donut:{
                  labels:{
                      show:true,
                      total: {
                          show: true,
                          showAlways: true,
                          label: 'TOTAL',
                          fontSize: '16px',
                          fontFamily: 'Urbanist", sans-serif',
                          fontWeight: 'bold',
                          color: '#ADA9B2',                            
                         
                        }
                  }
              }
            }
          }, 
        },
          series: [20, 5, 10, 10, 5, 10, 20, 20],
        
         
          labels: ['PUBLIC SALE ', 'PRIVATE SALE', 'MANAGEMENT FEE', 'TEAM', 'ORION CRYPTO AMC', 'LIQUIDITY', 'MARKETING', 'DEVELOPMENT'],
        }
      }
      render() {
  return ( <div className="tokenomies"> <div className="container">
    <div className="tokeno-heading"><h2>Tokenomics</h2></div>
    <div className="donut-left-right">  <div className="donut">
  <Chart options={this.state.options} series={this.state.series} type="donut" width="600" />

</div>{/**""donut" */}</div>
   
</div>{/**"container" */}
</div>
   
  
  )
}
}

export default Tokenomies
