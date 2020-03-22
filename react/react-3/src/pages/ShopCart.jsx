import React, {useState} from 'react';
import {Product} from '../components/Product';
import {Modal} from '../components/Modal';
import {Button} from '../components/Button';

export const ShopCart = () => {

    let addedProduct=[];
    const getData = () => {
        const newData = {...localStorage};
        for(let key in newData){
            if(`${key}`.includes("added"))
                addedProduct.push(JSON.parse(localStorage.getItem(key)));
        }        
    } 
    getData();
    
    return (
        <div className="products">
            {addedProduct.map((item)=>(
                <div className="product">
                    <div key={item.id}>
                        <Product item={item} close={true} />
                    </div>
                </div>
            ))}
        </div>
    )
}