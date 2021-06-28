import {FC} from 'react'
import './Card.css'

import Avatar from './AvatarSection/Avatar'
import Detail from './DetailSection/Detail'
import Cockpit from './CockpitSection/Cockpit'

import {ICardProp} from '../../shared/interfaces'

const Card: FC<ICardProp> = (props) => {

    const {onHover, active} = props

    return (
        <div className="card">
            <Avatar/>
            <Detail/>
            <Cockpit
                onHover={onHover}
                active={active}
            />
        </div>
    )
}

export default Card
