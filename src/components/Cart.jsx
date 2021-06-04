import React, { useState, useRef } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart } from './CartStyles.jsx';
import useOnClickOutside from './useOnClickOutside';

export default function Cart(props) {
    const [itemCount, setItemCount] = useState(0)

    const $sideBarRef = useRef();
    //handle the onclick outside 
    useOnClickOutside($sideBarRef, () => props.setToggle(false));

    return <>
        <Wrapper onClick={() => props.setToggle(true)}>
            <Icon icon={faShoppingCart} />
            <CartCount>{ props.count }</CartCount>
        </Wrapper>
        
        <CartSideBar ref={$sideBarRef} className={props.isToggle ? "expand" : "shrink"}>
            <sideBarHeader>Shppoing Cart</sideBarHeader>
            <EmptyCart>Empty Cart</EmptyCart>
        </CartSideBar>
    </>
}
