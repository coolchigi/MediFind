// Form to create a new healthcare provider using react 

import React, { useState } from 'react';
import {API} from 'aws-amplify';
import {createHealthcareProvider} from '../graphql/mutations';
import { withAuthenticator, Button, Heading, Image, View, Card, Form, Input, Radio, RadioGroup, Select, Option } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const initialFormState = {
    name: '',
    website: '',
    contact: '',
    street: '',
    postalCode: '',
    city: '',
    province: '',
    country: '',
    type: '',
    owner: ''
}

function ProviderForm() {
    const [formData, setFormData] = useState(initialFormState);

    async function createNewProvider() {
        if (!formData.name || !formData.description || !formData.address || !formData.city || !formData.state || !formData.zip || !formData.phone || !formData.website || !formData.type || !formData.owner) return;
        await API.graphql({query: createHealthcareProvider, variables: {input: formData}});
        setFormData(initialFormState);
    }

    function onChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <View>
            <Form>
                <Input
                    label="Name"
                    name="name"
                    onChange={onChange}
                    value={formData.name}
                />
                <Input
                    label="Description"
                    name="description"
                    onChange={onChange}
                    value={formData.description}
                />
                <Input
                    label="Address"
                    name="address"
                    onChange={onChange}
                    value={formData.address}
                />
                <Input
                    label="City"
                    name="city"
                    onChange={onChange}
                    value={formData.city}
                />
                <Input
                    label="State"
                    name="state"
                    onChange={onChange}
                    value={formData.state}
                />
                <Input
                    label="Zip"
                    name="zip"
                    onChange={onChange}
                    value={formData.zip}
                />
                <Input
                    label="Phone"
                    name="phone"
                    onChange={onChange}
                    value={formData.phone}
                />
                <Input
                    label="Website"
                    name="website"
                    onChange={onChange}
                    value={formData.website}
                />
                <RadioGroup
                    label="Type"
                    name="type"
                    onChange={onChange}
                    value={formData.type}
                >
                    <Radio label="Hospital" value="Hospital" />
                    <Radio label="Urgent Care" value="Urgent Care" />
                    <Radio label="Pharmacy" value="Pharmacy" />
                    <Radio label="Clinic" value="Clinic" />
                </RadioGroup>
                <Input
                    label="Owner"
                    name="owner"
                    onChange={onChange}
                    value={formData.owner}
                />
                <Button onClick={createNewProvider}>Create Provider</Button>
            </Form>
        </View>
    )
}

export default ProviderForm;
