import React from "react";
import { IconProps } from "@chakra-ui/react";
import Icon from "./Icon";

export function Console({
  className,
  ...rest
}: IconProps & { className?: string }) {
  return (
    <Icon className={className} {...rest}>
      <path
        d="M16.5 2H6.5C5.125 2 4 3.125 4 4.5L4 18.25C4 20.3125 5.6875 22 7.75 22H15.25C17.3211 22 19 20.3211 19 18.25L19 4.46484C19 3.125 17.875 2 16.5 2ZM17.125 18.25C17.125 19.2855 16.2855 20.125 15.25 20.125H7.75C6.71445 20.125 5.875 19.2855 5.875 18.25V4.5C5.875 4.15625 6.15625 3.875 6.5 3.875H16.5C16.8438 3.875 17.125 4.15625 17.125 4.5V18.25ZM9 11.375H13.9648C14.6875 11.375 15.25 10.8125 15.25 10.125V6.375C15.25 6.03125 14.9688 5.75 14.625 5.75H8.375C8.03125 5.75 7.71484 6.03125 7.75 6.375L7.75 10.125C7.75 10.8164 8.30859 11.375 9 11.375ZM10.25 14.5H9.625V13.875C9.625 13.5312 9.34375 13.25 9 13.25C8.65625 13.25 8.375 13.5312 8.375 13.875V14.5H7.75C7.40625 14.5 7.125 14.7812 7.125 15.125C7.125 15.4687 7.40621 15.75 7.75 15.75H8.375V16.375C8.375 16.7188 8.65625 17 9 17C9.34375 17 9.625 16.7187 9.625 16.375V15.75H10.25C10.5938 15.75 10.875 15.4687 10.875 15.125C10.875 14.7812 10.5938 14.5 10.25 14.5ZM13.0625 15.125C12.5449 15.125 12.125 15.5449 12.125 16.0625C12.125 16.5801 12.5449 17 13.0625 17C13.5801 17 14 16.5801 14 16.0625C14 15.5449 13.582 15.125 13.0625 15.125ZM14.9375 13.25C14.4219 13.25 14 13.6719 14 14.1875C14 14.7031 14.4199 15.125 14.9375 15.125C15.4551 15.125 15.875 14.7051 15.875 14.1875C15.875 13.6699 15.457 13.25 14.9375 13.25Z"
        fill="white"
      />
    </Icon>
  );
}

export default Console;