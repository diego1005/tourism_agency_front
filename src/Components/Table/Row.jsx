import { createElement } from "react"
import Separator from "../Separator/Separator"

function Row({ tag, value }) {

  const styleSeparator = "vertical-slash";

  return (
    <>
      {
        createElement(
          tag ? tag : "td",
          {},
          value,
        )
      }
      <Separator styleSeparator={styleSeparator} />
    </>
  )
}

export default Row