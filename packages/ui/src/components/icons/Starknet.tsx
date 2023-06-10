import React from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";

const Starknet = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon viewBox="0 0 25 25" fill="currentColor" __css={styles} {...rest}>
      <path d="M12.8712 3.5C17.8418 3.5 21.8711 7.52933 21.8711 12.4999C21.8711 17.4704 17.8418 21.4997 12.8712 21.4997C7.90069 21.4997 3.87109 17.4704 3.87109 12.4999C3.87109 7.52933 7.90069 3.5 12.8712 3.5ZM8.80102 8.52676C7.63068 8.60012 6.57597 9.15379 5.90083 9.87199C5.22223 10.5971 4.7988 11.449 4.68956 12.3573C4.90349 12.3646 5.08749 12.3969 5.26653 12.4512L5.39592 12.4916C5.55568 12.5434 5.70615 12.6053 5.849 12.6712C6.18444 12.8301 6.48028 13.0095 6.76708 13.2031C7.21402 13.5021 7.6301 13.8373 8.04227 14.1798L8.15461 14.2734L8.37919 14.4611C8.60451 14.6377 8.82574 14.8455 9.05157 15.0322L9.16491 15.1235L9.55909 15.4688L9.65466 15.5492C9.70088 15.5878 9.74604 15.6251 9.79585 15.6654L9.88889 15.7401L9.99395 15.8231C10.6861 16.3656 11.467 16.8571 12.3708 17.2311C13.271 17.5997 14.3292 17.8448 15.4416 17.7696C16.5303 17.705 17.6001 17.2834 18.3909 16.6755L18.5079 16.5841C19.2824 15.9698 19.8188 15.2204 20.2075 14.4526C20.5977 13.6533 20.8475 12.8256 20.9257 11.9429C20.4996 12.1303 20.1099 12.3193 19.7346 12.4777L19.5743 12.5431C19.2829 12.6611 19.0053 12.7671 18.7371 12.8355L18.6044 12.8679C17.9508 13.0224 17.4523 12.9787 17.0553 12.8214C16.6425 12.6728 16.2103 12.4192 15.7029 12.0721C15.3217 11.8092 14.9169 11.5043 14.4949 11.1745L14.299 11.0205L14.0865 10.852L13.2086 10.1593L12.6461 9.73351C12.4351 9.59184 12.2232 9.45149 11.9968 9.32311C11.5436 9.06767 11.0407 8.85077 10.504 8.70192C9.96498 8.55254 9.37861 8.48822 8.80102 8.52676ZM7.79976 16.5542C7.53103 16.5542 7.31334 16.7722 7.31334 17.0409C7.31334 17.3096 7.53103 17.5276 7.79976 17.5276C8.06849 17.5276 8.28645 17.3096 8.28645 17.0409C8.28645 16.7722 8.06849 16.5542 7.79976 16.5542ZM17.2397 7.42269C17.2095 7.32932 17.0817 7.32604 17.044 7.41124L17.0393 7.42402L16.8211 8.13451C16.7793 8.27035 16.6777 8.37888 16.5462 8.42996L16.5212 8.43886L15.8139 8.66771C15.7208 8.69791 15.7173 8.8257 15.8027 8.86338L15.8155 8.86813L16.526 9.08662C16.6619 9.12815 16.7704 9.22972 16.8215 9.36141L16.8304 9.38645L17.0592 10.0935C17.0894 10.1869 17.2172 10.1901 17.2549 10.1047L17.2596 10.0919L17.4779 9.38166C17.5196 9.24582 17.6212 9.13706 17.7527 9.08595L17.7777 9.07705L18.485 8.8482C18.5784 8.818 18.5816 8.69045 18.4962 8.65256L18.4834 8.64778L17.7729 8.42955C17.6371 8.38777 17.5285 8.28619 17.4774 8.15472L17.4686 8.12973L17.2397 7.42269Z" />
    </Icon>
  );
};

export default Starknet;