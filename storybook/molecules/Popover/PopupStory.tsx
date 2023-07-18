
import { Popover } from '@omegup-school/ui-molecules';
import { Close } from '@omegup-school/ui-molecules/Close'

export const PopupStory = ({ backdrop, testLabel }: { backdrop: boolean, testLabel: string }) => {

  return (<>
    <Popover backdrop={backdrop} preferredPosition='center'>
      <Popover.Trigger showOn='click'>
        <button>{testLabel}</button>
      </Popover.Trigger>
      <Popover.Content>
        <div style={{border: '1px solid #ccc', borderRadius:5, padding:50}}>{testLabel}
        <br/>
        <Close><button>close</button></Close>
        </div>
        
      </Popover.Content>
    </Popover>
  </>);
};