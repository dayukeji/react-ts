import React = require('react');

const withMyHOC = (Comp) => (props) => {
  console.log('dsd');
  const _props = {
    ...props,
    yy: 'yy',
  };
  return () => <Comp {..._props} />;
};

const TestComponent = ({ name, yy }) => {
  return <div>11333--{name}-{yy}</div>;
};

const FinalComponent = withMyHOC(TestComponent)({ name: '121' });

export default FinalComponent;
