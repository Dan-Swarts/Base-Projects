import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormField as ShadFormField, // Avoid naming conflict
} from "@/components/ui/form";
// import { useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
// import { useEffect } from "react";
// import { debounce } from "lodash";

interface CustomFormFieldProps {
  control: Control<any>; // Ensure correct typing for react-hook-form control
  name: string;
  label: string;
  placeholder: string;
  description: string;
}

// const debouncedSaveToLocalStorage = useCallback(
//   debounce((value) => {
//     localStorage.setItem(name, value);
//   }, 500), // 500ms delay
//   [name]
// );

export default function FormField({
  control,
  name,
  label,
  placeholder,
  description,
}: CustomFormFieldProps) {
  return (
    <ShadFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="min-h-[100px]"
              {...field}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
