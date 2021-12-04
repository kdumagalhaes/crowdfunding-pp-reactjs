import { Container, Content, Navigation } from './styles'

import logoImg from '../../assets/img/logo.svg'
import hamburgerMenuIcon from '../../assets/img/icon-hamburger.svg'

export const Header = () => {
    return (
        <Container>
            <div className="gradient"></div>
            <Content>
                <a href="#">
                    <h1 className="seo-h1">Crowdfunding • This is just for SEO best practices =)</h1>
                    <img src={logoImg} alt="crowdfund" />
                </a>
                <Navigation>
                    <a href="#" className="hamburger-menu">
                        <img src={hamburgerMenuIcon} alt="open menu" />
                    </a>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Get Started</a></li>
                    </ul>
                </Navigation>
            </Content>
        </Container>
    )
}