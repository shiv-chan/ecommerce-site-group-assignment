import React, { useState, useEffect, useRef } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart } from './CartStyles.jsx';
import useOnClickOutside from './useOnClickOutside';
import CartItem from './CartItem';

export default function Cart(props) {
    const $sideBarRef = useRef();
    //handle the onclick outside 
    useOnClickOutside($sideBarRef, () => props.setToggle(false))
    
    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem('allData')))
    const [itemArr, setItemArr] = useState([]);
    const [itemCount, setItemCount] = useState()
    
    useEffect(() => {
        setItemCount(props.count)
    })

    useEffect(() => {
        // const allData = JSON.parse(localStorage.getItem('allData'))
        // const cartArr = JSON.parse(localStorage.getItem('cartArr')).filter(item => item.count > 0)
        // let arr = new Array;
        // cartArr.map(item => {
        //     // arr.push(allData.filter(obj => obj.id === item.id)[0])
        // })
        
        // console.log(cartArr)
    }, [])


    useEffect(() => {
        let arr = new Array;
        for (let i = 1; i <= allData.length; i++){
            if (localStorage.getItem(i.toString()) != 0) {
                arr.push({
                    id: i.toString(),
                    title: allData[i-1].title,
                    img: allData[i-1].image,
                    price: allData[i-1].price,
                    qty: localStorage.getItem(i.toString())
                })
            }
            console.log(typeof index)
        }
        // console.log(objArr)
        setItemArr(arr)
    }, [itemCount])
    

    function handleDelete(index) {
        let total = parseInt(localStorage.getItem('totalCount'))
        let itemCount = parseInt(localStorage.getItem(index))
        localStorage.setItem('totalCount', (total-itemCount))
        localStorage.setItem(index, 0)
        setItemArr(itemArr.filter(obj => obj.id != index))
        
        console.log(index)
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
                    id={obj.id}
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
