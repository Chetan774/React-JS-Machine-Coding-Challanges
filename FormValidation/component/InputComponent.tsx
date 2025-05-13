export const InputComponent = ({type, label, handleChange, value, error}) =>{
    return (
        <div>
            <span>{label}</span>
            <input type={type} onChange={handleChange} value = {value} />
            <div>{error.length > 0 && error}</div>
        </div>
    )
}