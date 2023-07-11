import { ControlledChipsButtonProps } from '@omegup-school/ui-atoms/ChipsButton/ChipsButton.types';
import { ControlledChipsContainerProps } from '@omegup-school/ui-atoms/ChipsContainer/ChipsContainer.types';




export type ControlledChipsProps = ControlledChipsContainerProps &
  ControlledChipsButtonProps & { label: string,secondIcon:JSX.Element,icon:JSX.Element};
