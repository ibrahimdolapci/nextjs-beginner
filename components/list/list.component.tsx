import React from "react";
import { Container, CoverImage, ListItem } from './list.style';
import { IEntry } from "../../interfaces";

export class List extends React.Component<{ items: IEntry[] }> {
    render() {
        return (
            <Container className="list">
                {this.props?.items.map(item => {
                    const image = item.images["Poster Art"];

                    return (
                        <ListItem key={item.title}>
                            < CoverImage src={image.url} />
                            <span>{item.title}</span>
                        </ListItem>
                    )
                })}
            </Container>
        )
    }
}