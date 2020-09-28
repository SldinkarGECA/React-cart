import React from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap"

function CartItem({product, addInCart}) {
    return (
        <Card className="mt-2 mb-1">
            <CardImg src={product.smallImage} top height="250" width="100%"/>
            <CardBody className="text-center">
                <CardTitle>{product.productName.toUpperCase()}</CardTitle>
                <CardText className="secondary">Price : {product.productPrice} Rupees</CardText>
                <Button color="success" onClick={() => addInCart(product)}>Buy Now</Button>
            </CardBody>
        </Card>
    );
}

export default CartItem;