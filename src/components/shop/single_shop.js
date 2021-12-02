import React, {useState, useEffect} from "react";
import axiosInstance from "../../axios";
import {useParams} from "react-router-dom";
import {Button, Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";



export default function Shop() {
    const {id} = useParams();

    const [data, setData] = useState({ shop_products: [] });

    useEffect(() => {
        axiosInstance.get(`shops/${id}`).then((res) => {
            setData({shop_products: res.data.products});
            console.log(res.data);
        });
        }, [id, setData]);

    console.log(data.shop_products)
    return (
        <React.Fragment>
            <h2 className='text-center mt-4'>Shop Products available</h2>
            <Container>
                <Row className>
            {data.shop_products.map((prod) => {
                return(
                    <Col key={prod.id} className="col-auto my-3">
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={prod.image} />
                        <Card.Body>
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text>
                                Description: {prod.description}
                            </Card.Text>
                        </Card.Body>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem><strong>Price:</strong> {prod.price} $</ListGroupItem>
                                    <ListGroupItem><strong>Size:</strong> {prod.size}</ListGroupItem>
                                <ListGroupItem><strong>Category:</strong> {prod.category}</ListGroupItem>
                            </ListGroup>
                        <Card.Body>
                            <div className="d-grid">
                            <Button variant="success">Go somewhere</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                )
            })}
                </Row>
            </Container>
        </React.Fragment>
    )
}