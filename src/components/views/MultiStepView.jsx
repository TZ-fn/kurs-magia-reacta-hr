import React from 'react';
import * as MultiStep from '../MultiStep/MultiStep';

export default function MultiStepView() {
  return (
    <div>
      <h2 className='title is-3'>Compound Components Practice</h2>
      <MultiStep.Wizard>
        <MultiStep.Page pageIndex={1}>
          <div className='box'>
            <label htmlFor='first-name'>
              Your name
              <input id='first-name' placeholder='Please enter your name' />
            </label>
          </div>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={2}>
          <div className='box'>
            <label htmlFor='last-name'>
              Your last name
              <input id='last-name' placeholder='Please enter your last name' />
            </label>
          </div>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={3}>
          <div className='box'>
            <label htmlFor='phone-number'>
              Your phone number
              <input id='first-name' placeholder='Please enter your phone number' />
            </label>
          </div>
        </MultiStep.Page>
        <MultiStep.Controls />
      </MultiStep.Wizard>
    </div>
  );
}
