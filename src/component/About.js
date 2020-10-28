import React from 'react';
import {withRouter} from "react-router";
import {
    Card,
    CardColumns
} from "react-bootstrap";
import '../styles/About.scss';
import user1 from '../assets/image.jpg'

function About(props) {
    return (
        <div>
            <h3 className={"heading-title"}>What is CS is Fun?</h3>
            <hr/>
            <p className={"description-text"}>
                CS is fun is an experimental website by me that I have created to share my knowledge what I am doing in
                Information and Technology field as a part of my work. This site can have a lot of use cases. I will be
                adding separate components in time gradually. It will be very good to have more contributors to add more
                features to the site.
            </p>
            <h3 className={"heading-title"}>Contributors</h3>
            <hr/>
            <CardColumns>
                <Card>
                    <Card.Img className={"about-image"} variant={"top"} src={user1} />
                    <Card.Body>
                        <Card.Text className={"about-text"}>Sandip Bhuyan</Card.Text>
                        <Card.Text className={"about-description"}>
                            A young web developer who is exploring the world of computers. Working on IoT and Web Development
                            platforms improving myself day by day.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </div>
    );
}

export default withRouter(About);
