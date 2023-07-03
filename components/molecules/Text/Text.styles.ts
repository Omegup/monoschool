import { createUseStyles } from "react-jss";
import { TextProps } from "./Text.types";

const SIZES = { small: 14, medium: 16, XSmall: 12, large: 18 }
export const useTextStyles = createUseStyles({
  textStyle: {
    fontWeight: ({ weight }: Partial<TextProps>) => weight,
    fontSize: ({ size }: Partial<TextProps>) => SIZES[size!]
  }
}) 