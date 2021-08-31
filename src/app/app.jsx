import React from 'react';
import './app.module.scss';
import Overlay from '../components/overlay/overlay';
import Schedule from '../components/schedule/schedule';

export default function App() {
  return (
    <Overlay>
      <Schedule />
    </Overlay>
  );
}
