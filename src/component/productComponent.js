import React, {Component} from "react";
import {Col, Container, Row, Image} from "react-bootstrap";
import ProductDetailsComponent from "./productDetailsComponent";
import ProductImage from '../media/product-image.JPG'

class ProductComponent extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="align-items-center">
                        <Image fluid className="align-items-center" alt="product-image" src={ProductImage}/>
                    </Col>
                    <Col><ProductDetailsComponent/></Col>
                </Row>
                <hr/>
                <Row>
                    <Col className="align-items-end">
                        <p>
                            MRP &#8377; 239900.00
                            <p>(Incl. of all taxes)</p>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProductComponent;