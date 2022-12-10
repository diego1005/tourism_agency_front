
export default function FormButton({ formButton }) {

    const { classBtnContainer, btnClass, value } = formButton;

    return (
        <div className={`btn-container ${classBtnContainer}`}>
            <input
                type="submit"
                className={`btn-input ${btnClass}`}
                value={value}
            />
        </div>
    )
}
