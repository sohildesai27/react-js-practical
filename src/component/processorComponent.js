import React, {Component} from "react";
import {Col, Dropdown} from "react-bootstrap";

class ProcessorComponent extends Component {
    constructor(props) {
        super(props);
        this.processors = props.processors;
    }

    render() {
        return (
            <Col>
                <h5>System on a Chip (Processor)</h5>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Options
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {this.processors.map(row => {
                            if (row.price) {
                                return (<Dropdown.Item key={row.id}>{row.name}<p>+&#8377;{row.price}</p>
                                </Dropdown.Item>);
                            }
                            return (<Dropdown.Item key={row.id}>{row.name}</Dropdown.Item>);
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        );
    }
}

export default ProcessorComponent;