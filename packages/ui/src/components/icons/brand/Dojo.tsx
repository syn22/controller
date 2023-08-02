import { memo } from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";
import { Props } from "../types";

export const DojoIcon = memo(
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
          d="M18.4312 8.60318C18.7174 8.60318 18.9964 8.47999 19.2029 8.2626L20.8188 7.00173C20.9312 6.91477 21 6.77347 21 6.62854V5.7626L3 5.70825V6.47274C3 6.61043 3.05797 6.73724 3.1558 6.82782L4.76812 8.27347C4.97826 8.50898 5.26812 8.64303 5.56884 8.64303H6.84783V11.5416L6.18116 10.8604C5.97464 10.6467 5.68478 10.5235 5.38406 10.5235L3.32971 10.5126V13.1285L6.8442 13.1684V18.2916L7.46014 17.6793C7.46014 17.6793 9.26087 15.8858 9.4529 15.6938L9.55797 15.5887V10.6829C9.54348 10.5054 9.52899 10.3278 9.50725 10.1503C9.48551 9.95825 9.44928 9.7626 9.42391 9.57057C9.38043 9.27709 9.31522 8.99086 9.25 8.70463C9.25 8.69014 9.24275 8.68289 9.25 8.6684C9.28261 8.6213 9.49638 8.57057 9.55072 8.59593C9.87319 8.75173 10.2138 8.84231 10.5761 8.8568C10.6812 8.86043 10.7862 8.86405 10.8913 8.86405L13.6304 8.8568C13.9891 8.83869 14.3261 8.75173 14.6486 8.59593C14.7029 8.57057 14.9167 8.6213 14.9493 8.6684C14.9565 8.67927 14.9493 8.69014 14.9493 8.70463C14.8841 8.99086 14.8188 9.28072 14.7754 9.57057C14.7464 9.7626 14.7138 9.95463 14.692 10.1503C14.6667 10.3532 14.6522 10.5597 14.6341 10.7626V15.5488L17.2536 18.288V13.1648L20.9529 13.1249V10.509L18.5181 10.5198C18.221 10.5198 17.9312 10.643 17.721 10.8568L17.2536 11.3351V8.6068H18.4312V8.60318Z"
          fill="currentColor"
        />
        <path
          d="M11.9999 13.604C12.9202 13.604 13.6663 12.8579 13.6663 11.9377C13.6663 11.0173 12.9202 10.2712 11.9999 10.2712C11.0795 10.2712 10.3335 11.0173 10.3335 11.9377C10.3335 12.8579 11.0795 13.604 11.9999 13.604Z"
          fill="currentColor"
        />
      </Icon>
    );
  },
);
