import React,{useState} from 'react';
import './card.css';
import decrement from './decrement';
import increment from './increment';
const Card =  ({  tabledata  }) => {
    const [data,setData]=useState(tabledata);
   

    return(
    <div className='card'>
            
             <table style={{alignContent:"flex-start"}}>
                <thead>
                <tr>
                    <th>Product Id</th>
                    <th> Product Title</th>
                    <th style={{paddingLeft:'80px'}}>Image</th>
                    <th>Quantity</th>
                    <th>Product Price</th>
                </tr>
                </thead>

            <tbody>
                {data.map((row, index) =>(

                <tr key={index}>
                   <td>{row.column1}</td>
                   <td>{row.column2}</td>
                   <td style={{width:'200px'}}><img src={row.column3} className='sample'></img></td>
                   <td style={{paddingLeft:"50px"}}><button id='dec' onClick={function dec(){data[index].column4--;setData([...data])}}>-</button><span id="value">{row.column4}</span><button id='increase' onClick={function inc(){data[index].column4++;setData([...data])}}>+</button></td>
                   
                   <td>{row.column5}</td>
                </tr>
                
 

                ))}
                
                
            </tbody>



             </table>
   </div>
    );
};
export default Card;