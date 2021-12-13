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

                    <div className="row text-center">
                        <div className="col">
                            <Card className="custom_card">
                                <Card.Img variant="top"
                                          src="https://www.bootstrapdash.com/wp-content/uploads/2018/01/create-bootstrap-admin-template.png" />
                                {/*variants: https://www.bootstrapdash.com/wp-content/uploads/2019/07/twitter-bootstrap-admin-templates.png
                                            https://meetanshi.com/blog/wp-content/uploads/2019/11/How-To-Use-Dependency-Multiple-Field-In-Magento-2-Admin-Form.png
                                            https://www.gomage.com/wp/wp-content/uploads/2014/02/Magento-Logo_-How-To-Adjust-Logos-Via-Admin-Panel.jpg*/}
                                <Card.Body>
                                    <Button href="/admin" className="stretched-link">Admin Panel</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}