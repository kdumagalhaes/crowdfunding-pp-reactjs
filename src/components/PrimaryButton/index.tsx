import { Button } from "./styles"

interface PrimaryButtonProps {
    text: string
    height: string
    maxWidth: string
    padding: string
}

export const PrimaryButton= ({text, height, maxWidth, padding}: PrimaryButtonProps) => {
    return (
        <Button 
            height={height} 
            maxWidth={maxWidth}
            padding={padding}
        >
            {text}
        </Button>
    )
}