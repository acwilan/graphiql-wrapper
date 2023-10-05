import { configApiRef, createApiFactory } from '@backstage/core-plugin-api';
import { configReader } from './config';

export const configApiFactory = createApiFactory({
    api: configApiRef,
    deps: {},
    factory: () => {
        return configReader;
    },
});
