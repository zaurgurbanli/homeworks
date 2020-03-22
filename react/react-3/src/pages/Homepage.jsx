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

 

    return (
        <div className="App">
            <div className  ="container">
                <div className="caption-row">
                    <p className="caption-text">LATEST ARRIVALS IN MUSICA</p>
                </div>
                <div className="products">
                    {data.map((item)=>(
                        <div key={item.id}>
                            <Product item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}