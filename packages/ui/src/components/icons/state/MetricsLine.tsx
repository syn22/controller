import { memo } from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";
import { Props } from "../types";

export const MetricsLineIcon = memo(
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
          d="M12.534 11.498a.503.503 0 0 1-.502-.502V4.455c0-.264.204-.484.468-.486h.034a7.027 7.027 0 0 1 7.027 7.027l-.028.034a.453.453 0 0 1-.458.468h-6.54Zm.502-6.504v5.5h5.5a6.022 6.022 0 0 0-5.5-5.5Zm-2.51.531v7.479l4.91 4.909c.21.21.195.555-.047.728A7.529 7.529 0 0 1 3.5 12.502c0-3.805 2.826-6.954 6.465-7.458a.485.485 0 0 1 .562.481Zm-.708 8.188a1.002 1.002 0 0 1-.295-.71V6.152a6.53 6.53 0 0 0-5.02 6.35 6.524 6.524 0 0 0 9.766 5.666l-4.451-4.454ZM18.178 18c-.188.15-.483.163-.665-.019L13.39 13.86a.502.502 0 0 1 .354-.856h6.268c.288 0 .52.244.483.533A7.52 7.52 0 0 1 18.178 18Zm1.207-3.994H14.96l2.896 2.896a6.633 6.633 0 0 0 1.53-2.895Z"
        />
      </Icon>
    );
  },
);
