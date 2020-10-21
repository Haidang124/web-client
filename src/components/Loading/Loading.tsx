import React from 'react';
import { Section } from '../../utils/help';
import ReactLoading from 'react-loading';

const Loading: React.FC = () => (
  <Section>
    <ReactLoading
      type={'bubbles'}
      color="#f77b00"
      height={'10%'}
      width={'10%'}
    />
  </Section>
);
export default Loading;
