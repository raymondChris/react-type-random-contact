import { FC } from 'react'
import './Cockpit.css'

import Icon from '../../Icon/Icon'
import {ICockpitProp} from '../../../shared/interfaces'
import {IconEnum} from '../../../shared/enums'

const Cockpit: FC<ICockpitProp> = (props) => {

    const {onHover} = props

    return (
        <div className="cockpit-container">
            <Icon active={false} onHover={onHover} type={IconEnum.USER}/>
            <Icon active={false} onHover={onHover} type={IconEnum.EMAIL}/>
            <Icon active={false} onHover={onHover} type={IconEnum.BIRTH}/>
            <Icon active={false} onHover={onHover} type={IconEnum.ADDRESS}/>
            <Icon active={false} onHover={onHover} type={IconEnum.PHONE}/>
            <Icon active={false} onHover={onHover} type={IconEnum.LOCK}/>
        </div>
    )
}

export default Cockpit