import React = require('react');
import withMyHOC from './withHoc';
const TestComponent = ({ name, id }) => {
  return (
    <div>
      11333--{name}--{id}
    </div>
  );
};

const Comp = withMyHOC(TestComponent, {});
export default Comp;
