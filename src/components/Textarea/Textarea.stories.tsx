import type { Meta } from '@storybook/react';
import TextareaComponent from './Textarea';

type Props = {
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
  variant?: 'filled' | 'outlined'| 'standard';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  label?: string;
};

const meta = {
  title: 'Example/Textarea',
  component: TextareaComponent,
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
} satisfies Meta<typeof TextareaComponent>;

export default meta;

export const Textarea = (props: Props) => <TextareaComponent {...props} />
