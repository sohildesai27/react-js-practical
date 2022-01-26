import React, {Component} from "react";
import {Col, Row, Dropdown} from "react-bootstrap";

class MemoryComponent extends Component {
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
                            16GB unified memory
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            32GB unified memory
                            <p>+&#8377;40000.00</p>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        );
    }
}

export default MemoryComponent;