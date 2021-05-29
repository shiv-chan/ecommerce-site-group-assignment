import React, { useState, useEffect } from 'react';
import { Button, Image, Container, Row, Col, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail(props) {

    const handleAddToCart = () => {
        
    }

    return (
        <div className='detailPage'>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Image style={{width: "200px"}} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" rounded></Image>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Image style={{width: "100px"}} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" rounded></Image>
                            </Col>
                            <Col>
                                <Image style={{width: "100px"}} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" rounded></Image>
                            </Col>
                            <Col>
                                <Image style={{width: "100px"}} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" rounded></Image>
                            </Col>
                            
                        </Row>
                    
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Product Title</Card.Title>
                                <Card.Subtitle>Category</Card.Subtitle>
                                <Card.Text>Procuct Description</Card.Text>

                            </Card.Body>
                        </Card>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group controlId='size'>
                                        <Form.Label>Size: </Form.Label>
                                        <Form.Control as='select' placeholder='Select a size....'>
                                            <option value='xs'>XS</option>
                                            <option value='s'>S</option>
                                            <option value='m'>M</option>
                                            <option value='l'>L</option>
                                            <option value='xl'>XL</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Button onClick={()=> handleAddToCart()}>Add to cart</Button>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default ItemDetail;