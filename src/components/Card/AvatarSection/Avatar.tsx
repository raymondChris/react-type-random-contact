import { FC } from 'react'
import './Avatar.css'

import {IAvatarProp} from '../../../shared/interfaces'

const Avatar: FC<IAvatarProp> = ({image}) => {
    return(
        <div className="avatar-container">
            <div className="avatar-background">
                <div className="avatar-image_container">
                    <img src={image} alt="profileImg"/>
                </div>
            </div>
        </div>
    )
}

export default Avatar