import React = require('react');

const withMyHOC = (Comp) => (props) => {
  console.log('dsd');
  const _props = {
    ...props,
    yy: 'yy',
  };
  return () => 1 ? <Comp {..._props} /> : null;
  
};

const TestComponent = ({ name, yy }) => {
  return (
    <div>
      11333--{name}-{yy}
    </div>
  );
};

const FinalComponent = withMyHOC(TestComponent)({ name: '121' });

export default FinalComponent;
