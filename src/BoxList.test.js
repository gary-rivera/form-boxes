import { fireEvent, render } from '@testing-library/react'
import BoxList from './BoxList'

it("renders without crashing", function () {
    render(<BoxList />)
})

it("matches default snapshot", function () {
    const { container } = render(<BoxList />)
    expect(container).toMatchSnapshot();
})

it("creates boxes", function() {
    const {container, getByLabelText, queryByText, debug} = render(<BoxList />)

    const heightInput = getByLabelText("Height");
    const widthInput = getByLabelText("Width");
    const colorInput = getByLabelText("Color");
    const submitBtn = queryByText("Add box")

    fireEvent.change(heightInput, {target: {value:'80'}});
    fireEvent.change(widthInput, {target: {value:'75'}});
    fireEvent.change(colorInput, {target: {value:'black'}});
    fireEvent.click(submitBtn);

    const box = container.querySelector(".Box");
    expect(box).toBeInTheDocument();

    const removeBtn = queryByText("Remove The Box!");
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
    expect(box).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
})