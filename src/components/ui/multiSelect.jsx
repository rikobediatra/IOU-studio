"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import {
  CheckIcon,
  XCircle,
  ChevronDown,
  XIcon,
  WandSparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

/**
 * Variants for the multi-select component.
 * Menggunakan class-variance-authority untuk styling.
 */
const multiSelectVariants = cva("m-1 transition-all duration-300 ease-in-out", {
  variants: {
    variant: {
      default: "border-foreground/10 text-foreground/60 bg-card hover:bg-card/80",
      secondary:
        "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      inverted: "inverted",
    },
    badgeAnimation: {
      bounce: "hover:-translate-y-1 hover:scale-110",
      pulse: "hover:animate-pulse",
      wiggle: "hover:animate-wiggle",
      fade: "hover:opacity-80",
      slide: "hover:translate-x-1",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
    badgeAnimation: "bounce",
  },
});

export const MultiSelect = React.forwardRef(
  (
    {
      options,
      onValueChange,
      variant,
      defaultValue = [],
      placeholder = "Select options...",
      animation = 0,
      animationConfig,
      maxCount = 3,
      modalPopover = false,
      asChild = false,
      className,
      hideSelectAll = false,
      searchable = true,
      emptyIndicator = "No results found.",
      autoSize = false,
      singleLine = false,
      popoverClassName,
      disabled = false,
      responsive,
      minWidth,
      maxWidth,
      deduplicateOptions = false,
      resetOnDefaultValueChange = true,
      closeOnSelect = false,
      badgeAnimation,
      ...props
    },
    ref,
  ) => {
    // State internal untuk mengelola nilai yang dipilih
    const [selectedValues, setSelectedValues] = React.useState(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

    // Sinkronisasi dengan defaultValue jika prop berubah
    React.useEffect(() => {
      if (resetOnDefaultValueChange) {
        setSelectedValues(defaultValue);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(defaultValue), resetOnDefaultValueChange]);

    // Ekspos method ke parent via ref
    React.useImperativeHandle(ref, () => ({
      reset: () => {
        setSelectedValues(defaultValue);
        onValueChange(defaultValue);
      },
      getSelectedValues: () => selectedValues,
      setSelectedValues: (values) => {
        setSelectedValues(values);
        onValueChange(values);
      },
      clear: () => {
        setSelectedValues([]);
        onValueChange([]);
      },
      focus: () => {
        // Logic focus bisa ditambahkan di sini jika diperlukan pada trigger
      },
    }));

    const handleInputKeyDown = (event) => {
      if (event.key === "Enter") {
        setIsPopoverOpen(true);
      } else if (event.key === "Backspace" && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues];
        newSelectedValues.pop();
        setSelectedValues(newSelectedValues);
        onValueChange(newSelectedValues);
      }
    };

    const toggleOption = (value) => {
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
      if (closeOnSelect) setIsPopoverOpen(false);
    };

    const handleClear = () => {
      setSelectedValues([]);
      onValueChange([]);
    };

    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount);
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const toggleAll = () => {
      // Flatten options jika ada grouping
      const allOptions = options.flatMap((opt) =>
        opt.options ? opt.options : opt,
      );
      const allValues = allOptions.map((opt) => opt.value);

      if (selectedValues.length === allValues.length) {
        handleClear();
      } else {
        setSelectedValues(allValues);
        onValueChange(allValues);
      }
    };

    return (
      <Popover
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        modal={modalPopover}
      >
        <PopoverTrigger asChild>
          <Button
            {...props}
            onPointerDown={(e) => {
              if (e.target.closest("[data-stop-trigger]")) {
                e.stopPropagation();
              }
            }}
            disabled={disabled}
            className={cn(
              "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit",
              className,
            )}
            style={{ minWidth, maxWidth }}
          >
            {selectedValues.length > 0 ? (
              <div className="flex justify-between items-center w-full">
                <div
                  className={cn(
                    "flex flex-wrap items-center",
                    singleLine ? "flex-nowrap overflow-hidden" : "",
                  )}
                >
                  {selectedValues.slice(0, maxCount).map((value) => {
                    const option = options
                      .flatMap((opt) => (opt.options ? opt.options : opt))
                      .find((o) => o.value === value);
                    const IconComponent = option?.icon;
                    return (
                      <Badge
                        key={value}
                        className={cn(
                          multiSelectVariants({ variant, badgeAnimation }),
													'bg-transparent'
                        )}
                        style={
                          option?.style?.badgeColor
                            ? { backgroundColor: option.style.badgeColor }
                            : {}
                        }
                      >
                        {IconComponent && (
                          <IconComponent className="h-4 w-4 mr-2" />
                        )}
                        {option?.label}
                        <div
                          className="cursor-pointer pointer-events-auto"
                          data-stop-trigger
                          onPointerDown={(e) => {
                            e.stopPropagation();
                            toggleOption(value);
                          }}
                        >
                          <XCircle className="ml-2 h-4 w-4" />
                        </div>
                      </Badge>
                    );
                  })}
                  {selectedValues.length > maxCount && (
                    <Badge
                      className={cn(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        multiSelectVariants({ variant, badgeAnimation }),
                      )}
                    >
                      {`+ ${selectedValues.length - maxCount} more`}
                      <XCircle
                        className="ml-2 h-4 w-4 cursor-pointer"
                        onClick={(event) => {
                          event.stopPropagation();
                          clearExtraOptions();
                        }}
                      />
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <XIcon
                    className="h-4 mx-2 cursor-pointer text-muted-foreground"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleClear();
                    }}
                  />
                  <Separator
                    orientation="vertical"
                    className="flex min-h-6 h-full"
                  />
                  <ChevronDown className="h-4 mx-2 cursor-pointer text-muted-foreground" />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full mx-auto">
                <span className="text-base font-normal text-black/20 mx-3 normal-case">
                  {placeholder}
                </span>
                <ChevronDown className="h-4 cursor-pointer text-muted-foreground mx-2" />
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn("w-auto p-0", popoverClassName)}
          align="start"
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          <Command>
            {searchable && (
              <CommandInput
                placeholder="Search..."
                onKeyDown={handleInputKeyDown}
              />
            )}
            <CommandList>
              <CommandEmpty>{emptyIndicator}</CommandEmpty>
              <CommandGroup>
                {!hideSelectAll && (
                  <CommandItem
                    key="all"
                    onSelect={toggleAll}
                    className="cursor-pointer"
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        selectedValues.length ===
                          options.flatMap((opt) =>
                            opt.options ? opt.options : opt,
                          ).length
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible",
                      )}
                    >
                      <CheckIcon className="h-4 w-4" />
                    </div>
                    <span className="font-light text-[12px]">(Select All)</span>
                  </CommandItem>
                )}
                {options.map((optionOrGroup) => {
                  if (optionOrGroup.options) {
                    return (
                      <React.Fragment key={optionOrGroup.heading}>
                        <CommandSeparator />
                        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                          {optionOrGroup.heading}
                        </div>
                        {optionOrGroup.options.map((option) => (
                          <OptionItem
                            key={option.value}
                            option={option}
                            isSelected={selectedValues.includes(option.value)}
                            onSelect={toggleOption}
                          />
                        ))}
                      </React.Fragment>
                    );
                  }
                  return (
                    <OptionItem
                      key={optionOrGroup.value}
                      option={optionOrGroup}
                      isSelected={selectedValues.includes(optionOrGroup.value)}
                      onSelect={toggleOption}
                    />
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
        {animation > 0 && selectedValues.length > 0 && (
          <WandSparkles
            className={cn(
              "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
              animationConfig?.badgeAnimation === "pulse"
                ? "animate-pulse"
                : "",
            )}
          />
        )}
      </Popover>
    );
  },
);

// Helper component untuk merender item di dalam list
const OptionItem = ({ option, isSelected, onSelect }) => {
  const IconComponent = option.icon;
  return (
    <CommandItem
      key={option.value}
      onSelect={() => onSelect(option.value)}
      className="cursor-pointer"
      disabled={option.disabled}
    >
      <div
        className={cn(
          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
          isSelected
            ? "bg-primary text-primary-foreground"
            : "opacity-50 [&_svg]:invisible",
        )}
      >
        <CheckIcon className="h-4 w-4" />
      </div>
      {IconComponent && (
        <IconComponent className="mr-2 h-4 w-4 text-muted-foreground" />
      )}
      <span className="text-[12px] font-light">{option.label}</span>
    </CommandItem>
  );
};

MultiSelect.displayName = "MultiSelect";
