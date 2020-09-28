import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import {toast, ToastContainer} from "react-toastify";
import BuyPage from "./components/Buypage";
import {Col, Container, Row} from "reactstrap";
import Cart from "./components/Cart";
import Loaders from "./components/Loaders";

function App() {
    const [cartItem, setCartItem] = useState([]);
    const [isLoading, setLoading] = useState(1)

    const addInCart = item => {
        const isAlreadyAdded = cartItem.findIndex(function (array) {
            return array.id === item.id;
        });
        if (isAlreadyAdded !== -1) {
            toast("Item is already added in the Cart!", {type: "error"});
        } else {
            setCartItem([...cartItem, item]);
        }
    }

    const removeItem = itemToRemove => {
        setCartItem(cartItem.filter(item => item.id !== itemToRemove.id));
    }

    const buyNow = () => {
        setCartItem([]);
        toast("Purchase Complete", {type: "success"});
    }

    const Loader = async () => {
        const Sleep = (milliseconds) => {
            return new Promise((resolve) => setTimeout(resolve, milliseconds));
        };
        await Sleep(3000)
        setLoading(0)
    }

    useEffect(() => {
        Loader();
    }, []);

    if (isLoading === 1) {
        return (<Loaders/>)
    }
    return (
        <Container fluid>
            <ToastContainer/>
            <Row>
                <Col className="col-md-8">
                    <BuyPage addInCart={addInCart}/>
                </Col>
                <Col className="col-md-4">
                    <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
