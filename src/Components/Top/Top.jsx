import './Top.css';

export default function Top({ classComponent = null, caption }) {
  return (
    <div className={classComponent ? classComponent : "top"}>
      <h2>{caption}</h2>

      {/* TO DO: Crear componente SearchBar  */}
      <input type="password" name="" id="" />
    </div>
  )
}
