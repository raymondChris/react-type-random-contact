import {IconEnum} from './enums'

export interface IIconProp {
    type: IconEnum,
    onHover: (selected: IconEnum) => void,
    active: boolean
}

export interface ICockpitProp {
    onHover: (selected: IconEnum) => void,
    active: boolean
}

export interface ICardProp {
    onHover: (selected: IconEnum) => void,
    active: boolean
}