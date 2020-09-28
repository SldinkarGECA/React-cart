import React from 'react';
import Loader from "react-loader-spinner"
import Container from "reactstrap/es/Container";

function Loaders(props) {
    return (
        <div style={{
            width: "100px", height: "100px", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, margin: "auto"
        }}>
            <Container className="text-center">
                <Loader
                    type="TailSpin"
                    width="100px"
                    height="100px"
                    color="green"
                    timeout={3000}
                />
            </Container>
        </div>
    );
}

export default Loaders;