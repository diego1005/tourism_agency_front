import './UiButton.css'

export default function UiButton({icon, action}) {
  return (
    <div className='ui-button-container'>
      <div className='ui-button'>
        <i className={`fa-solid ${icon}`}></i>
        <p>{action}</p>
      </div>
    </div>
  )
}
