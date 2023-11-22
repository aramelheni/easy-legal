import { Container, Row, Col } from "react-bootstrap";
import "./TaskItem.css"

export default function TaskItem({ task }) {
    return (
        <Container key={task.id} className="item" >
            <Row>
                <Col lg="2">
                    <p className="time">4PM</p>
                </Col>
                <Col>
                    <p className="title">{task.title}</p>
                </Col>
            </Row>
        </Container>
    );
}