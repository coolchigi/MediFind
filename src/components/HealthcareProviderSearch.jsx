import { useState } from 'react';
import { API } from 'aws-amplify';
import { SearchField, useTheme, Flex } from "@aws-amplify/ui-react";
import { Paper, Box, Typography, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'

import { listHealthcareProviders } from '../graphql/queries';

const HealthcareProviderSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { tokens } = useTheme();

    const variables = {
        filter: {
            or: [
                { name: { contains: searchTerm } },
                { website: { contains: searchTerm } },
                { contact: { contains: searchTerm } },
                { speciality: { contains: searchTerm } },
            ],
        },
    };
    const handleSearch = async (value) => {
        try {
            if (value) {
                const response = await API.graphql(
                    { query: listHealthcareProviders, variables: variables })
                console.log('response', response);
                const healthcareProviders = response.data.listHealthcareProviders.items;
                console.log('healthcareproviders', healthcareProviders);
                setSearchResults(healthcareProviders);
            } else {
                setSearchResults([]);
            }
        } catch (error) {
            console.error('Error searching for healthcare providers:', error);
        }
    };
    const handleChange = (value) => {
        setSearchTerm(value);
        handleSearch(value);
    }

    return (

        <Flex direction="column"
            alignItems="center">
            <h1>Welcome to MediFind!</h1>
            <div style={{ marginLeft: '1200px', marginRight: '120px' }}>
                <SearchField
                    label="Search"
                    placeholder="Search for HealthCare Provider..."
                    inputStyles={{
                        border: `1px solid ${tokens.colors.brand.primary[60]}`,
                        backgroundColor: tokens.colors.brand.primary[20],
                        borderRadius: tokens.radii.md,
                    }}
                    onChange={(event) => handleChange(event.target.value)}
                    value={searchTerm}
                />
            </div>
            <div>
                {searchResults.map((provider) => (
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
                            elevation={0} variant="outlined" square
                            style={{
                                backgroundColor: "#ce93d8",
                                margin: "16px 0px"

                            }}>
                            <div>
                                <Typography variant="h5" color="#fff"> {provider.name}</Typography>
                                <Typography color="#fff">{provider.website}</Typography>
                                <Typography color="#fff">{provider.contact}</Typography>
                                <Typography color="#fff">{provider.speciality}</Typography>
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
        </Flex>
    );
};

export default HealthcareProviderSearch;
