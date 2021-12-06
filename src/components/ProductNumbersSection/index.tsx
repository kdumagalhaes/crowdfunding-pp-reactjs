import { Container, Content } from "./styles"

export const ProductNumbersSection = () => {
    return (
        <Container>
            <Content>
                <div className="flex-container">
                    <div className="number">
                        <span className="number-value">$89,914</span>
                        <span className="number-backed">of $100,000 backed</span>
                    </div>
                    <div className="number">
                        <span className="number-value">5,007</span>
                        <span className="number-backed">total backers</span>
                    </div>
                    <div className="number">
                        <span className="number-value">56</span>
                        <span className="number-backed">days left</span>
                    </div>
                </div>
            </Content>
        </Container>
    )
}