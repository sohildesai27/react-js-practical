import React, {Component} from "react";
import {Col} from "react-bootstrap";
import ProcessorComponent from "./processorComponent";
import MemoryComponent from "./memoryComponent";
import StorageComponent from "./storageComponent";

class ProductDetailsComponent extends Component {
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
                    <ProcessorComponent/>
                    <br/>
                    <MemoryComponent/>
                    <br/>
                    <StorageComponent/>
                </Col>
            </row>
        );
    }
}

export default ProductDetailsComponent;