import React = require('react');

const withMyHOC = (Comp, config) => (props) => {
  console.log('dsd');
  return props.flag ? <Comp {...config} {...props} /> : null;
};

export default withMyHOC;
