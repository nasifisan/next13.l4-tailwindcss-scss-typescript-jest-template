import { twMerge } from 'tailwind-merge';
import { button } from '../../../variants/Button';

interface Props {
  name: string;
  intent?: 'primary' | 'secondary' | null | undefined;
  textSize?: 'xl' | 'md' | 'sm' | 'xs' | null | undefined;
  buttonClass?: string | null | undefined;
  onClick?: () => void;
}

const AppButton = ({ name, intent, textSize, buttonClass, onClick }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        className={twMerge(`${button({ intent: intent, textSize: textSize })} ${buttonClass ?? buttonClass}`)}
      >
        {name}
      </button>
    </>
  );
};

export default AppButton;
