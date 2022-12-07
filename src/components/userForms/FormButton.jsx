
export default function FormButton({ content }) {
    const {className, value} = content;
    return (
        <div className="btn-ctr">
            <input type='submit' className={className} value={value} />
        </div>
    )
}
