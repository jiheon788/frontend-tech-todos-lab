import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

describe('App', () => {
  it("App을 렌더링하면 'Vite + React' 텍스트가 보인다.", () => {
    const {container} = render((<App/>))

    expect(container).toHaveTextContent('Vite + React')
  })
})
