import Test from './Test';

const config = {
  title: 'My Test',
};

// Define the Template function
const Template = (arguments_) => {
  return (
    <>
      <Test {...arguments_} />
    </>
  );
};

export default config;

// Define the GreenTest story and set its properties (args)
export const GreenTest = Template.bind({});
GreenTest.args = {
  name: 'Hello World',
  intent: 'primary',
  //   showSub: false,
  //   background: "yellow-600",
  //   imgUrl: "https://path/to/some/image",
  //   Children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
};
