import React from 'react';
import '../styles/Home.scss';
import { ListContent } from "./index";
import { withRouter } from "react-router";

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

export default withRouter(Home);
