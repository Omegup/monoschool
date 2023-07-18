import { createContainerContext } from './createContainerContext';

export const {
  Context: ContainerStateContext,
  use: useContainerStateSelector,
} = createContainerContext<string>('container state selector');
