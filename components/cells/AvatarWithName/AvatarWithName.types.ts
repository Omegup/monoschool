import { ReactNode } from "react";

export interface AvatarWithNameProps {

}
export interface ControlledAvatarWithNameProps extends AvatarWithNameProps {
  text: string;
  avatar: ReactNode;
  onClick?: () => void;
}
