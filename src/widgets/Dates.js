import React from 'react';
import { NumericMenu } from 'react-instantsearch-dom';
import { DATE_RANGES } from '../consts';

export default () => <NumericMenu attribute="date" items={DATE_RANGES} />;
