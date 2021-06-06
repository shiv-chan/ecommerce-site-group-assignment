import React, { useState, useRef } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart, SideBarHeader, CardBody } from './CartStyles.jsx';
import useOnClickOutside from './useOnClickOutside';

export default function Cart({ isToggle, setToggle, cart }) {
    const [itemCount, setItemCount] = useState(0)

    const $sideBarRef = useRef();
    //handle the onclick outside 
    useOnClickOutside($sideBarRef, () => setToggle(false));

    return <>
        <Wrapper onClick={() => setToggle(true)}>
            <Icon icon={faShoppingCart} />
            <CartCount>{ cart.length }</CartCount>
        </Wrapper>
        
        <CartSideBar ref={$sideBarRef} className={isToggle ? "expand" : "shrink"}>
            <SideBarHeader>Shppoing Cart</SideBarHeader>
                {/* <EmptyCart>Empty Cart</EmptyCart> */}

            {
                cart.map((o,i)=>{
                    return (
                        <CardBody key={i}>
                            {o.title}
                            </CardBody>
                    )
                })
            }
        </CartSideBar>
    </>
}
