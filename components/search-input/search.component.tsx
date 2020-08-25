import { Container, ButtonWithIcon, Input } from './search.style'

export function SearchInput() {
    return (
        <Container>
            <Input placeholder="Search"/>
            <ButtonWithIcon>
                <i className="icon icon-search"></i>
            </ButtonWithIcon>
        </Container>
    )
}
