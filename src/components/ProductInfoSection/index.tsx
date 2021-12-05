import { Container, Content } from "./styles"

import mastercraftLogo from '../../assets/img/logo-mastercraft.svg'
import bookmarkIcon from '../../assets/img/icon-bookmark.svg'

import { PrimaryButton } from "../PrimaryButton"

export const ProductInfoSection = () => {
    return (
        <Container>
            <Content>
                <img className="product-logo" src={mastercraftLogo} alt="logo mastercraft" />
                <h1 className="product-name">Mastercraft Bamboo Monitor Riser</h1>
                <p className="product-summary">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="flex-container">
                    <PrimaryButton text="Back this project" />
                    <button className="btn-bookmark">
                        <img src={bookmarkIcon} alt="bookmark icon" />
                        <p>Bookmark</p>
                    </button>
                </div>
            </Content>
        </Container>
    )
}