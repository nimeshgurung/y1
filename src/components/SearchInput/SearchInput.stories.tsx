import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import SearchInput from './SearchInput';
import { CountAdornment } from './';

interface MockOption {
  id: number;
  title: string;
  [key: string]: string | number;
}

const mockOptions: MockOption[] = [
  { id: 1, title: 'Search Result 1' },
  { id: 2, title: 'Another Result 2' },
  { id: 3, title: 'Third Search Item' },
  { id: 4, title: 'Fourth Result' },
  { id: 5, title: 'Fifth Search Option' },
];

const meta: Meta<typeof SearchInput> = {
  title: 'Input/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchInput<MockOption>>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    inputValue: '',
    options: mockOptions,
    getOptionLabel: (option: MockOption) => option.title,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const FixedWidth: Story = {
  args: {
    ...Default.args,
    width: 300, // 300px fixed width
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    width: '100%',
  },
  parameters: {
    layout: 'padded',
  },
};

export const Interactive = () => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (_event: React.SyntheticEvent, value: string) => {
    setInputValue(value);
    if (value.length > 0) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  };

  return (
    <SearchInput<MockOption>
      placeholder="Type to search..."
      inputValue={inputValue}
      onInputChange={handleInputChange}
      loading={loading}
      options={mockOptions}
      getOptionLabel={(option) => option.title}
      endAdornment={({ loading }) => (
        <CountAdornment
          loading={loading}
          inputValue={inputValue}
          minimumCharacterCount={3}
        />
      )}
    />
  );
};