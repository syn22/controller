import { memo } from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";
import { Props } from "../types";

export const JoysticLineIcon = memo(
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
          d="M17.51 14.991H12.5v-4.057a3.497 3.497 0 0 0 3.006-3.456C15.507 5.541 13.937 4 12 4c-1.936 0-3.534 1.541-3.534 3.45a3.496 3.496 0 0 0 3.005 3.456v4.085H6.463c-.802 0-1.475.673-1.475 1.503v2.003c0 .83.673 1.503 1.502 1.503h11.02c.83 0 1.502-.673 1.502-1.503v-2.003c0-.83-.673-1.503-1.502-1.503ZM9.496 7.478A2.508 2.508 0 0 1 12 4.974a2.507 2.507 0 0 1 2.505 2.504A2.507 2.507 0 0 1 12 9.982a2.508 2.508 0 0 1-2.504-2.504Zm8.515 11.02c0 .275-.225.5-.501.5H6.49a.502.502 0 0 1-.5-.5v-2.004c0-.276.224-.501.5-.501h11.02c.276 0 .5.225.5.5v2.004ZM12.25 6.475a.751.751 0 1 0-1.503 0 .751.751 0 0 0 1.503 0ZM6.99 13.99h2.004a.5.5 0 1 0 0-1.001H6.99a.502.502 0 0 0 0 1.001Z"
        />
      </Icon>
    );
  },
);
