import { render, screen, renderer } from "../../utils//test-utils";
import Input from "./Input";
import { Color, Size, Variant } from "./Input.types";


describe('INPUT', () => {
   describe('Component Rendering and Props Handling', () => {
      test('applies default styles and classes correctly', () => {
         const { container } = render(<Input />);
         const input = container.querySelector('input');
         expect(input).toHaveClass('dc-input dc-input-outlined-primary dc-input-medium');
      });

      test('renders the specified label correctly', () => {
         render(<Input label="First Name" />);
         const label = screen.getByText('First Name');
         expect(label).toBeInTheDocument();
      });

      describe('renders the specified color correctly', () => {
         const supportedColors: Color[] = ['primary', 'secondary', 'success', 'info', 'warning', 'error'];

         test.each(supportedColors)('renders with specified color - %s', (color: Color) => {
            const { container } = render(<Input color={color} />);
            const input = container.querySelector('input');
            expect(input).toHaveClass(`dc-input dc-input-outlined-${color} dc-input-medium`);
         });
      });

      describe('renders the specified variant correctly', () => {
         const supportedVariants: Variant[] = ['filled', 'outlined', 'standard'];

         test.each(supportedVariants)('renders with specified variant - %s', (variant: Variant) => {
            const { container } = render(<Input variant={variant} />);
            const input = container.querySelector('input');
            expect(input).toHaveClass(`dc-input dc-input-${variant}-primary dc-input-medium`);
         });
      });

      describe('renders the specified size correctly', () => {
         const supportedSizes: Size[] = ['small', 'medium', 'large'];

         test.each(supportedSizes)('renders with specified size - %s', (size: Size) => {
            const { container } = render(<Input size={size} />);
            const input = container.querySelector('input');
            expect(input).toHaveClass(`dc-input dc-input-outlined-primary dc-input-${size}`);
         });
      });

      test('renders the given set of props correctly', () => {
         const { container } = render(<Input size="small" color="success" variant="filled" />);
         const input = container.querySelector('input');
         expect(input).toHaveClass('dc-input dc-input-filled-success dc-input-small');
      });
   });

   // Test interactions within component (testing event handlers, state changes, and component updates triggered by user interactions)
   describe('Component Interactions and State Management', () => {
      test('test', () => {

      });

      test('test', () => {

      })
   });

   describe('Component Error Handling', () => {
      test('test', () => {

      })
   });

   describe('Snapshot Testing', () => {
      const supportedSizes: Size[] = ['small', 'medium', 'large'];
      const supportedVariants: Variant[] = ['filled', 'outlined', 'standard'];
      const supportedColors: Color[] = ['primary', 'secondary', 'success', 'info', 'warning', 'error'];

      for (const color of supportedColors) {
         for (const variant of supportedVariants) {
            for (const size of supportedSizes) {
               test(`Snapshot Testing - ${color}, ${variant}, ${size}`, () => {
                  const tree = renderer.create(<Input size={size} color={color} variant={variant} />).toJSON();
                  expect(tree).toMatchSnapshot();
               });
            }
         }
      }
   });

   describe('Integration Testing', () => {
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