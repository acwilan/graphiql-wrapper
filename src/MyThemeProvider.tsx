import React, { PropsWithChildren } from 'react';
import { BackstageTheme, lightTheme } from '@backstage/theme';
import { BackstageOverrides } from '@backstage/core-components';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export const createCustomThemeOverrides = (
    theme: BackstageTheme,
): BackstageOverrides => {
    return {
        BackstageHeader: {
            header: {
                backgroundImage: '',
                backgroundColor: `rgb(245, 251, 254)`,
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                borderBottomColor: `rgb(191, 219, 238)`,
                boxShadow: ''
            },
            title: {
                color: `rgb(32, 31, 30)`
            }
        },
        BackstageHeaderLabel: {
            label: {
                color: `rgb(32, 31, 30)`
            },
            value: {
                color: `rgb(32, 31, 30)`
            },
        },
        BackstageContent: {
            root: {
                color: `rgb(0, 120, 212)`,
                borderTopColor: `rgb(191, 219, 238)`
            },
        },
    };
};

const customTheme: BackstageTheme = {
    ...lightTheme,
    overrides: {
        // These are the overrides that Backstage applies to `material-ui` components
        ...lightTheme.overrides,
        // These are your custom overrides, either to `material-ui` or Backstage components.
        ...createCustomThemeOverrides(lightTheme),
    },
};

export function MyThemeProvider({ children }: PropsWithChildren<{}>) {
    //  const appTheme = themes[0];
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
    );
}