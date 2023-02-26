import { CSSProperties } from "react";

type Position = CSSProperties["position"];

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    style?: CSSProperties & {
      position?: Position | undefined;
      zIndex?: number | undefined;
    };
  }
}
