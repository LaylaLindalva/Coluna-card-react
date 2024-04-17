import './Button.css'

const Button = ({text, color}) => {
    return(
        <button style={{color: color}}>{text}</button>
    )
}

export default Button;