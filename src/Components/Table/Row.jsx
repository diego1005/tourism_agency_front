import { createElement } from "react"

function Row({ typeRow, value }) {
  return (
    <div>
      {
        createElement(
          typeRow,
          {},
          value,
        )
      }
    </div>
  )
}

export default Row