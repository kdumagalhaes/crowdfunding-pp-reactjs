import { Button } from "./styles"

interface PrimaryButtonProps {
    text: string
}

export const PrimaryButton= ({text}: PrimaryButtonProps) => {
    return (
        <Button>
            {text}
        </Button>
    )
}