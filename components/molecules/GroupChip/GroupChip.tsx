/* eslint-disable max-params */
import { GroupChipContainer, GroupChipContent, GroupChipLabel, Container } from '@omegup-school/ui-atoms';
import { GroupChipsProps } from './GroupChip.types';

export const GroupChip = ({ persons, label, onCancel }: GroupChipsProps) => {
  return (
    <Container >
      <GroupChipContainer>
        <GroupChipLabel label={label} />
        <Container paddingInline='s2'>
          {persons.map(({ avatar, name }, index, { length }) =>
            <GroupChipContent
              key={index}
              avatar={avatar}
              onCancel={() => onCancel(index)}
              isLastIndex={index + 1 >= length}
              name={name}
            />
          )}
        </Container >
      </GroupChipContainer>
    </Container>
  );
};
