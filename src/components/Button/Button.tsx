import { FC } from 'react'
import './Button.css'
import { IButtonProp } from '../../shared/interfaces'

const Button: FC<IButtonProp> = ({clicked}) => {
    return(
        <button onClick={clicked}>
            GET NEW
        </button>
    )
}

export default Button