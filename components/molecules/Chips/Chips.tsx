/* eslint-disable max-params */
import { Vector } from '@omegup-school/ui-assets';
import { ChipsProp } from './Chips.types';
import React from 'react';
import { ChipsContainer, ChipsLabel, ChipsPerson, Container } from '@omegup-school/ui-atoms';

export const Chips = ({ persons, label, onCancel }: ChipsProp) => {
  return (
    <Container >
      <ChipsContainer>
        <ChipsLabel label={label} />
        <Container paddingInline='s2'>
          {persons.map(({ avatar, name }, index, { length }) =>
            <ChipsPerson
              key={index}
              avatar={avatar}
              onCancel={() => onCancel(index)}
              isLastIndex={index + 1 < length}
              name={name}
            />
          )}
        </Container >
      </ChipsContainer>
    </Container>
  );
};
