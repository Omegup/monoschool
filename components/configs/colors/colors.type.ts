import { Record } from 'omegup-school';

type ColorLevels =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type Palette<l extends string = ColorLevels> = Record<l, string>;

export type SimpleColors =
  | 'headline'
  | 'blue'
  | 'pink'
  | 'grey'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'lightblue';
export type Gradients = 'gradient-blue' | 'gradient-pink';
export type ColorsPalette = Record<SimpleColors, Palette> & {
  background: Palette<'default' | 'secondary' | 'overlay' | 'outline'>;
  dark: Palette<'default' | 'overlay' | 'overline'>;
};

export type GradientsPalette = Record<
  Gradients,
  Record<ColorLevels, readonly string[]>
>;

