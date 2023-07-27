import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { listHealthcareProviders } from '../graphql/queries';

const HealthcareProviderFetcher = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        fetchHealthcareProviders();
    }, []); // Ensure an empty dependency array, so it runs only once on mount

    const fetchHealthcareProviders = async () => {
        try {
            const response = await API.graphql(graphqlOperation(listHealthcareProviders));
            const healthcareProviders = response.data.listHealthcareProviders.items;
            console.log('healthcareproviders', healthcareProviders);
            setProviders(healthcareProviders);
        } catch (error) {
            console.error('Error fetching healthcare providers:', error);
        }
    };

    return (
        <div>
            {/* Render the fetched data here */}
            {providers.map((provider) => (
                <div key={provider.id}>
                    <h2>{provider.name}</h2>
                    <h2>{provider.website}</h2>
                </div>
            ))}
        </div>
    );
};

export default HealthcareProviderFetcher;
