import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: string;
      background: string;
      text: string;
      shadow: string;
    };
    typography: {
      fontFamily: string;
      htmlFontSize: string;
    };
  }
}
