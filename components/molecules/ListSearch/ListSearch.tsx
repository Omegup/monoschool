import { Container, ListSearchContent } from '@omegup-school/ui-atoms';
import React from 'react';
import { ListSearchProps } from './ListSearch.types';
import { Checkbox } from '../Checkbox';

export const ListSearch = ({ name, avatar, description,checked }: ListSearchProps) => {
  return (
    <Container alignItems='center' gap='s1' paddingBlock='s2' paddingInline='s4'>
      <Checkbox
        checked={checked}
        disabled={false}
        label=''
        onBlur={() => { }}
        onChange={() => { }}
        size='medium'
        variant='cell'
      />
      <ListSearchContent name={name} avatar={avatar} description={description} />
    </Container>
  );
};
