import ParagraphForm from "./Form";
import * as z from "zod";
import { formSchema } from "./Form";
import { toast } from "@/components/ui/use-toast.js";
import openAiService from "@/api/openAiService";
import { TextBoxProps } from "./TextBox";
import { useState } from "react";
// import { CopyableTextArea } from "./CopyableTextArea";
import GenerationOutput from "./GenerationOutput";
export default function ConversationPage() {
  const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
    // toast message:
    toast({
      title: "Form submitted",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });

    // make an api call
    const conversations = await openAiService.generateConversation(values);
    const transformedArray = Object.entries(conversations).map(
      ([key, value]) => ({
        label: key,
        initialText: value as string,
      })
    );
    setconversationDisplay(transformedArray);
    console.log("conversation:", conversations);
    console.log("conversation:", transformedArray);
  };

  const [conversationDisplay, setconversationDisplay] = useState<
    TextBoxProps[]
  >([
    {
      label: "possibleMessage1",
      initialText: "Submit input to see generation",
    },
    {
      label: "possibleMessage2",
      initialText: "Submit input to see generation",
    },
    {
      label: "possibleMessage3",
      initialText: "Submit input to see generation",
    },
    {
      label: "possibleMessage4",
      initialText: "Submit input to see generation",
    },
  ]);

  return (
    // the page is split down the middle into 2 columns:
    <main className="w-full flex flex-nowrap gap-4 pt-10">
      {/* the fist column is a form that takes the input*/}
      <section className="w-1/2 px-20">
        <ParagraphForm onSubmit={handleFormSubmit} />
      </section>
      {/* the second column is displays the output */}
      <section className="w-1/2 px-20">
        <GenerationOutput textAreas={conversationDisplay} />
      </section>
    </main>
  );
}
