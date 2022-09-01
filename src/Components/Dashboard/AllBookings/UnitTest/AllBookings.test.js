// import { render, screen, waitFor } from '@testing-library/react'
// import AllBookings from '../AllBookings'

// global.fetch = jest.fn();

// const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

// it('should show total services from api', () => {
//     render(<AllBookings />);
//     expect(screen.getByText("total services: 0")).toBeInTheDocument();
// })

// it('should show initial number of services if api fails', () => { });


// import 'jest-dom/extend-expect'
// import axiosMock from 'axios'


import React from "react";
import { render, screen, cleanup, waitForElement } from '@testing-library/react'
import AllBookings from '../AllBookings'



afterEach(cleanup)

it("fetch and display data", async () => {

    const url = 'https://fathomless-hamlet-59180.herokuapp.com/get-all-booking-info'
    const { getByTestId } = render(<AllBookings url={url} />)

    expect(screen.getByTestId("booking")).toHaveTextContent("BOOKING")
});