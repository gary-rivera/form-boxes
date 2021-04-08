import { fireEvent, render } from '@testing-library/react'
import Box from './Box'


it("renders without crashing", function () {
    render(<Box />)
})

it("matches default snapshot", function () {
    const { container } = render(<Box />)
    expect(container).toMatchSnapshot();
})

it("matches modified box snapshot", function () {
    const { container } = render(
        <Box
            height='25px'
            width='25px'
            backgroundColor= 'red'
        />)
    expect(container).toMatchSnapshot();
})
