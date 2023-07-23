import React from 'react';

import './card.css';
const Card1 =  ({  tabledata  }) => {
    return(
    <div className='card'>
            <div className='order_summary'>
             <table style={{alignContent:"flex-start"}}>
                <thead>
                <tr>
                    <th>Order Summary</th>
                </tr>
                </thead>

            <tbody>
                {tabledata.map((row, index) =>(

                <tr key={index}>
                   <td>{row.column1}</td>
                </tr>
                
                ))}

                
            </tbody>



             </table>
             </div>
   </div>
    );
};
export default Card1;