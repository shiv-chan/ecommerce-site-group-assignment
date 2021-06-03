import React, { useState, useRef } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart } from './CartStyles.jsx';
import useOnClickOutside from './useOnClickOutside';

export default function Cart({ isToggle, setToggle }) {
    const [itemCount, setItemCount] = useState(0)

    const $sideBarRef = useRef();
    //handle the onclick outside 
    useOnClickOutside($sideBarRef, () => setToggle(false));

    return <>
        <Wrapper onClick={() => setToggle(true)}>
            <Icon icon={faShoppingCart} />
            <CartCount>{ itemCount }</CartCount>
        </Wrapper>
        
        <CartSideBar ref={$sideBarRef} className={isToggle ? "expand" : "shrink"}>
            <sideBarHeader>Shppoing Cart</sideBarHeader>
            <EmptyCart>Empty Cart</EmptyCart>
        </CartSideBar>
    </>
}
