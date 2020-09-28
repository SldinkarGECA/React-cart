import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap"

const Cart = ({cartItem, removeItem, buyNow}) => {
    let total = 0;
    cartItem.forEach(item => {
        total = parseFloat(total) + parseFloat(item.productPrice);
    })
    return (
        <Container fluid>
            <h1 className="text-success text-center">CART</h1>
            <ListGroup>
                {
                    cartItem.map(item => (
                        <ListGroupItem key={item.id}>
                            <Row>
                                <Col className="col-md-4 col-sm-4">
                                    <img height="80" src={item.tinyImage} alt={item.productName}/>
                                </Col>
                                <Col className="text-center col-md-8 col-sm-8">
                                    <h5 className="text-primary">{item.productName}</h5>
                                    <h6>Price: {item.productPrice} Rupees</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                    <Button color="danger" className="center" onClick={() => removeItem(item)}>Remove
                                        Item</Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>Total</CardHeader>
                        <CardBody>Total price: {total}</CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>Pay</Button>
                        </CardFooter>
                    </Card>
                ) : (<h1 className="text-warning text-center">Cart is empty</h1>)
            }
        </Container>
    );
};

export default Cart;