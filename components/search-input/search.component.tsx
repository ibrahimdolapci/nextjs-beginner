import { Container, ButtonWithIcon, Input } from './search.style'
import React from 'react'

export class SearchInput extends React.Component<{ onSearch: (text: string) => void }> {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.props.onSearch(e.target.value);
    }

    render() {
        return (
            <Container className="search-input">
                <Input placeholder="Search" onChange={this.handleChange} />
                <ButtonWithIcon>
                    <i className="icon icon-search"></i>
                </ButtonWithIcon>
            </Container>
        )
    }
}
