import React from 'react';
import {Product} from '../components/Product';


export const Favourites = () => {
    let favProduct=[];
    const getData = () => {
        const newData = {...localStorage};
        for(let key in newData){
            if(`${key}`.includes("fav"))
                favProduct.push(JSON.parse(localStorage.getItem(key)));
        }        
    } 
    getData();
    
    return (
        <div className="products">
            {favProduct.map((item)=>(
                <div className="product" key={item.id}>
                    <Product item={item} fav={true} />
                </div>
            ))}
        </div>
    )
}