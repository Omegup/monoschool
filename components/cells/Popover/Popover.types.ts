export type Position = 
  "bottom-center" | "bottom-left" | "bottom-right"  | 
  "right-center"  | "right-top"   | "right-bottom"  | 
  "left-center"   | "left-top"    | "left-bottom"   | 
  "top-center"    | "top-left"    | "top-right";

export type PopoverProps = {
  children: React.ReactNode
  preferredPosition: Position
  backdrop?: boolean
};

export type Rect = Pick<DOMRect, "left" | "top" | "height" | "width">

export type PopoverContextType = {
  isShow: boolean
  backdrop?: boolean
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
  preferredPosition: Position
  triggerRect: Rect
  setTriggerRect: React.Dispatch<React.SetStateAction<Rect>>
}
