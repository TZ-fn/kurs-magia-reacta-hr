import React from 'react';
import MultiStep, { Page, Controls } from '../MultiStep/MultiStep';

export default function MultiStepView() {
  return (
    <div>
      <h2 className='title is-3'>Compound Components Practice</h2>
      <MultiStep>
        <Page>1</Page>
        <Page>2</Page>
        <Page>3</Page>
        <Controls />
      </MultiStep>
    </div>
  );
}
