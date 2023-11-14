import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ChatContent from './ChatContent.js';
import ChatContactList from './contact_list/ChatContactList.js';

function Chat() {
    return (<>
        <Container fluid style={{ backgroundColor: "green" }}>
            <Row>
                <Col id="contacts" className="vh-100 col-2" style={{ backgroundColor: "red", padding: "0px" }}>
                    <ChatContactList />
                </Col>
                <Col id="chat" className="vh-100 col-10" style={{ backgroundColor: "blue", padding: "0px" }}>
                    <ChatContent />
                </Col>
            </Row>
        </Container>
    </>);
}

export default Chat;