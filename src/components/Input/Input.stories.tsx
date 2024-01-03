import type { Meta } from '@storybook/react';
import InputComponent from './Input';

type Props = {
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
  variant?: 'filled' | 'outlined'| 'standard';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  label?: string;
};

const meta = {
  title: 'Example/Input',
  component: InputComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
    },
  },
} satisfies Meta<typeof InputComponent>;

export default meta;

export const Input = (props: Props) => <InputComponent {...props} />
