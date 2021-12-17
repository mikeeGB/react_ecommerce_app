import React from "react";
import {Button, Card, Container, Row, Col} from "react-bootstrap";

const ShopInfos = (props) => {
    const {shop_infos} = props;
    if (!shop_infos || shop_infos.length === 0) return <p>Can't find shops data</p>;
    return (
        <React.Fragment>
            <section className="vh-100">
            <Container>
                <Row className>
            {shop_infos.map((shop_info) => {
                return(
                    <Col key={shop_info.id} className="col-auto my-3">
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZxWR5JzA0zswXdSQoGOqK423gNOqhedJZQ&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>{shop_info.shop_name}</Card.Title>
                            <Card.Text>
                                Owner: {shop_info.owner}
                            </Card.Text>
                            <div className="d-grid">
                            <Button variant="primary" href={`/shops/${shop_info.shop_info}`}>View products of this shop</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                )
            })}
                </Row>
            </Container>
            </section>
        </React.Fragment>
    )
}
export default ShopInfos;