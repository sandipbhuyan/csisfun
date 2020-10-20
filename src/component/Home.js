import React from 'react';
import '../App.scss';
import {ListContent} from "./index";

function Home({post}) {
    return (
        <section className={"main-content"}>
            {
                post.map(val =>
                    <ListContent
                        id={val.id}
                        header={val.header}
                        description={val.description}
                        content={val.content}
                        createdAt={val.createdAt}
                    />
                )
            }
        </section>
    );
}

export default Home;
