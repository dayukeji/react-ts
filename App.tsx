import * as React from 'react';
import FinalComponent from './page';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen</p>
      <FinalComponent flag={true} id={555} />
    </div>
  );
}
