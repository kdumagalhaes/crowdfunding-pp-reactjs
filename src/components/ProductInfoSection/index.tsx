import { Container, Content } from "./styles"

import mastercraftLogo from '../../assets/img/logo-mastercraft.svg'

export const ProductInfoSection = () => {
    return (
        <Container>
            <Content>
                <img className="product-logo" src={mastercraftLogo} alt="logo mastercraft" />
                <h1 className="product-name">Mastercraft Bamboo Monitor Riser</h1>
                <p className="product-summary">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            </Content>
        </Container>
    )
}