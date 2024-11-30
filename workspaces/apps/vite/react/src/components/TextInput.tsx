import "@cartok/todo-list-styles/components/TextInput.css";
import { useState, type Accessor, type Setter, type VoidProps } from "solid-js";
import { type EventHandlerNames, type ValidElementAttributes } from "~/types";

export function TextInput(
  props: VoidProps<{
    initialValue?: string;
    attributes?: Omit<
      ValidElementAttributes<"input">,
      "type" | "value" | EventHandlerNames<HTMLInputElement, "Change">
    >;
  }>
) {
  const [value, setValue] = useState(props.initialValue);

  return (
    <input
      className="text-input"
      value={value()}
      onChange={(event) => setValue(event.target.value)}
      {...props.attributes}
    />
  );
}

export function TextInputControlled(
  props: VoidProps<{
    value: Accessor<string>;
    setValue: Setter<string>;
    attributes?: Omit<
      ValidElementAttributes<"input">,
      "type" | "value" | EventHandlerNames<HTMLInputElement, "Change">
    >;
  }>
) {
  return (
    <input
      className="text-input"
      value={props.value()}
      onChange={(event) => props.setValue(event.target.value)}
      {...props.attributes}
    />
  );
}