import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    bgColor: string;
    bgBtnColor: string;
    borderColor: string;
    txtColor: string;
  }
}
