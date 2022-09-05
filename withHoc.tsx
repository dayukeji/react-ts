import React = require('react');

const withMyHOC = (Comp, config) => (props) => {
  console.log('dsd');
  return 1 ? <Comp {...config} {...config} /> : null;
};

export default withMyHOC;
