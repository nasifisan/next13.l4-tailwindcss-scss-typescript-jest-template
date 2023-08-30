import Test from './Test/Test.tsx';

export default {
  title: "My Test",
};

const Template = (arguments_) => <Test {...arguments_} />;

export const GreenTest = Template.bind({});

GreenTest.args = {
  name: "Hello World",
//   showSub: false,
//   background: "yellow-600",
//   imgUrl: "https://path/to/some/image",
//   Children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
};
