import Link from 'next/link';
import Card from 'react-bootstrap/Card';

const BookCard = (props) => {
    return (
        <Card >
            <Card.Img src={props.img} />
            <Card.Body className="text-center">
                <Card.Title><Link href={`bocker/${props.url}`} className="text-center">{props.title}</Link></Card.Title>
            </Card.Body>
        </Card>
    )
};

export default BookCard