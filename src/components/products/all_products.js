import React, {useState, useEffect} from "react";
import axiosInstance from "../../axios";
import {
    Button,
    Card,
    Col,
    Container,
    FormControl,
    InputGroup,
    ListGroup,
    ListGroupItem,
    Row
} from "react-bootstrap";


export default function All_products() {

    const [data, setData] = useState({ all_products: []});
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        axiosInstance.get(`products?search=${searchTerm}`).then((res) => {
            setData({all_products: res.data});
        });
        }, [searchTerm, setData]);

    return (
        <React.Fragment>
            <Container>
                <h2 className='text-center mt-4'>All products list</h2>
                    <div className="row justify-content-center">
                        <div className="col-auto mt-3">
                            <InputGroup className="mb-auto">
                                <FormControl
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                    id="search-input"
                                />
                                <Button variant="outline-success" id="button-addon2" onClick={() => {
                                    setSearchTerm(document.getElementById("search-input").value)
                                }}>
                                    <i className="fa fa-search"/>
                                </Button>
                            </InputGroup>
                        </div>
                    </div>

                <Row className>
            {data.all_products.map((product) => {
                return(
                    <Col key={product.id} className="col-auto my-3">
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                Description: {product.description}
                            </Card.Text>
                        </Card.Body>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem><strong>Price:</strong> {product.price} $</ListGroupItem>
                                    <ListGroupItem><strong>Size:</strong> {product.size}</ListGroupItem>
                                <ListGroupItem><strong>Category:</strong> {product.category}</ListGroupItem>
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