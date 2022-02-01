import {render} from "@testing-library/react"
import {BackOptionsModal} from ".."

describe("Header", () => {
    it("initial component should match snapshot", () => {
        const {asFragment} = render(<BackOptionsModal />)
        expect(asFragment()).toMatchSnapshot()
    })
})