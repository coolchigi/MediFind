import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import { listHealthcareProviders } from '../graphql/queries';
import { Paper, Box, Typography, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'

import HealthcareProviderSearch from './HealthcareProviderSearch';


const HealthcareProviderFetcher = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        fetchHealthcareProviders();
    }, []); // empty dependency array, so it runs only once on mount

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
            <HealthcareProviderSearch />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', // This will make the boxes appear horizontally
                    flexWrap: 'wrap',
                }}
            >
                {providers.map((provider) => (
                    <Box
                        key={provider.id}
                        sx={{
                            m: 1,
                            width: 'auto',
                            height: 'auto',
                            borderRadius: '10px',
                        }}
                    >
                        <Paper
                            style={{
                                backgroundColor: "#1a237e",
                            }}>
                            <div>
                                <Typography variant="h5" color="#fff"> {provider.name}</Typography>
                                <Typography color="#fff">{provider.website}</Typography>
                                <Typography color="#fff">{provider.contact}</Typography>
                                <Typography color="#fff">{provider.speciality}</Typography>
                                <details>
                                    <summary
                                        style={{ color: '#fff' }}
                                    >Address</summary>
                                    <Chip
                                        sx={{
                                            backgroundColor: '#b39ddb',
                                            color: 'white',
                                        }}
                                        label={`${provider.address.street}`} />
                                    <Chip
                                        sx={{
                                            backgroundColor: '#b39ddb',
                                            color: 'white',
                                        }}
                                        label={` ${provider.address.city}`} />
                                    <Chip
                                        sx={{
                                            backgroundColor: '#b39ddb',
                                            color: 'white',
                                        }}
                                        label={`${provider.address.province}`} />
                                    <Chip
                                        sx={{
                                            backgroundColor: '#b39ddb',
                                            color: 'white',
                                        }}
                                        label={`${provider.address.postalCode}`} />
                                    <Chip
                                        sx={{
                                            backgroundColor: '#b39ddb',
                                            color: 'white',
                                        }}
                                        label={`${provider.address.country}`} />
                                </details>
                            </div>
                            <Accordion>
                                <AccordionSummary>
                                    <Typography variant="h9" sx={{
                                        color: "#1a237e",
                                    }}>Operating Hours: </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        padding: '10px', backgroundColor: "#1a237e", // Change the background color
                                        color: "white",
                                        borderRadius: '8px'
                                    }}>
                                    {provider.hoursOfOperation.map((hours, index) => (
                                        <div key={index}>
                                            <Typography>{hours.dayOfWeek} {hours.openTime} {hours.closeTime}</Typography>
                                        </div>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                        </Paper>
                    </Box>
                ))}
            </Box>
        </div>
    );
};

export default HealthcareProviderFetcher;
