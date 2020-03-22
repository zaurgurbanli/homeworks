import React, {useState} from 'react';
import { Modal } from './Modal';
import { Button } from './Button';

export const Product = ({item, fav=false, close=false}) => {

    const confirm = () => {
        localStorage.setItem(`added-item${item.id}`, JSON.stringify(item));
        toggleFirstModal();
    }
    const addFav = () => {
        if(!favStatus)
            localStorage.setItem(`fav-item${item.id}`, JSON.stringify(item));
        else
            localStorage.removeItem(`fav-item${item.id}`);
    }
    const [favStatus, setFavStatus] = useState(fav);
    const [f, setF] = useState(false);
    const [c, setC] = useState(false);
    const [firstModalStatus, setFirstModalStatus] = useState(false);


    const toggleFirstModal = () => (setFirstModalStatus(v=> !v));
    const toggleF = () => (setF(v=> !v));
    const toggleC = () => (setC(v=> !v));
    
    const toggleFav = () => {
        setFavStatus(v=> !v)
        addFav();
        if(fav)
            toggleF();
    };
    
    const removeCart = () =>{
        toggleC();
        localStorage.removeItem(`added-item${item.id}`);
        toggleFirstModal();
    }
    
    return (
        <div>
            {!f && !c &&
            <div>
            <div style={{backgroundColor: 'lightgray'}}>
                {close && 
                    <div className="product-close-btn" onClick={toggleFirstModal}>
                        <svg height="16px" viewBox="0 0 329.26933 329" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                    </div>}
            </div>
            <div className="product-container">
                <div className="product">
                    <img src={item.image} alt=""/>
                    <div className="product-inf">
                        <p className="product-name">{item.name}</p>
                        <div onClick={toggleFav} className="star">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={ favStatus ? "#cc3333" : "#000"}><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </div>
                        <p className="product-desc">{item.desc}</p>
                        <div className="product-footer">
                            <p className="product-price">${item.price}</p>
                            <button onClick={toggleFirstModal} className="add-to-cart--btn">add to cart</button>
                        </div>
                    </div>
                </div>
                <div>
                        {firstModalStatus && (
                        <Modal 
                        header = 'Confirmation'
                        closeIcon = {true}
                        text = {close ? 'Do you want to remove this product from cart?' : 'Do you want to add this product to cart?'}
                        close = {toggleFirstModal}
                        actions = {[<Button 
                                        key = {1}
                                        backgroundColor = 'rgba(0,0,0, .3)'
                                        text = {close ? 'Remove' : 'Add'}
                                        onClickk = {close ? removeCart : confirm }/>,
                                    <Button 
                                        key = {2}
                                        backgroundColor = 'rgba(0,0,0, .3)'
                                        text = 'Cancel'
                                        onClickk = {toggleFirstModal}/>]}/>
                        )}
                    </div>
            </div>
            </div>}
        </div>
    )
}
