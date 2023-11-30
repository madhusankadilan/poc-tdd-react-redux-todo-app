import { render, screen } from "../../utils//test-utils";
import Button from './Button';
import { Color, Size, Variant } from "./Button.types";

describe('BUTTON', () => {
   describe('Component Rendering', () => {
      test('renders the button text correctly', () => {
         render(<Button>Click me</Button>);
         const button = screen.getByText('Click me');
         expect(button).toBeInTheDocument();
      });

      test('applies default styles and classes correctly', () => {
         const { container } = render(<Button>Click me</Button>);
         const button = container.querySelector('button');
         expect(button).toHaveClass('dc-button dc-button-contained-primary dc-button-medium');
      });

      describe('renders the specified color correctly', () => {
         const supportedColors: Color[] = ['primary', 'secondary', 'success', 'info', 'warning', 'error'];

         test.each(supportedColors)('renders with specified color - %s', (color: Color) => {
            const { container } = render(<Button color={color}>Click me</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass(`dc-button dc-button-contained-${color} dc-button-medium`);
         });
      });

      describe('renders the specified variant correctly', () => {
         const supportedVariants: Variant[] = ['contained', 'outlined', 'text'];

         test.each(supportedVariants)('renders with specified variant - %s', (variant: Variant) => {
            const { container } = render(<Button variant={variant}>Click me</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass(`dc-button dc-button-${variant}-primary dc-button-medium`);
         });
      });

      describe('renders the specified size correctly', () => {
         const supportedSizes: Size[] = ['small', 'medium', 'large'];

         test.each(supportedSizes)('renders with specified size - %s', (size: Size) => {
            const { container } = render(<Button size={size}>Click me</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass(`dc-button dc-button-contained-primary dc-button-${size}`);
         });
      });

      test('renders the given set of props correctly', () => {
         const { container } = render(<Button size="small" color="success" variant="outlined">Click me</Button>);
         const button = container.querySelector('button');
         expect(button).toHaveClass('dc-button dc-button-outlined-success dc-button-small');
      });
   });

   describe('Component Interactions', () => {
      test('test', () => {

      });

      test('test', () => {

      })
   });

   describe('Accessibility', () => {
      test('test', () => {

      })
   });

   describe('Edge Cases', () => {
      test('test', () => {

      })
   });
})