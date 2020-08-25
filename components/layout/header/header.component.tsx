import { Container, Logo, Actions, Button } from './header.style'
import { Row, Column } from '../../grid'

export function Header() {
    return (
        <Container>
            <Row className="row">
                <Column lg="8" className="column">
                    <Logo src="/images/logo.png" alt="logo" height="50" />
                    <Actions>
                        <Button>Login</Button>
                        <Button primary>Start your free trial</Button>
                    </Actions>
                </Column>
            </Row>
        </Container>
    )
}