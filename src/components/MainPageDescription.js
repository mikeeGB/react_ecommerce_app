import React from "react";
import {Card} from "react-bootstrap";
import CardsMain from "./cards_main_page";

export default function MainPageDescription() {
    return (
        <React.Fragment>
        <Card>
                <Card.Img variant="top" src="https://files.cdn.printful.com/o/upload/lpg-image-upload/1b/1b81e5e91be3554f8cf213600dfa71f2" />
                <Card.Body>
                    <Card.Text>
                        <p className="h3 text-center">
                            Customize your products, add them to our platform and earn money!
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <CardsMain/>
            <section className="page-section">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-4">
                            <img src="https://static.thenounproject.com/png/3194552-200.png" alt="conv"/>
                            <h3 className="h4 mb-2">Сonvenience</h3>
                            <p className="text-muted mb-0">Create and add your products to our platform</p>
                        </div>
                        <div className="col-sm-4">
                            <img src="https://icon-library.com/images/92256-200_88482.png" alt="bulb"/>
                            <h3 className="h4 mb-2">Creativity</h3>
                            <p className="text-muted mb-0">Bring your creative ideas to reality. Make your own design of products</p>
                        </div>
                        <div className="col-sm-4">
                            <img src="https://static.thenounproject.com/png/5641-200.png" alt="cart"/>
                            <h3 className="h4 mb-2">Variety</h3>
                            <p className="text-muted mb-0">A wide range of different products from designers</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}