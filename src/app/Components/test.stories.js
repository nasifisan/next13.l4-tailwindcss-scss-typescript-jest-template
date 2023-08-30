import Test from './Test/Test.tsx';

const config = {
  title: 'My Test',
};

const Template = (arguments_) => <Test {...arguments_} />;

GreenTest.args = {
  name: 'Hello World',
  //   showSub: false,
  //   background: "yellow-600",
  //   imgUrl: "https://path/to/some/image",
  //   Children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
};

export const GreenTest = Template.bind({});

export default config;
