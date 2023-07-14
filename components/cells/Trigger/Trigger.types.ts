import { DOMAttributes } from "react"

export type TriggerActions = 'click' | 'mouseEnter' | 'mouseLeave'
export type TriggerProps = {
  jump?: boolean,
  showOn: TriggerActions
  children: React.ReactElement
  closeOn?: TriggerActions
}

export const TriggerOn : {
  [k in TriggerActions]: keyof DOMAttributes<any>
} = {
  click: 'onClick',
  mouseEnter: 'onMouseEnter',
  mouseLeave: 'onMouseLeave'
}