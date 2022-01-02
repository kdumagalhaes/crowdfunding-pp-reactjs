import { useState } from "react"
import { PrimaryButton } from "../PrimaryButton"
import { BottomInfo, Card, HorizontalFlex } from "./styles"

interface BackOptionsCardProps {
    title: string
    pledge?: number
    paragraph: string
    quantityNumber?: number
    isReward?: boolean
}

export const BackOptionsCard = ({ title, pledge, paragraph, quantityNumber, isReward }: BackOptionsCardProps) => {

    const [isSelected, setSelected] = useState(false)

    const handleSelection = () => setSelected(!isSelected)

    const cardStyles = {
        selected: {
            outline: '2px solid hsl(176, 50%, 47%)'
        },
        nonSelected: {
            outline: '1px solid #cecece'
        }
    }

    return (
        <Card style={isSelected ? cardStyles.selected : cardStyles.nonSelected}>
            <div className="container">
                <HorizontalFlex>
                    <div className="checkmark">
                        <input className="radio-input" type="radio" name="selection" id="selection" onInput={handleSelection} />
                    </div>
                    <div className="title-and-pledge">
                        <h3 className="title-card">{title}</h3>
                        {
                            isReward ?
                                <p className="pledge-card">Pledge ${pledge} or more</p>
                                :
                                <p className="pledge-card"></p>
                        }
                    </div>
                    {
                        isReward ?
                            <div className="quantity">
                                <span className="quantity-card">{quantityNumber}</span>
                                <span className="quantity-left">left</span>
                            </div>
                            :
                            <div className="quantity">
                                <span className="quantity-card"></span>
                                <span className="quantity-left"></span>
                            </div>
                    }

                </HorizontalFlex>
                <p className="paragraph-card">{paragraph}</p>
            </div>
                <hr />
            <BottomInfo>
                <span className="pledge-cta">
                    Enter your pledge
                </span>
                <div className="pledge-input-and-button">
                    <div className="pledge-container">
                        <span className="currency">$</span>
                        <input className="pledge-input" type="number" name="pledge" id="pledge" defaultValue={pledge} min={pledge}/>
                    </div>
                    <PrimaryButton 
                        height="50px" 
                        maxWidth="120px" 
                        text="Continue" 
                        padding="10px"
                    />
                </div>
            </BottomInfo>
        </Card>
    )
}