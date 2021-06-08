import React, { useState, useEffect, useRef } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart } from './CartStyles.jsx';
import useOnClickOutside from './useOnClickOutside';
import CartItem from './CartItem';

export default function Cart(props) {
    const [itemArr, setItemArr] = useState([]) // To place items which were added to cart

    const $sideBarRef = useRef();
    //handle the onclick outside 
    useOnClickOutside($sideBarRef, () => props.setToggle(false))

    const [itemCount, setItemCount] = useState(props.count)
    
    useEffect(() => {
        setItemCount(props.count)
    })

    useEffect(() => {
        // let objArr = new Array
        // let index;
        // for (let i = 0; i < 20; i++){
        //     index = i + 1;
        //     if (localStorage.getItem(index.toString()) !== '0') {
        //         objArr.push({
        //             id: index,
        //             title: props.data[i].title,
        //             img: props.data[i].image,
        //             price: props.data[i].price,
        //             qty: localStorage.getItem(index)
        //         })
        //     }
        //     console.log(typeof index)
        // }
        // // console.log(objArr)
        // setItemArr(objArr)
    }, [itemCount])
    

    function handleDelete(index) {
        let total = parseInt(localStorage.getItem('totalCount'))
        let itemCount = parseInt(localStorage.getItem(index))
        localStorage.setItem('totalCount', (total-itemCount))
        localStorage.setItem(index, 0)
        setItemArr(itemArr.filter(obj=> obj.id !== index))
    }

    return <>
        <Wrapper onClick={() => props.setToggle(true)}>
            <Icon icon={faShoppingCart} />
            <CartCount>{ itemCount }</CartCount>
        </Wrapper>
        
        <CartSideBar ref={$sideBarRef} className={props.isToggle ? "expand" : "shrink"}>
            {/* <sideBarHeader>Shppoing Cart</sideBarHeader> */}
            {/* <EmptyCart>Empty Cart</EmptyCart> */}
            <h1 style={{color: 'black', fontSize:'25px', textAlign: 'center'}}>Shopping Cart</h1>
            
            {itemArr.map(obj => {
                return <CartItem
                    key={obj.id}
                    title={obj.title}
                    img={obj.img}
                    price={obj.price}
                    qty={obj.qty}
                    onDelete={handleDelete}
                />
            })}

        </CartSideBar>
    </>
}
