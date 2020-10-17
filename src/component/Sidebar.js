import React from 'react';
import '../App.scss';
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
        <Card>
            <Card.Header>{state === 0 ? "Categories": "Type"}</Card.Header>
            <Card.Body>
                {state === 0 ? (<>
                    {categories.map((val, index) => <Button variant="outline-info" onClick={() => selectCategory(index)}>{val}</Button>)}
                </>) : (<>
                    {types.map((val) => <Button variant="outline-info" onClick={() => selectType(val)}>{val}</Button>)}
                </>)}
            </Card.Body>
        </Card>
    );
}

export default Sidebar;
