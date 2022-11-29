import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Thief from '../assets/Thief.png';
import PoisonMush from '../assets/PoisonMush.png';
import Mush from '../assets/Mush.png';

const HomePage = () => {

    const [length, setLength] = useState(9);
    const [nowcellhover, setNowcellhover] = useState([1, 1]);
    const [nowcellclick, setNowcellclick] = useState([-1, -1]);

    const [mode, setMode] = useState(-1);

    const cells = [];

    const handleSelect = (e) => {
        setLength(e.target.value);
    }

    const handleMode = (val) => {
        setMode(val);
    }

    const handleHover = (row, col) => {
        // setNowcell([row, col])
    }

    const handleClick = (row, col) => {
        setNowcellclick([row,col]);
        cells[row][col].type = mode;
    }

    const generateCells = () => {
        for (let row = 0; row < length; row++) {
            cells.push([]);
            for (let col = 0; col < length; col++) {
                cells[row].push({ type: 0, state: 0 });
            }
        }
        return (
            <div>
                {
                    cells.map((row, indexRow) => {
                        return (<Row key={indexRow}><div className="RowStyle">
                            {row.map((col, indexCol) => {
                                return (
                                    <div className="Cell" key={indexCol} onClick={() => handleClick(indexRow, indexCol)} onMouseEnter={() => setNowcellhover([indexRow, indexCol])}></div>
                                );
                            })}
                        </div></Row>);
                    })
                }
            </div>
        )

    }

    return (
        <Container>
            <br />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Set N X N</Card.Title>
                            <Card.Text>
                                <Form.Select aria-label="Default select example" onChange={handleSelect}>
                                    <option value="9">9 X 9</option>
                                    <option value="18">18 X 18</option>
                                </Form.Select>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <div style={{ display: "flex", gap: "30px" }}>
                        <div className={mode == 1 ? "Active" : "Deactive"} onClick={() => handleMode(1)}>
                            <img src={Mush} className="ModeImage" />
                            <p>mush</p>
                        </div>
                        <div className={mode == 2 ? "Active" : "Deactive"} onClick={() => handleMode(2)}>
                            <img src={PoisonMush} className="ModeImage" />
                            <p>poisonmush</p>
                        </div>
                    </div>

                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <div>
                        {generateCells()}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        Now Hover at: {length - nowcellhover[0]}, {nowcellhover[1] + 1}
                    </div>
                    <div>
                        Now Click at: {length - nowcellclick[0]}, {nowcellclick[1] + 1}
                    </div>
                    <div>
                        Now Mode: {mode}, {mode == 1 ? "mush" : mode == 2 ? "poison" : "none"}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;