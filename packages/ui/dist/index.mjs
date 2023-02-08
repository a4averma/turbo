// Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({
  primary = false,
  label = "Boop",
  size = "small"
}) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      style: {
        backgroundColor: primary ? "red" : "blue",
        fontSize: size === "large" ? "24px" : "14px"
      },
      children: label
    }
  );
};
export {
  Button
};
