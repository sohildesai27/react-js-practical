import React, {Component} from "react";
import {Col, Dropdown} from "react-bootstrap";

class ProcessorComponent extends Component {
    constructor(props) {
        super(props);
        this.processors = props.processors;
        this.priceCalculator = props.priceCalculator;
        this.default = props.default;
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
                            if (row.id === this.default.id) {
                                return (
                                    <Dropdown.Item active onClick={() => this.priceCalculator()} key={row.id}>{row.name}
                                        if (row.price) {
                                            <p>+&#8377;{row.price}</p>
                                        }
                                    </Dropdown.Item>);
                            }
                            return (<Dropdown.Item onClick={() => this.priceCalculator()} key={row.id}>{row.name}
                                if (row.price) {
                                    <p>+&#8377;{row.price}</p>
                                }
                            </Dropdown.Item>);
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        );
    }
}

export default ProcessorComponent;