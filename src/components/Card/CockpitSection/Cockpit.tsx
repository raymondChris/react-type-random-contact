import { FC } from 'react'
import './Cockpit.css'

import Icon from './IconList/Icon'
import {ICockpitProp} from '../../../shared/interfaces'

const Cockpit: FC<ICockpitProp> = ({onHover, list, active}) => {

    const iconList = list.map((data,i) => <Icon
            key={data.type+i}
            active={active}
            index={i}
            onHover={onHover}
            type={data.type}
        />
    )

    return (
        <div className="cockpit-container">
            {iconList}
        </div>
    )
}

export default Cockpit