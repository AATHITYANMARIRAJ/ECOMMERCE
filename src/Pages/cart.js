import React from "react";
import Header from "../Components/header";
import Card from './card';
import Card1 from './card1';
import './card.css';

import Hair from  './hairband.jpeg';
import Footer from "../Components/footer";


export default function Cart(){
    const cardData = [
        {
           
            tabledata: [
                { column1: "1", column2: "HAIRBAND",column3:"https://i.pinimg.com/originals/91/7e/63/917e63a8bee8a2ae5b9dfbb7a94dfb7e.jpg" ,column4:"1" ,column5:"6"},
                { column1: "2", column2: "Laptop",column3: "https://i.pinimg.com/originals/a8/8f/a2/a88fa28a2d63bdb7cfbc9cc1dc98bce6.jpg", column4:"1",column5:"8"},
            ],
        },
       
    ];
    const cardData1 = [
        {
           
            tabledata: [
                { column1: "Subtotal:" },
                {column1: "Total:"}
                
            ],
        },
       
    ];
    return(
        <div className="cart">
            <Header />
            <div className="card-container" >
            {cardData.map((data) => (
          <Card
            
            
            tabledata={data.tabledata}
          />
        ))}
                
            
            {cardData1.map((data) => (
          <Card1
            
            tabledata={data.tabledata}
            className='order_summary'
          />
        ))}
                
            </div>    
           
        </div>
    )
}




