import {fireEvent, render} from '@testing-library/react'
import NewBoxForm from './NewBoxForm'

it("renders without crashing", function() {
    render(<NewBoxForm/>)
})

it("matches initial snapshot", function() {
    const { container } = render(<NewBoxForm/>)
    expect(container).toMatchSnapshot();
})

it("submitting works", function() {
    const mockBox = jest.fn();
    const { container } = render(<NewBoxForm create={mockBox}/>)
    const height = container.querySelector('input[name="height"]');
    const width = container.querySelector('input[name="width"]');
    const color = container.querySelector('input[name="color"]');

    fireEvent.change(height, {target: {value:'50'}});
    fireEvent.change(width, {target: {value:'50'}});
    fireEvent.change(color, {target: {value:'blue'}});

    expect(height).toHaveValue('50');
    expect(width).toHaveValue('50');
    expect(color).toHaveValue('blue');

    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(height).toHaveValue('');
    expect(width).toHaveValue('');
    expect(color).toHaveValue('');

})

