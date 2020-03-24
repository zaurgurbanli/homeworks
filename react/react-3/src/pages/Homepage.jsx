import React, {useState, useEffect} from 'react';
import { Product } from '../components/Product';


export const Homepage = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:3000/products');
        const newData = await response.json();
        setData(newData);
    } 

    useEffect(() =>{
        getData();
    },[]);

    const checkItem = (id) => {
        let favProduct=[];
        const newData = {...localStorage};
        for(let key in newData){
            if(`${key}`.includes("fav")){
                favProduct.push(JSON.parse(localStorage.getItem(key)));
            }
        }
        return  favProduct.find((e)=>(e.id===id ? true : false))
      
    }
   
    console.log(checkItem());
    
    return (
        <div className="App">
            <div className  ="container">
                <div className="caption-row">
                    <p className="caption-text">LATEST ARRIVALS IN MUSICA</p>
                </div>
                <div className="products">
                    {data.map((item)=>(
                        checkItem(item.id)? 
                        <div key={item.id}>
                            <Product item={item} hfav={true} />
                        </div>
                        :
                        <div key={item.id}>
                            <Product item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}