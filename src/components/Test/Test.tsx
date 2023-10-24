import AppButton from '../Buttons/AppButton';

const Test = ({ name, intent }: { name: any; intent: any }) => {
  return (
    <div className=" h-96 w-96 text-black bg-slate-600 flex flex-col justify-center">
      <AppButton name={name} intent={intent} />
    </div>
  );
};

export default Test;
