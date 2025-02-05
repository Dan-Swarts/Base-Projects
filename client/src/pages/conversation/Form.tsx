"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormField from "./FormField";

// Define schema using Zod
export const formSchema = z.object({
  jobPosting: z.string().min(10, {
    message: "Job posting must be at least 10 characters.",
  }),
  company: z.string().min(10, {
    message: "Company description must be at least 10 characters.",
  }),
  person: z.string().min(10, {
    message: "Person description must be at least 10 characters.",
  }),
  conversationHistory: z.string().min(10, {
    message: "Person description must be at least 10 characters.",
  }),
});

// Define props for accepting an onSubmit callback
interface ParagraphFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export default function ParagraphForm({ onSubmit }: ParagraphFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobPosting: "",
      company: "",
      person: "",
    },
  });

  // Field configurations
  const fields = [
    {
      name: "jobPosting",
      label: "Job Posting",
      placeholder: "Enter details about the job posting",
      description: "Provide a detailed description of the job posting.",
    },
    {
      name: "company",
      label: "Company",
      placeholder: "Enter details about the company",
      description: "Describe the company offering the job.",
    },
    {
      name: "person",
      label: "Person",
      placeholder: "Enter details about the person",
      description:
        "Provide information about the person applying or related to the job.",
    },
    {
      name: "conversationHistory",
      label: "Conversation History",
      placeholder: "Enter the conversation history",
      description: "Provide the previous messages in the conversation",
    },
  ] as const;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1>INPUT</h1>
        {fields.map((field) => (
          <FormField key={field.name} control={form.control} {...field} />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
