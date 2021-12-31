import { Card, HorizontalFlex } from "./styles"

interface BackOptionsCardProps {
    title: string
    pledge?: number
    paragraph: string
    quantityNumber?: number
    isReward?: string
}

export const BackOptionsCard = ({ title, pledge, paragraph, quantityNumber, isReward }: BackOptionsCardProps) => {
    return (
        <Card>
            <div className="checkmark">
                <input className="radio-input" type="radio" name="selection" id="selection" />
            </div>
            <HorizontalFlex>
                <div className="title-and-pledge">
                    <h3 className="title-card">{title}</h3>
                    <p className="pledge-card">Pledge ${pledge} or more</p>
                </div>
                <div className="quantity">
                    <span className="quantity-card">{quantityNumber}</span>
                    <span className="quantity-left">left</span>
                </div>
            </HorizontalFlex>
            <p className="paragraph-card">{paragraph}</p>
        </Card>
    )
}