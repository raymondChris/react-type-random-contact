import { FC } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faBirthdayCake, faMapMarked, faPhone, faLock} from '@fortawesome/free-solid-svg-icons'

import {IIconProp} from '../../../../shared/interfaces'
import {IconEnum} from '../../../../shared/enums'

import './Icon.css'

const Icon: FC<IIconProp> = ({index, onHover, active, type}) => {

    let icon
    switch (type) {
        case (IconEnum.EMAIL): icon = faEnvelope;  break;
        case (IconEnum.BIRTH): icon = faBirthdayCake;  break;
        case (IconEnum.ADDRESS): icon = faMapMarked;  break;
        case (IconEnum.PHONE): icon = faPhone;  break;
        case (IconEnum.LOCK): icon = faLock;  break;
        case (IconEnum.USER):
        default:
            icon = faUser
            break;
    }

    return (
        <div className="icon-container">
        <div className="icon-active_border" style={{visibility: active === type ? 'visible': 'hidden'}}>
        </div> 
        <FontAwesomeIcon
            className="icon"
            style={{cursor: 'pointer'}}
            onMouseOver={() => onHover(index)}
            color={active === type ? 'royalblue': 'lightgrey'}
            size="2x"
            icon={icon}
        /> 
        </div>
    )
}

export default Icon