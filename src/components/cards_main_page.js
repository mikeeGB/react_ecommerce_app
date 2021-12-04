import React from "react";
import {Button, Card} from "react-bootstrap";
import "./cards.css"


export default function CardsMain() {
    return(
        <React.Fragment>
        <section className="page-section">
                <div className="container mb-5">
                    <div className="row text-center">
                        <div className="col">
                            <Card className="custom_card">
                                <Card.Img variant="top" src="http://xingyunlite.com/jpg/trending_products_to_sell_in_india948d.jpg" />
                                <Card.Body>
                                  <Button href="/products" className="stretched-link">View all products</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="custom_card">
                                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0070/7032/files/paukova_new_colour_with_orange_1.jpg?v=1634835738&width=1024" />
                                <Card.Body>
                                    <Button href="/shop_infos" className="stretched-link">View all shops</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}