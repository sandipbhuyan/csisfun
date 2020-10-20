import React from 'react';
import '../styles/Sidebar.scss';
import { Card, Button} from "react-bootstrap";

function Sidebar({ state, selectCat, selectT}) {
    const [categories, setCategories] = React.useState(['OS', 'TOC', 'Digital Logic', 'Discrete Math', 'COA', 'Computer Networking', 'DAA', 'Data Structure']);
    const [categoriesId, setCategoriesId] = React.useState([1,2,3,4,5,6,7,8]);
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
        <Card text={"white"}>
            <Card.Header as={"h5"} className={"sidebar-header"}>{state ? "Categories": "Type"}</Card.Header>
            <Card.Body>
                {state ? (<>
                    {categories.map((val, index) => <Button  className={"category-button"} variant={category === val ? "info" : "outline-info"} disabled={category === val} onClick={() => selectCategory(index)}>{val}</Button>)}
                </>) : (<>
                    {types.map((val) => <Button className={"category-button"}  variant={type === val ? "info" : "outline-info"} disabled={type === val} onClick={() => selectType(val)}>{val}</Button>)}
                </>)}
            </Card.Body>
        </Card>
    );
}

export default Sidebar;
