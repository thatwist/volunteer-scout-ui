import React from 'react';
import { NumericMenu } from 'react-instantsearch-dom';
import { DATE_RANGES } from '../consts';

export default () => (
  <NumericMenu
    attribute="date_bucket"
    items={DATE_RANGES}
    translations={{
      all: 'Увесь час',
    }}
    // defaultRefinement=":25"
  />
);
