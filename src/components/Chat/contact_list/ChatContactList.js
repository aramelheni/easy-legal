import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContactItem from './ContactItem';

function ChatContactList() {
    const contacts = [{
        name: "zeineb",
        lastname: "ben dhiaf",
        status: 1,
        phone_number: "29188811"
    },
    {
        name: "mouhib",
        lastname: "bouzamitta",
        status: 0,
        phone_number: "50262927"
    }]

    return (<>
        <Container className="vh-100" style={{ margin: "0px", padding: "0px", backgroundColor: "white" }}>
            <Row style={{ height: "10%", backgroundColor: "red" }}>
                <Col>
                    <h1>Clients</h1>
                </Col>
            </Row>
            <Row style={{ height: "80%", backgroundColor: "gray", overflowY: 'auto' }}>
                {
                    contacts.map((contact)=>(
                        <ContactItem style={{padding: "0px", height:"20px", backgroundColor: "green"}} {...contact}/>
                    ))
                }
            </Row>
            <Row style={{ height: "10%", backgroundColor: "black" }}>
               
            </Row>
        </Container>
    </>);
}

export default ChatContactList;