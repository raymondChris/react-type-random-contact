import {FC, useState} from 'react'
import './Card.css'

import Avatar from './AvatarSection/Avatar'
import Detail from './DetailSection/Detail'
import Cockpit from './CockpitSection/Cockpit'

import {  IUserInfo, IUserData } from '../../shared/interfaces'
import {IconEnum} from '../../shared/enums'

const Card: FC<IUserData> = ({userFullName,
   email,
   birthday,
   address,
   phone,
   password,
   profilePic}) => {

    const [selectedIndex, setSelectedIndex ] = useState<number>(0)

     const dataList: IUserInfo[] = [
         {
            type: IconEnum.USER,
            message: 'My name is',
            data: userFullName
         },
         {
            type: IconEnum.EMAIL,
            message: 'My email address is',
            data: email
         },
         {
            type: IconEnum.BIRTH,
            message: 'My birthday is',
            data: birthday
         },
         {
            type: IconEnum.ADDRESS,
            message: 'My address is',
            data: address
         },
         {
            type: IconEnum.PHONE,
            message: 'My phone number is',
            data: phone
         },
         {
            type: IconEnum.LOCK,
            message: 'My password is',
            data: password
         }
     ]

     const hoverHandler: (index: number) => void = (index) => {
        setSelectedIndex(index)
     }

    return (
        <div className="card">
            <Avatar
               image={profilePic}
            />
            <Detail
                subtitle={dataList[selectedIndex].message}
                content={dataList[selectedIndex].data}
            />
            <Cockpit
                list={dataList}
                onHover={hoverHandler}
                active={dataList[selectedIndex].type}
            />
        </div>
    )
}

export default Card
