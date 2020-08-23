import { Container, Logo, Actions, Button } from './header.style'

export default function Header() {
    return (
        <Container>
            <Logo src="/images/logo.png" alt="logo"/>
            <Actions>
                <Button>Login</Button>
                <Button primary>Start your free trial</Button>
            </Actions>
        </Container>
    )
}