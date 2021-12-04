import { Container, Content, Navigation } from './styles'
import { useState } from 'react'

import Modal from 'react-modal'

import logoImg from '../../assets/img/logo.svg'
import hamburgerMenuIcon from '../../assets/img/icon-hamburger.svg'

export const Header = () => {

    const [modal, setModal] = useState(false)

    return (
        <Container>
            <div className="gradient"></div>
            <Modal className="react-modal-content" isOpen={modal}>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a className="last-anchor" href="#">Get Started</a></li>
                </ul>
            </Modal>
            <Content>
                <a href="#">
                    <h1 className="seo-h1">Crowdfunding • This is just for SEO best practices =)</h1>
                    <img src={logoImg} alt="crowdfund" />
                </a>
                <Navigation>
                    <button onClick={() => setModal(!modal)} className="hamburger-menu">
                        <img src={hamburgerMenuIcon} alt="open menu" />
                    </button>
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