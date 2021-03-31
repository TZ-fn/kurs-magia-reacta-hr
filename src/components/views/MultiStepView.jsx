import React from 'react';
import * as MultiStep from '../MultiStep/MultiStep';

export default function MultiStepView() {
  return (
    <div>
      <h2 className='title is-3'>Compound Components Practice</h2>
      <MultiStep.Wizard>
        <MultiStep.Page>1</MultiStep.Page>
        <MultiStep.Page>2</MultiStep.Page>
        <MultiStep.Page>3</MultiStep.Page>
        <MultiStep.Controls />
      </MultiStep.Wizard>
    </div>
  );
}
