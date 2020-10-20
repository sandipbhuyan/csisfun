import React from 'react';
import '../styles/Sidebar.scss';
import {Card, Button, Accordion} from "react-bootstrap";

function Sidebar({state, selectCat, selectT}) {
    const [categories, setCategories] = React.useState(['OS', 'TOC', 'Digital Logic', 'Discrete Math', 'COA', 'Computer Networking', 'DAA', 'Data Structure']);
    const [categoriesId, setCategoriesId] = React.useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const [category, setCategory] = React.useState("");
    const [type, setType] = React.useState("");
    const [types, setTypes] = React.useState(['question', 'topic']);

    const selectCategory = (index) => {
        setCategory(categories[index]);
        selectCat(categoriesId[index]);
    }

    const selectType = (type) => {
        setType(type);
        selectT(type);
    }
    return (
        <Accordion defaultActiveKey="0">
            <Card text={"white"}>

                <Accordion.Toggle as={Card.Header} eventKey="0"
                                  className={"sidebar-header"}>{"Categories"}</Accordion.Toggle>
                <Accordion.Collapse eventKey={"0"}>
                    <Card.Body>
                        {categories.map((val, index) => <Button className={"category-button"}
                                                                variant={category === val ? "info" : "outline-info"}
                                                                disabled={category === val}
                                                                onClick={() => selectCategory(index)}>{val}</Button>)}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card text={"white"}>
                <Accordion.Toggle as={Card.Header} eventKey="1" className={"sidebar-header"}>{"Type"}</Accordion.Toggle>
                <Accordion.Collapse eventKey={"1"}>
                    <Card.Body>
                        {types.map((val) => <Button className={"category-button"}
                                                    variant={type === val ? "info" : "outline-info"}
                                                    disabled={type === val}
                                                    onClick={() => selectType(val)}>{val}</Button>)}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Sidebar;
