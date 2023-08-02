import { memo } from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";
import { Props } from "../types";

export const EykarIcon = memo(
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
          d="M20 11.9985C20 9.85995 19.1609 7.92129 17.7948 6.48547L17.7493 6.53091L17.4131 9.84783L10.9701 15.8062L11.3306 16.1667L11.0246 16.4726L10.7671 16.2151L10.5824 16.3211L11.7819 17.2147L10.4945 17.6328C10.4945 17.6328 9.70693 16.7422 9.61 16.8361C9.51306 16.93 9.35858 16.8724 9.35858 16.8724L8.99811 16.512L8.85271 16.6574L8.5407 16.3454L6.80197 18.0841C8.19841 19.2776 10.0129 20.0016 11.9939 20.0016C16.4135 20.0016 19.9939 16.4211 19.9939 12.0016L20 11.9985Z"
          fill="currentColor"
        />
        <path
          d="M7.90458 15.688L7.59258 15.376L7.73798 15.2306L7.37751 14.8702C7.37751 14.8702 7.31693 14.7157 7.41386 14.6188C7.51079 14.5218 6.61719 13.7342 6.61719 13.7342L7.03521 12.4469L7.92882 13.6464L8.03484 13.4616L7.77736 13.2041L8.0833 12.8982L8.44377 13.2587L14.4021 6.82171L17.719 6.48547L17.7554 6.44912C16.3044 4.93757 14.2628 3.99854 12 3.99854C7.58349 3.99854 4 7.579 4 11.9985C4 14.1038 4.81484 16.0182 6.14464 17.448L7.90458 15.688Z"
          fill="currentColor"
        />
      </Icon>
    );
  },
);
