import {
  type JSX,
  type ParentProps,
  children as getMemorizedChildren,
} from "solid-js";
import { Dynamic } from "solid-js/web";
// TODO: aliased imports, maybe setup monorepo.
import "./Button.css";
import type { DynamicHTMLElementProps } from "../types";

export function Button<T extends keyof JSX.IntrinsicElements = "button">(
  props: ParentProps<
    DynamicHTMLElementProps<T> & {
      size?: "default" | "double" | "hug";
    }
  >
) {
  props = { element: "button" as T, size: "default", ...props };

  const memorizedChildren = getMemorizedChildren(() => props.children);

  return (
    <Dynamic
      classList={{ button: true, [props.size as string]: true }}
      component={props.element as string}
      {...props.attributes}
    >
      {memorizedChildren()}
    </Dynamic>
  );
}
