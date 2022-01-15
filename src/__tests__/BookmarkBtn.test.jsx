import { fireEvent, render, screen, container } from '@testing-library/react'
import { ProductInfoSection } from '../components/ProductInfoSection'

it('renders the bookmark button icon', () => {
    render(< ProductInfoSection />)
    const bookmarkBtnImg = screen.getByAltText(/bookmark icon*/i)
    expect(bookmarkBtnImg).toBeVisible()
})

// it('changes the text content when bookmark button is clicked', () => {
//     render(< ProductInfoSection />)
//     const bookmarkBtn = container.querySelector('btn-bookmark')
//     fireEvent.click(bookmarkBtn)
//     expect(screen.getByText('Bookmarked')).toBeVisible()
// })