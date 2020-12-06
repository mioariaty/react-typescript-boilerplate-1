import React, { useState } from 'react';
import Section from 'components/Section';
import { Header } from 'containers/Header';
import { Text, View } from 'wiloke-react-core';
import Radio from 'components/Radio';

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

const AboutPage = () => {
  const [state, setstate] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setstate(event.target.value);
  };
  return (
    <View>
      <Header />
      <View container>
        <Section>
          <Radio size="medium">Hello</Radio>

          <Text tagName="h1">About Page</Text>

          <Radio.Group value={state} onChange={onChange} disabled>
            <Radio value="value1">Value1</Radio>
            <Radio value="value2">Value2</Radio>
            <Radio value="value3">Value3</Radio>
          </Radio.Group>

          <Radio.Group value={state} onChange={onChange}>
            <Radio.Button value={1} size="small">
              Hello1
            </Radio.Button>
            <Radio.Button value={2} size="small">
              Hello2
            </Radio.Button>
            <Radio.Button disabled value={3} size="small">
              Hello3
            </Radio.Button>
          </Radio.Group>

          <Radio.Group options={optionsWithDisabled}></Radio.Group>
        </Section>
      </View>
    </View>
  );
};

export default AboutPage;
