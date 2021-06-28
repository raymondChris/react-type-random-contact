import { FC } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faBirthdayCake, faMapMarked, faPhone, faLock} from '@fortawesome/free-solid-svg-icons'

import {IIconProp} from '../../shared/interfaces'
import {IconEnum} from '../../shared/enums'

const Icon: FC<IIconProp> = (props) => {

    const {onHover, active, type} = props

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
            <FontAwesomeIcon
                onMouseOver={onHover}
                color={active ? 'skyblue' : 'grey'}
                size="2x"
                icon={icon}
            /> 
    )
}

export default Icon