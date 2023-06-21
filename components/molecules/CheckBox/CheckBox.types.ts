
export type CheckboxVariant = 'solid' | 'border' | 'scale';
export type CheckboxSize = 'large' | 'medium' | 'small';
export type CheckboxEvent =
  | 'focused'
  | 'hovered'
  | 'enabled'
  | 'hoveredOnEnable';

  export interface CheckboxEventsSelectors {
    focused: '& > $input:focus + $container';
    hovered: '& > $input:not(:checked) + $container:hover';
    enabled: '& > $input:checked + $container';
    hoveredOnEnable: '& > $input:checked + $container:hover';
  }
  
  export type VariantStyle<K extends keyof CheckboxEventsSelectors> = Record<
    CheckboxEventsSelectors[K],
    {
      outline?: string;
      color?: string;
      backgroundColor?: string;
      border?: string;
      outlineOffset?: number;
      borderColor?: string;
    }
  >;
  
  export type CheckboxCommonVariantStyles = VariantStyle<'focused'> &
    VariantStyle<'hovered'> &
    VariantStyle<'enabled'> &
    VariantStyle<'hoveredOnEnable'>;

export type CheckboxProps = {
  text?: string;
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  label?: string;
  enabled?: boolean;
  disabled?: boolean;
  focused?: boolean;
};
