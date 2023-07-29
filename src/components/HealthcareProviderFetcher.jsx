import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { listHealthcareProviders } from '../graphql/queries';
import { Paper, Box, Typography, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'


const HealthcareProviderFetcher = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        fetchHealthcareProviders();
    }, []); // Ensure an empty dependency array, so it runs only once on mount

    const fetchHealthcareProviders = async () => {
        try {
            const response = await API.graphql({ query: listHealthcareProviders });
            const healthcareProviders = response.data.listHealthcareProviders.items;
            console.log('healthcareproviders', healthcareProviders);
            setProviders(healthcareProviders);
        } catch (error) {
            console.error('Error fetching healthcare providers:', error);
        }
    };
    return (
        <div>
            {providers.map((provider) => (
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 'auto',
                            height: 'auto',
                        },
                    }}
                >
                    <Paper
                        elevation={12} variant="outlined" square >
                        <div>
                            <Typography variant="h5"> {provider.name}</Typography>
                            <p>{provider.website}</p>
                            <p>{provider.contact}</p>
                            <p>{provider.speciality}</p>
                            <details>
                                <summary>Address</summary>
                                <div>
                                    <Chip label={`${provider.address.street}`} />
                                    <Chip label={` ${provider.address.city}`} />
                                    <Chip label={`${provider.address.province}`} />
                                    <Chip label={`${provider.address.postalCode}`} />
                                    <Chip label={`${provider.address.country}`} />
                                </div>
                            </details>
                            <Accordion>
                                <AccordionSummary>
                                    <Typography variant="h9">Operating Hours: </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {provider.hoursOfOperation.map((hours, index) => (
                                        <div key={index}>
                                            <Typography>{hours.dayOfWeek} {hours.openTime} {hours.closeTime}</Typography>
                                        </div>
                                    ))}
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </Paper>
                </Box>
            ))}
        </div>
    );
};

export default HealthcareProviderFetcher;
