import { Container } from './breadcrumb.style'
import { Column } from '../../grid'

export function Breadcrumb({ title }) {
    return <Container><Column lg="8">{title}</Column></Container>

}