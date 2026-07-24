import React from 'react';
import { holdings } from '../data/data';


const Holdings = () => {
  return (
    <>
     <h3 className="title">Holdings ({holdings.length})</h3>
     <div className="order-table">
      <table>
        <tr>
          <th>Instrument</th>
          <th>Quantity</th>
          <th>Average Price</th>
          <th>LTP</th>
          <th>Current Price</th>
          <th>P&L</th>
          <th>Net chg.</th>
          <th>Day chg.</th>
        </tr>
      </table>
     </div>
     <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      {/* <VerticalGraph data={data} /> */}
  
    </>
  );
};
export default Holdings;