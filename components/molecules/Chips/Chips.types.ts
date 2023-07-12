import { ControlledChipsButtonProps } from '@omegup-school/ui-atoms/ChipsButton/ChipsButton.types';
import { ControlledChipsContainerProps } from '@omegup-school/ui-atoms/ChipsContainer/ChipsContainer.types';




export type ControlledChipsProps = Omit<ControlledChipsContainerProps,"children"> &
  ControlledChipsButtonProps & { label: string,ClearIcon:JSX.Element};
