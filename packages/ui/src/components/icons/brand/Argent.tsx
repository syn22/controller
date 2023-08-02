import { memo } from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";
import { Props } from "../types";

export const ArgentIcon = memo(
  ({
    variant,
    size,
    boxSize = 6,
    colorScheme,
    orientation,
    styleConfig,
    ...iconProps
  }: Props) => {
    const styles = useStyleConfig("Icon", {
      variant,
      size,
      colorScheme,
      orientation,
      styleConfig,
    });

    return (
      <Icon viewBox="0 0 24 24" __css={styles} boxSize={boxSize} {...iconProps}>
        <path
          fill="currentColor"
          d="M14.054 4.686H9.932a.25.25 0 0 0-.248.256c-.082 3.99-2.106 7.781-5.583 10.466a.279.279 0 0 0-.058.363l2.412 3.436c.082.116.24.14.355.058 2.18-1.668 3.932-3.676 5.187-5.906 1.264 2.23 3.015 4.238 5.187 5.906a.252.252 0 0 0 .355-.058l2.412-3.436a.263.263 0 0 0-.058-.363c-3.485-2.685-5.5-6.468-5.583-10.466-.008-.14-.124-.256-.256-.256Z"
        />
      </Icon>
    );
  },
);
