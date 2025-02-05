import { TextBox, type TextBoxProps } from "./TextBox";

interface MultipleTextAreasProps {
  textAreas: TextBoxProps[];
}

export default function GenerationOutput({
  textAreas,
}: MultipleTextAreasProps) {
  return (
    <div className="space-y-8">
      {textAreas.map((props, index) => (
        <TextBox key={index} {...props} />
      ))}
    </div>
  );
}
