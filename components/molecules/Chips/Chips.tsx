/* eslint-disable max-params */
import { ChipsProp } from './Chips.types';
import React from 'react';
import { ChipsContainer, ChipsLabel, ChipsContent, Container } from '@omegup-school/ui-atoms';

export const Chips = ({ persons, label, onCancel }: ChipsProp) => {
  return (
    <Container >
      <ChipsContainer>
        <ChipsLabel label={label} />
        <Container paddingInline='s2'>
          {persons.map(({ avatar, name }, index, { length }) =>
            <ChipsContent
              key={index}
              avatar={avatar}
              onCancel={() => onCancel(index)}
              isLastIndex={index + 1 >= length}
              name={name}
            />
          )}
        </Container >
      </ChipsContainer>
    </Container>
  );
};
