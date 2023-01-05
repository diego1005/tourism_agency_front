import { createElement } from "react"

function Row({ tag, value }) {

  return (
    createElement(
      tag ? tag : "td",
      {},
      value,
    )
  )
}

export default Row