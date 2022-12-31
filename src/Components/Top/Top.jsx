import './Top.css';

export default function Top({ classComponent = null, classIcon, caption }) {
  return (
    <div className={classComponent ? classComponent : "top"}>
      <i className={classIcon}>
        <em>{caption}</em>
      </i>
    </div>
  )
}
