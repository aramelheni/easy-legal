import Container from 'react-bootstrap/Container';
function ContactItem({ name, lastname, status,picture }) {
    return (<>
        <Container className="d-flex align-items-center justify-content-center" style={{color:"36454F", backgroundColor: "cornsilk",border:"1px solid black", borderBottom: "none", height: "40px", textAlign: "center" }}>
            <div> 
                <p>{name} {lastname}</p>
            </div>
        </Container>
       
    </>);
}

export default ContactItem;