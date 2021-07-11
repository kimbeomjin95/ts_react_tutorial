import React from 'react';
import ContextSample from './ContextSample';
import Counter from './counter';
import Greetings from './Greetings';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

function App() {
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
}

export default App;
