import { ApiFactoryRegistry, ApiProvider, ApiResolver } from '@backstage/core-app-api';
import { createApiFactory } from '@backstage/core-plugin-api';
import { GraphQLEndpoints, graphQlBrowseApiRef, Router as GraphiQlRouter } from '@backstage/plugin-graphiql';
import { MyThemeProvider } from '../MyThemeProvider';
import { configApiFactory } from '../apis';
import React from 'react';

export type MyGraphQlEndpoint = {
    title: string,
    baseUrl: string
};

type GraphiQlWrapperProps = {
    endpoints: MyGraphQlEndpoint[],
    defaultEndpoint?: number
};

export const GraphiQlWrapper: React.FC<GraphiQlWrapperProps> = (props: GraphiQlWrapperProps) => {
    const { endpoints } = props;

    const defaultFetcher = (body: any, endpoint: MyGraphQlEndpoint) => {
        return fetch(endpoint.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    };

    const graphQlBrowseApiFactory = createApiFactory({
        api: graphQlBrowseApiRef,
        deps: {},
        factory: () => GraphQLEndpoints.from(endpoints.map(endpoint => 
            ({
                id: endpoint.title,
                title: endpoint.title,
                fetcher: async (params: any) => defaultFetcher(params, endpoint)
            })
        ))
    });
    
    const apiFactoryRegistry = new ApiFactoryRegistry();
    apiFactoryRegistry.register('app', graphQlBrowseApiFactory); // This is "app" because it is not part of the backstage core APIs
    apiFactoryRegistry.register('static', configApiFactory); // This is "static" because it is used by backstage core
    const apiHolder: ApiResolver = new ApiResolver(apiFactoryRegistry);

    return (
        <ApiProvider apis={apiHolder}>
          <MyThemeProvider>
            <GraphiQlRouter />
          </MyThemeProvider>
        </ApiProvider>
    );
};
