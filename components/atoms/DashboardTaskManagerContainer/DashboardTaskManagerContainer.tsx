import { forwardRef } from 'react';
import { DashboardTaskManagerContainerProps } from './DashboardTaskManagerContainer.type';
import { useDashboardTaskManagerContainerStyle } from './DashboardTaskManagerContainer.style';

export const DashboardTaskManagerContainer = forwardRef(
  (
    props: DashboardTaskManagerContainerProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { header, body } = props;
    const classes = useDashboardTaskManagerContainerStyle();
    return (
      <div className={classes.container} {...{ ref }}>
        <div className={classes.header}>{header}</div>
        <div className={classes.body}>{body}</div>
      </div>
    );
  }
);
