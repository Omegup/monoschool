import { IconProps } from './Icons.types';
import {
  Close,
  GridFive,
  GridNine,
  GridSix,
  Logo,
  SearchStatus,
  Square,
  Tick,
} from '../../../components/assets/icons';

export const Icons = ({ bold ,color}: IconProps) => (
  <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
    
    <Logo  />
    <Square color={color}/>
    <Tick color={color}/>
    <SearchStatus color={color}/>
    <Close color={color}/>
   <GridFive color={color}/>
   <GridNine color={color}/>
   <GridSix color={color}/>
  </div>
);
