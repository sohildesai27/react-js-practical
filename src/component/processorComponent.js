import React, {Component} from "react";
import {Col, Row, Dropdown} from "react-bootstrap";

class ProcessorComponent extends Component {
    render() {
        return (
            <Col>
                <h5>System on a Chip (Processor)</h5>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Options
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick="#/action-1" active>
                            Apple M1 Pro with 10-core CPU, 16-core GPU, 16-core Neural Engine
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Apple M1 Max with 10-core CPU, 24-core GPU, 16-core Neural Engine
                            <p>+&#8377;20000.00</p>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            Apple M1 Max with 10-core CPU, 32-core GPU, 16-core Neural Engine
                            <p>+&#8377;30000.00</p>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        );
    }
}

export default ProcessorComponent;