import { createUseStyles } from "react-jss";
import { styles } from "../common/styles";
import { TextProps } from "./Text.types";

export const useTextStyles = createUseStyles({
  ...styles,

  text: {
    lineHeigt: ({ lineHeigt }: Partial<TextProps>) => lineHeigt ? lineHeigt : 'inherit',
    letterSpacing: ({ letterSpacing }: Partial<TextProps>) => letterSpacing ? letterSpacing : 'inherit',
    textTransform: ({ textTransform }: Partial<TextProps>) => textTransform ? textTransform : 'inherit',
    color: ({ color }: Partial<TextProps>) => color,

  }
})
