import { FC } from 'react'
import './Detail.css'

import {IDetailProp} from '../../../shared/interfaces'


const Detail: FC<IDetailProp> = ({subtitle, content}) => {

    return (
        <div className="detail-container">
            <div className="detail-subtitle">{subtitle}</div>
            <div className="detail-content">{content}</div>
        </div>
    )
}

export default Detail