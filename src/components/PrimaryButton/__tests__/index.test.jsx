import {render} from "@testing-library/react"
import { PrimaryButton } from ".."

describe("PrimaryButton", () => {
    it("initial component should match snapshot", () => {
        const {asFragment} = render(<PrimaryButton />)
        expect(asFragment()).toMatchSnapshot()
    })
})