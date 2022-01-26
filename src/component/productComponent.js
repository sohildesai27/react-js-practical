import React, {Component} from "react";
import {Col, Container, Row, Image} from "react-bootstrap";
import ProductDetailsComponent from "./productDetailsComponent";
import ProductImage from '../media/product-image.JPG'

class ProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                processors: [
                    {id: 1, name: 'Apple M1 Pro with 10-core CPU, 16-core GPU, 16-core Neural Engine', price: 0},
                    {id: 2, name: 'Apple M1 Max with 10-core CPU, 24-core GPU, 16-core Neural Engine', price: 20000},
                    {id: 3, name: 'Apple M1 Max with 10-core CPU, 32-core GPU, 16-core Neural Engine', price: 30000},
                ],
                memory: [
                    {id: 1, name: '16GB unified memory', price: 0},
                    {id: 2, name: '32GB unified memory', price: 40000},
                ],
                storage: [
                    {id: 1, name: '512GB SSD storage', price: 0},
                    {id: 2, name: '1TB SSD storage', price: 20000},
                    {id: 3, name: '2TB SSD storage', price: 60000},
                    {id: 4, name: '4TB SSD storage', price: 120000},
                    {id: 5, name: '8TB SSD storage', price: 240000},
                ],
                price: 25000.00,
                finalPrice: 25000.00
            },
        };
    }

    calculateFinalPrice = (variantPrice = 0) => {
        console.log(this.state);
        // const {product, finalPrice} = this.state;
        // this.setState({...product, finalPrice: 125});
        // todo: get variant prices and add into final total.
    }

    render() {
        const {product} = this.state;
        return (
            <Container fluid>
                <Row>
                    <Col className="align-items-center">
                        <Image fluid className="align-items-center" alt="product-image" src={ProductImage}/>
                    </Col>
                    <Col><ProductDetailsComponent product={product} priceCalculator={this.calculateFinalPrice}/></Col>
                </Row>
                <hr/>
                <Row>
                    <Col className="align-items-end">
                        <p>
                            MRP &#8377; {product.price}
                            <p>(Incl. of all taxes)</p>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProductComponent;