import { CardGroup, Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import './Calendar.css'

function GetDaysForMonth(month, year) {
    const days = [];

    const nDays = new Date(year, month, 0).getDate();
    for (let day = 1; day <= nDays; day++) {
        const date = new Date(year, month, day);
        const dayObj = {
            date: date,
            dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
            day: day,
            month: month,
            year: year,
        };

        days.push(dayObj);
    }

    return days;
}

export default function Calendar() {
    const days = GetDaysForMonth(10, 2023);
    const today = new Date();

    return (<div>
        <Container id="calendar-container" fluid>
            {days.map((day, index) => (
                <Card>
                    <Card.Body className="day-card">
                        <Card.Title className="text-center" style={{color: today==day.date?"red":"black"}}>{day.day}</Card.Title>
                        <Card.Subtitle className="text-center mb-2 text-muted">{day.dayName}</Card.Subtitle>
                        <Col className="day-card-tasks">
                        </Col>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    </div>);
}