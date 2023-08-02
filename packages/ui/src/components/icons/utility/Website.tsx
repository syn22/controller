import { memo } from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";
import { Props } from "../types";

export const WebsiteIcon = memo(
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
          d="M15 12C15 11.3094 14.9312 10.6407 14.8094 10H9.19063C9.06875 10.6407 9 11.3094 9 12C9 12.6907 9.06875 13.3594 9.19063 14H14.8094C14.9312 13.3594 15 12.6907 15 12ZM15.825 10C15.9375 10.6407 16 11.3094 16 12C16 12.6907 15.9375 13.3594 15.825 14H19.7469C19.9125 13.3594 20 12.6907 20 12C20 11.3094 19.9125 10.6407 19.7469 10H15.825ZM19.4187 9.00005C18.3875 6.45317 16.0844 4.5563 13.2937 4.10317C14.0969 5.25005 15.075 6.94692 15.6062 9.00005H19.4187ZM14.5719 9.00005C14.2156 7.7438 13.6844 6.62817 13.1406 5.7063C12.7344 5.02192 12.3313 4.4563 12 4.03442C11.6719 4.4563 11.2656 5.02192 10.8594 5.7063C10.3156 6.62505 9.78125 7.74067 9.42812 9.00005H14.5719ZM8.39375 9.00005C8.925 6.95005 9.90313 5.25005 10.7063 4.10317C7.91875 4.5563 5.6125 6.45317 4.58125 9.00005H8.39375ZM4.25313 10C4.0875 10.6407 4 11.3094 4 12C4 12.6907 4.0875 13.3594 4.25313 14H8.175C8.0625 13.3594 8 12.6907 8 12C8 11.3094 8.0625 10.6407 8.175 10H4.25313ZM9.42812 15C9.78437 16.2563 10.3156 17.3719 10.8594 18.2938C11.2656 18.9782 11.6687 19.5438 12 19.9657C12.3281 19.5438 12.7344 18.9782 13.1406 18.2938C13.6844 17.375 14.2188 16.2594 14.5719 15H9.42812ZM8.39062 15H4.58125C5.6125 17.5469 7.91563 19.4438 10.7063 19.8969C9.90313 18.75 8.925 17.0532 8.39375 15H8.39062ZM19.4156 15H15.6031C15.0719 17.05 14.0938 18.75 13.2906 19.8969C16.0781 19.4438 18.3844 17.5469 19.4156 15Z"
          fill="currentColor"
        />
      </Icon>
    );
  },
);
