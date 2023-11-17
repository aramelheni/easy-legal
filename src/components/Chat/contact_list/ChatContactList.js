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
    },
    {
        name: "mouhib",
        lastname: "bouzamitta",
        status: 0,
        phone_number: "50262927"
    }]

    return (<>
        <Container className="vh-100 " style={{ margin: "0px", padding: "0px", backgroundColor: "white" }}>
            <Row style={{ height: "10%", backgroundColor: "blanchedalmond " }}>
                <Col>
                    <h1 className="d-flex align-items-center justify-content-center" style={{ color: "#99272D", textAlign: "center" }}>Clients</h1>
                </Col>
            </Row>
            <Row style={{ height: "80%", backgroundColor: "gray", marginBottom: '0', overflowY: 'auto' }}>
                <Col>{
                    contacts.map((contact) => (
                        <ContactItem style={{ padding: "0px" }} {...contact} />
                    ))
                }
                </Col>
            </Row>
            <Row style={{ height: "10%" }}>
                <a href='https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=16&ct=1699997137&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d7644bbdc-5a83-7c94-77f3-18fd2527d49d&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c'>
                    <img style={{width:"10px"}} src='../artwork/outlook.png' />
                </a>
                <a href='https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=16&ct=1699997137&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d7644bbdc-5a83-7c94-77f3-18fd2527d49d&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c'>
                    <img src='../artwork/outlook.png' alt='' />
                </a>
            </Row>
        </Container>
    </>);
}

export default ChatContactList;