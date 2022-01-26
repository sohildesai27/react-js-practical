import React, {Component} from "react";
import {Col, Dropdown} from "react-bootstrap";

class StorageComponent extends Component {
    constructor(props) {
        super(props);
        this.storage = props.storage;
    }

    render() {
        return (
            <Col>
                <h5>Memory</h5>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Options
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {this.storage.map(row => {
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

export default StorageComponent;