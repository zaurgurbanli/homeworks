import React, {useState, useEffect} from 'react';
import { Modal } from './Modal';
import { Button } from './Button'

export const Product = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
    const response = await fetch('http://localhost:3000/products');
    const newData = await response.json();
    setData(newData);

  } 

  useEffect(() =>{
    getData();
});

const confirm = () => {
    localStorage.setItem(`item${data.id}`, JSON.stringify(data));
    alert('Product was added to the cart');
}

const [clicked, setClicked] = useState(false);
const [id, setId] = useState();

const toggleFav = () => (setClicked(v=> !v));

const [firstModalStatus, setFirstModalStatus] = useState(false);

const toggleFirstModal = () => (setFirstModalStatus(v=> !v));


    return (
        <div className="product-container">
            {data.map((item)=>(
                <div key={item.id} className="product">
                    <img src={item.image} alt=""/>
                    <div className="product-inf">
                        <p className="product-name">{item.name}</p>
                        <label>
                            <input className='star' type="checkbox" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </label>
                        <p className="product-desc">{item.desc}</p>
                        <div className="product-footer">
                            {id}
                            <p className="product-price">${item.price}</p>
                            <button onClick={toggleFirstModal} className="add-to-cart--btn">add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
            <div>
            {firstModalStatus && (
            <Modal 
            header = 'Confirmation'
            closeIcon = {true}
            text = 'Do you want to add this product to cart?'
            close = {toggleFirstModal}
            actions = {[<Button 
                                key = {1}
                                backgroundColor = 'rgba(0,0,0, .3)'
                                text = 'Add'
                                onClickk = {confirm}/>,
                            <Button 
                                key = {2}
                                backgroundColor = 'rgba(0,0,0, .3)'
                                text = 'Cancel'
                                onClickk = {toggleFirstModal}/>]}/>
            )}
            </div>
        </div>
    )
}
