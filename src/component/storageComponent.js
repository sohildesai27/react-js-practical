import React, {Component} from "react";
import {Col, Row, Dropdown} from "react-bootstrap";

class StorageComponent extends Component {
    render() {
        return (
            <Col>
                <h5>Memory</h5>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Options
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick="#/action-1" active>
                            512GB SSD storage
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            1TB SSD storage
                            <p>+&#8377;20000.00</p>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            2TB SSD storage
                            <p>+&#8377;60000.00</p>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            4TB SSD storage
                            <p>+&#8377;120000.00</p>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            8TB SSD storage
                            <p>+&#8377;240000.00</p>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        );
    }
}

export default StorageComponent;