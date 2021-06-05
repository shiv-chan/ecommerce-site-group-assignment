import React, { useState, useEffect, useRef } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart } from './CartStyles.jsx';
import useOnClickOutside from './useOnClickOutside';

export default function Cart(props) {
    const $sideBarRef = useRef();
    //handle the onclick outside 
    useOnClickOutside($sideBarRef, () => props.setToggle(false))

    const [itemCount, setItemCount] = useState(props.count)
    
    useEffect(() => {
        setItemCount(props.count)
    })

    return <>
        <Wrapper onClick={() => props.setToggle(true)}>
            <Icon icon={faShoppingCart} />
            <CartCount>{ itemCount }</CartCount>
        </Wrapper>
        
        <CartSideBar ref={$sideBarRef} className={props.isToggle ? "expand" : "shrink"}>
            <sideBarHeader>Shppoing Cart</sideBarHeader>
            <EmptyCart>Empty Cart</EmptyCart>
        </CartSideBar>
    </>
}
