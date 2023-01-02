import { createElement } from "react"

function Row({ typeRow, value }) {
  return (
    createElement(
      typeRow ? typeRow : "td",
      {},
      value,
    )
  )
}

export default Row