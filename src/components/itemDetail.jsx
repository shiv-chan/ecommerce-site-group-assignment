import React, { useState, useEffect } from 'react';

function ItemDetail() {
    return (
        <div className='detailPage'>
            <img src='' alt=''></img>

            <article>
                <h3>Title</h3>
                <p>Description</p>
                <select placeholder='Size...'>
                    <option value="XL"></option>
                    <option value="L"></option>
                    <option value="M"></option>
                    <option value="S"></option>
                    <option value="XS"></option>
                </select>
                <button>Add to cart</button>
            </article>
        </div>
    )
}

export default ItemDetail;