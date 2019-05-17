import * as React from 'react';
import { useSiteMetadata } from './hooks';

type Metadata = {
    STRIPE_API_KEY: string;
    siteUrl: string;
}

export const MetadataContext = React.createContext<Metadata | undefined>(undefined);

export const MetadataProvider = ({children}: any) => {
    const { STRIPE_API_KEY, siteUrl } = useSiteMetadata();
    return (
        <MetadataContext.Provider value={{STRIPE_API_KEY, siteUrl}}>
            {children}
        </MetadataContext.Provider>
    )
}
