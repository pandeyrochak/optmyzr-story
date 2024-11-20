"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { Typography } from "../Typography/Typography";
import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  className?: string;
  id?: string;
  containerClassName?: string;
  labelClassName?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      label,
      placeholder = "Select an option",
      className,
      id,
      containerClassName,
      labelClassName,
      error,
      value,
      onChange,
      disabled = false,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
      options.find((opt) => opt.value === value) || null
    );
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: SelectOption) => {
      setSelectedOption(option);
      setIsOpen(false);
      onChange?.(option.value);
    };

    return (
      <div
        className={cn("relative w-full", containerClassName)}
        ref={selectRef}
      >
        {label && (
          <Typography
            variant="label"
            className={cn("mb-1", labelClassName)}
          >
            {label}
          </Typography>
        )}
        <div
          ref={ref}
          className={cn(
            "relative cursor-pointer",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <div
            id={id}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={cn(
              "flex h-[38px] w-full items-center justify-between rounded-[4px] border border-border bg-white px-3 py-2",
              error && "border-red-500",
              className
            )}
          >
            {selectedOption ? (
              <Typography 
                variant="label"
                className="text-darkGrey"
              >
                {selectedOption.label}
              </Typography>
            ) : (
              <Typography 
                variant="label" 
                className="text-placeholder"
              >
                {placeholder}
              </Typography>
            )}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200 text-placeholder",
                isOpen && "rotate-180"
              )}
            />
          </div>

          {isOpen && (
            <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-[4px] border border-border bg-white py-1 shadow-[0px 6px 12px 0px #2D3A481F]">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={cn(
                    "flex cursor-pointer items-center px-3 py-2 transition-colors hover:bg-secondary",
                    selectedOption?.value === option.value && "bg-lightGrey"
                  )}
                  onClick={() => handleSelect(option)}
                >
                  <Typography 
                    variant="label"
                    className="text-darkGrey"
                  >
                    {option.label}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>
        {error && (
          <Typography
            variant="body3"
            className="mt-1 text-red-500"
          >
            {error}
          </Typography>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select, type SelectProps, type SelectOption };
