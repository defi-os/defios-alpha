import { forwardRef } from 'react';
import cn from 'classnames';

type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, inputClassName, ...props }, ref) => (
    <div className={cn('text-xs sm:text-sm', className)}>
      <label>
        {label && (
          <span className="mb-2 block font-medium uppercase tracking-widest text-gray-100 sm:mb-3">
            {label}
            <sup className="ml-1 inline-block text-[13px] text-red-500">*</sup>
          </span>
        )}
        <textarea
          ref={ref}
          {...props}
          className={cn(
            'gradient-border mt-1 block h-24 w-full rounded-md border-2 border-gray-700 bg-light-gray px-4 py-3 text-sm text-gray-100  placeholder-gray-400 transition-shadow duration-200 invalid:border-red-500 invalid:text-red-600 focus:border-gray-600 focus:outline-none focus:invalid:border-red-500 focus:invalid:ring-red-500 disabled:border-gray-700 disabled:text-gray-500 sm:h-28 sm:rounded-lg',
            inputClassName
          )}
        />
      </label>
      {error && (
        <span role="alert" className="mt-2 block text-red-500 sm:mt-2.5">
          {error}
        </span>
      )}
    </div>
  )
);

Textarea.displayName = 'Textarea';
export default Textarea;
