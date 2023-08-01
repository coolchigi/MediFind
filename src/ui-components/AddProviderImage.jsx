import {
    Button,
    Image,
} from "@aws-amplify/ui-react";

import { useState } from 'react';
import { Storage } from "aws-amplify";

const AddProviderImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleImageUpload = async () => {
        const fileName = selectedImage.name;
        try {
            if (selectedImage) {
                // Upload the selected image to S3 bucket
                const result = await Storage.put(fileName, selectedImage, {
                    contentType: selectedImage.type,
                });
                const imageUrl = await Storage.get(result.key);
                setImageUrl(imageUrl);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    return (
        <div style={{ marginTop: "20px" }}>
            <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                        setSelectedImage(file);
                        setImageUrl(URL.createObjectURL(file));
                    }
                }}
            />
            {selectedImage && <Image
                src={imageUrl} alt="Uploaded Provider"
                width="300px" />}
            <Button onClick={handleImageUpload}>Upload Image</Button>
        </div>
    );
};


export default AddProviderImage