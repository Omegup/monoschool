import { Container } from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { CardDoubleText } from '../CardDoubleText';
import { CardIconedDetailProps } from './CardIconedDetail.types';

export const CardIconedDetail = forwardRef(
  (props: CardIconedDetailProps, ref: React.Ref<HTMLDivElement>) => {
    const { text, subText, icon } = props;

    return (
      <Container ref={ref} direction="row" alignItems="center" gap={'s5'}>
        <Container ref={ref} paddingBlock={'s5'} paddingInline={'s5'}>
          {[icon]}
        </Container>
        <CardDoubleText subText={subText} text={text} />
      </Container>
    );
  }
);
