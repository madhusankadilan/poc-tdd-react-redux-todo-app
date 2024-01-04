import { render, screen, renderer } from "../../utils/test-utils";
import Textarea from "./Textarea";
import { Color, Size, Variant } from "./Textarea.types";


describe('INPUT', () => {
   describe('Component Rendering and Props Handling', () => {
      test('applies default styles and classes correctly', () => {
         const { container } = render(<Textarea />);
         const textarea = container.querySelector('textarea');
         expect(textarea).toHaveClass('dc-textarea dc-textarea-outlined-primary dc-textarea-medium');
      });

      test('renders the specified label correctly', () => {
         render(<Textarea label="Description" />);
         const label = screen.getByText('Description');
         expect(label).toBeInTheDocument();
      });

      describe('renders the specified color correctly', () => {
         const supportedColors: Color[] = ['primary', 'secondary', 'success', 'info', 'warning', 'error'];

         test.each(supportedColors)('renders with specified color - %s', (color: Color) => {
            const { container } = render(<Textarea color={color} />);
            const textarea = container.querySelector('textarea');
            expect(textarea).toHaveClass(`dc-textarea dc-textarea-outlined-${color} dc-textarea-medium`);
         });
      });

      describe('renders the specified variant correctly', () => {
         const supportedVariants: Variant[] = ['filled', 'outlined', 'standard'];

         test.each(supportedVariants)('renders with specified variant - %s', (variant: Variant) => {
            const { container } = render(<Textarea variant={variant} />);
            const textarea = container.querySelector('textarea');
            expect(textarea).toHaveClass(`dc-textarea dc-textarea-${variant}-primary dc-textarea-medium`);
         });
      });

      describe('renders the specified size correctly', () => {
         const supportedSizes: Size[] = ['small', 'medium', 'large'];

         test.each(supportedSizes)('renders with specified size - %s', (size: Size) => {
            const { container } = render(<Textarea size={size} />);
            const textarea = container.querySelector('textarea');
            expect(textarea).toHaveClass(`dc-textarea dc-textarea-outlined-primary dc-textarea-${size}`);
         });
      });

      test('renders the given set of props correctly', () => {
         const { container } = render(<Textarea size="small" color="success" variant="filled" />);
         const textarea = container.querySelector('textarea');
         expect(textarea).toHaveClass('dc-textarea dc-textarea-filled-success dc-textarea-small');
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
                  const tree = renderer.create(<Textarea size={size} color={color} variant={variant} />).toJSON();
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