import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function CartItem(props) {
    return (
        <>
            <Card className='d-flex flex-row align-items-center mb-2'>
                <Card.Img
                    // variant='left'
                    src={props.img}
                    style={{
                        width: '50px',
                        height: '50px',
                        marginLeft: '5px'
                    }}
                ></Card.Img>
                <Card.Body className='p-2'>
                    <Card.Title
                        style={{
                            color: 'black',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            fontSize: '25px',
                            width: '200px'
                        }}
                    >{props.title}</Card.Title>
                    <Card.Text
                        style={{
                            color: 'black',
                            fontSize: '20px'
                        }}
                    >${props.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qty: {props.qty}</Card.Text>
            <Button
                variant='danger'
                style={{
                    fontSize: '15px',
                    width: '100px',
                    heigit: '50px',
                    marginLeft: '100px'
                }}
                onClick={()=>props.onDelete(props.id)}
            >Delete</Button>
                </Card.Body>
            </Card>
        </>
    )
}