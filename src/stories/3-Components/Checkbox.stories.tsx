import React, { useState } from 'react';
import Checkbox from 'components/Checkbox';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Size } from 'wiloke-react-core';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);
  let size;
  let checked;
  let disabled;
  if (!isLoading) {
    checked = boolean('Checked', false);
    disabled = boolean('Disabled', false);
    size = select(
      'Size',
      getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
      'medium',
    ) as any;
  }
  const [checkedState, setCheckedState] = useState(checked);

  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(!checkedState);
    action('onClick')(event.target);
  };

  return isLoading ? (
    <Checkbox.Loading />
  ) : (
    <Checkbox disabled={disabled} size={size} checked={checked} onChange={_handleChange}>
      {text('Children', 'Day la checkbox')}
    </Checkbox>
  );
};
