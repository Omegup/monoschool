import {
  AvatarImage,
  Container,
  DashboardTaskAvatar,
  DashboardTaskManagerContainer,
  TaskItem,
  Text,
} from '@omegup-school/ui-atoms';
import { forwardRef } from 'react';
import { DashboardTaskManagerProps } from './DashboardTaskManager.type';

export const DashboardTaskManager = forwardRef(
  (props: DashboardTaskManagerProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      list,
      dictionary,
      onPersonnelClick,
      personnel,
      onTaskClick,
      selectedPersonel,
    } = props;
    return (
      <DashboardTaskManagerContainer
        ref={ref}
        body={
          <Container
            paddingInline="s5"
            paddingBlock="s5"
            gap="s8"
            direction="column"
            alignItems='stretch'
          >
            {list.map((item, i) => (
              <TaskItem
                finishedTaskText={dictionary.finishedTaskText}
                key={item.id}
                text={item.text}
                checked={item.checked}
                onClick={() => onTaskClick(item.id)}
              />
            ))}
          </Container>
        }
        header={
          <Container paddingBlock="s5">
            <Container paddingBlock="s5" paddingInline="s5">
              <Text
                variant="paragraph_medium_medium"
                text={dictionary.label}
              ></Text>
            </Container>
            <Container gap="s11" paddingInline="s5">
              {personnel.map((item) => (
                <DashboardTaskAvatar
                  selected={item.id === selectedPersonel}
                  key={item.id}
                  size="large"
                  onClick={() => onPersonnelClick(item.id)}
                >
                  <AvatarImage src={item.img} />
                </DashboardTaskAvatar>
              ))}
            </Container>
          </Container>
        }
      />
    );
  }
);
