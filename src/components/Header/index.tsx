import { Container, Navigation } from './styles'

import logoImg from '../../assets/img/logo.svg'

export const Header = () => {
    return (
        <Container>
            <img src={logoImg} alt="crowdfund" />
            <Navigation>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Get Started</a></li>
                </ul>
            </Navigation>
        </Container>
    )
}