import { twMerge } from 'tailwind-merge';
import { button } from '../../../variants/Button';

interface Props {
  name: string;
  intent?: 'primary' | 'secondary' | null | undefined;
  textSize?: 'xl' | 'md' | 'sm' | 'xs' | null | undefined;
}

const AppButton = ({ name, intent, textSize }: Props) => {
  return (
    <>
      <button onClick={() => {}} className={twMerge(button({ intent: intent, textSize: textSize }))}>
        {name}
      </button>
    </>
  );
};

export default AppButton;
