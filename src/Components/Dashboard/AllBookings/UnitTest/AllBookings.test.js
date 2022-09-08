import React from "react";
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import AllBookings from '../AllBookings'


afterEach(cleanup)

it("Should render text content", () => {

    render(<AllBookings text="BOOKING" />)

    const result = screen.getByTestId("booking")

    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent("BOOKING")

});