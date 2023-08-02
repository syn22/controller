import { memo } from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";
import { Props } from "../types";

export const SparklesLineIcon = memo(
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
          d="M17.5 5a.5.5 0 0 1 .5.5V7h1.5c.275 0 .5.225.5.5s-.225.5-.5.5H18v1.5c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5V8h-1.5a.501.501 0 0 1-.5-.5c0-.275.225-.5.5-.5H17V5.5a.5.5 0 0 1 .5-.5Zm0 9c.275 0 .5.225.5.5V16h1.5c.275 0 .5.225.5.5s-.225.5-.5.5H18v1.5c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5V17h-1.5a.501.501 0 0 1-.5-.5c0-.275.225-.5.5-.5H17v-1.5c0-.275.225-.5.5-.5Zm-9.647.056L4.29 12.41a.5.5 0 0 1 0-.909l3.563-1.647L9.5 6.29a.501.501 0 0 1 .91 0l1.646 3.563L15.62 11.5a.5.5 0 0 1 0 .91l-3.563 1.646-1.647 3.563a.5.5 0 0 1-.91 0l-1.646-3.563Zm-2.16-2.1 2.582 1.19a1 1 0 0 1 .487.488l1.194 2.582 1.19-2.582a1 1 0 0 1 .488-.487l2.582-1.19-2.582-1.195a1 1 0 0 1-.487-.487l-1.19-2.581-1.195 2.581a1 1 0 0 1-.487.487l-2.583 1.194Z"
        />
      </Icon>
    );
  },
);
