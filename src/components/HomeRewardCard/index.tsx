import { PrimaryButton } from "../PrimaryButton"

import { Container } from "./styles"

interface HomeRewardCardProps {
    title: string
    pledge: number
    paragraph: string
    quantityNumber: number
}

export const HomeRewardCard = ({title, pledge, paragraph, quantityNumber}: HomeRewardCardProps) => {

    let opacity: number = 1

    if (quantityNumber === 0) {
        opacity= 0.5;
    } else {
        opacity = 1;
    }

    return (
        <Container style={{opacity: `${opacity}`}}>
            <div className="flex align-bottom space-between">
                <h3 className="title">{title}</h3>
                <span className="pledge">Pledge ${pledge} or more</span>
            </div>
            <p className="paragraph">
                {paragraph}
            </p>
            <div className="flex space-between align-center">
                <div className="quantity flex align-center">
                    <span className="quantity-number">{quantityNumber}</span>
                    <span className="quantity-left">left</span>
                </div>
                <PrimaryButton text="Select Reward" />
            </div>
        </Container>
    )
}