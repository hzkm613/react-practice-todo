import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        accentColor: string;
        btnBackground: string;
        btnBorderColor: string;
    }
}

//https://te6-in.github.io/nomad-to-do/