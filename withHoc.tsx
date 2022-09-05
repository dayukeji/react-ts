import React = require('react');

const withMyHOC = (config, WrappedComponent) => {
  
  return () => <WrappedComponent />;
};

const TestComponent = (props) => {
  return <div>11333-{props}</div>;
};

const FinalComponent = withMyHOC(TestComponent);

export default FinalComponent;
