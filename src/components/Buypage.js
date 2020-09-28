import React, {useEffect, useState} from "react";
import Axios from "axios";
import {commerce, company, random} from "faker";
import {Col, Container, Row} from "reactstrap";
import CartItem from "./CartItem";

const secretKey = "563492ad6f917000010000013673590530dc40a8ab763e2b81dfd3d4";

const url = "https://api.pexels.com/v1/search?query=laptops&per_page=6&page=1";

const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([]);
    const fetchPhotos = async () => {
        const {data} = await Axios.get(url, {
            headers: {
                Authorization: secretKey
            }
        });

        const {photos} = data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: company.companyName(),
            productPrice: commerce.price(),
            id: random.uuid()
        }));
        setProduct(allProduct);

    }

    useEffect(() => {
        fetchPhotos();
    }, []);
    return (
        <Container fluid>
            <h1 className="text-success text-center">
                BUY PAGE
            </h1>
            <Row>
                {
                    product.map(product => (
                        <Col md={4} key={product.id}>
                            <CartItem product={product} addInCart={addInCart}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
export default BuyPage;