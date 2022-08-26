import { rest } from 'msw'
import { setupServer } from 'msw/node'
// import { render } from 'react-dom'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import OurServices from '../OurServices'
// import it from 'date-fns/esm/locale/it/index.js'

const server = setupServer(
    rest.get("http://localhost:5000/services-get", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([{ eventName: "Wedding Party" }])
        )
    })
)

beforeAll(() => { server.listen() })
afterEach(() => { server.resetHandlers() })
afterAll(() => { server.close() })


test('it should have the correct services', async () => {
    render(
        <BrowserRouter>
            <OurServices></OurServices>
        </BrowserRouter>
    )

    const projectList = await screen.findByText("Wedding Party")
    expect(projectList).toBeVisible()
})

// it('it should have the correct services', async () => {
// render(<OurServices/>)
// const servicesItem = await screen.findByText("Wedding Party")
// expect(servicesItem).toBeVisible()
// })