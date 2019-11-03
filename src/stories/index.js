import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import RangeSelector from '../HandMatrix'
import HandMatrix from '../HandMatrix';
import PositionButtons from '../PositionButtons'
import NavPositionSelector from '../NavPositionSelector'
import { Router, Route } from 'react-router';
import { MemoryRouter } from 'react-router';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('HandMatrix', module)
  .add('it renders', () => (
    <HandMatrix />
  ));

storiesOf('PositionButtons', module)
  .add('One Outline Warning ', () => {
    const buttons = [
      {value:0, variant: 'outline-warning'},
      {value:1, variant: 'outline-info'},
      {value:2, variant: 'outline-info'},
      {value:3, variant: 'outline-info'},
      {value:4, variant: 'outline-info'},
      {value:5, variant: 'outline-info'}
    ]
    return (
    <PositionButtons buttons={buttons} />
    )
  })