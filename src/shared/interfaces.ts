import {IconEnum} from './enums'
export interface IIconProp {
    active: IconEnum
    index: number
    type: IconEnum,
    onHover: (selected: number) => void,
}

export interface IButtonProp {
    clicked: () => void
}
export interface IAvatarProp {
    image: string
}
export interface ICockpitProp {
    list: IUserInfo[]
    onHover: (index: number) => void,
    active: IconEnum
}
export interface IDetailProp {
    subtitle: string,
    content: string,
}
export interface IUserInfo {
    type: IconEnum,
    message: string
    data: string
}

export interface IUserData {
    userFullName: string,
    email: string,
    birthday: string,
    address: string,
    phone: string,
    password: string,
    profilePic: string
}