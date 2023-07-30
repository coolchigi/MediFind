import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import { listHealthcareProviders } from '../graphql/queries';
import { Paper, Box, Typography, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'

import HealthcareProviderSearch from './HealthcareProviderSearch';


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
            <HealthcareProviderSearch />
            {providers.map((provider) => (
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 2,
                            width: 'auto',
                            height: 'auto',
                            borderRadius: '10px',
                        },
                    }}
                >
                    <Paper
                        elevation={0} variant="outlined" square

                        style={{
                            backgroundColor: "#1a237e",



                        }}
                    >
                        <div>
                            <Typography variant="h5" color="#fff"> {provider.name}</Typography>
                            <Typography color="#fff">{provider.website}</Typography>
                            <Typography color="#fff">{provider.contact}</Typography>
                            <Typography color="#fff">{provider.speciality}</Typography>

                            <div>
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
                            </div>
                            <Accordion>
                                <AccordionSummary>
                                    <Typography variant="h9">Operating Hours: </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{ padding: '10px', color: '#2196f3' }}>
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
