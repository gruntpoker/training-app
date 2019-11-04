import React from 'react';
import { storiesOf } from '@storybook/react';
import HandMatrix from '../HandMatrix';
import PositionButtons from '../PositionButtons'

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