import React from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";

const Search = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon viewBox="0 0 10 10" __css={styles} {...rest}>
      <path d="M9.7715 8.66605L7.4336 6.32815C7.96524 5.53889 8.22755 4.55275 8.08712 3.50196C7.84766 1.71465 6.38281 0.260151 4.59374 0.0336458C1.93377 -0.302938 -0.302953 1.93379 0.0336494 4.59377C0.260213 6.38362 1.71491 7.84964 3.50241 8.08792C4.5532 8.22834 5.53953 7.96613 6.32859 7.43441L8.66649 9.77231C8.97157 10.0774 9.4663 10.0774 9.77138 9.77231C10.0762 9.46684 10.0762 8.97074 9.7715 8.66605ZM1.54491 4.06251C1.54491 2.68399 2.66639 1.5625 4.04491 1.5625C5.42344 1.5625 6.54492 2.68399 6.54492 4.06251C6.54492 5.44104 5.42344 6.56253 4.04491 6.56253C2.66639 6.56253 1.54491 5.44143 1.54491 4.06251Z" />
    </Icon>
  );
};

export default Search;