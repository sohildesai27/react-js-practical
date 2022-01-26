import React, {Component} from "react";
import {Col} from "react-bootstrap";
import ProcessorComponent from "./processorComponent";
import MemoryComponent from "./memoryComponent";
import StorageComponent from "./storageComponent";

class ProductDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.product = props.product;
        this.selectedProcessor = {
            id: 1,
            name: 'Apple M1 Pro with 10-core CPU, 16-core GPU, 16-core Neural Engine',
            price: 0
        };
        this.selectedMemory = {id: 1, name: '16GB unified memory', price: 0};
        this.selectedStorage = {id: 1, name: '512GB SSD storage', price: 0};
    }

    priceCalculator = () => {
        this.props.priceCalculator(this.selectedProcessor.price + this.selectedStorage + this.selectedMemory);
    }

    render() {
        return (
            <row>
                <Col className="align-content-start">
                    <h1>
                        Customise your 16-inch MacBook Pro - Space Grey
                    </h1>
                    <span>
                        Apple M1 Pro with 10-core CPU, 16-Core GPU, 16-core Neural Engine 16GB unified memory
                    </span>
                    <p>
                        512GB SSD storage
                    </p>
                </Col>
                <hr/>
                <Col>
                    <ProcessorComponent processors={this.product.processors}
                                        priceCalculator={this.priceCalculator}
                                        default={this.selectedProcessor}/>
                    <br/>
                    <MemoryComponent memory={this.product.memory}
                                     priceCalculator={this.priceCalculator}
                                     default={this.selectedMemory}/>
                    <br/>
                    <StorageComponent storage={this.product.storage}
                                      priceCalculator={this.priceCalculator}
                                      default={this.selectedStorage}/>
                </Col>
            </row>
        );
    }
}

export default ProductDetailsComponent;