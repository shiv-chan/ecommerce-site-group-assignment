import React, { useRef } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart, SideBarHeader } from './CartStyles.jsx';
import useOnClickOutside from './useOnClickOutside';

export default function Cart({ isToggle, setToggle }) {
    const $sideBarRef = useRef();
    //handle the onclick outside 
    useOnClickOutside($sideBarRef, () => setToggle(false));

    return <>
        <Wrapper onClick={() => setToggle(true)}>
            <Icon icon={faShoppingCart} />
            <CartCount>0</CartCount>
        </Wrapper>
        
        <CartSideBar ref={$sideBarRef} className={isToggle ? "expand" : "shrink"}>
            <SideBarHeader>Shppoing Cart</SideBarHeader>
            <EmptyCart>Empty Cart</EmptyCart>
        </CartSideBar>
    </>
}
