import cloudinary from 'cloudinary';

cloudinary.v2.config({ 
    cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME, 
    api_key: process.env.NEXT_PUBLIC_API_KEY, 
    api_secret: process.env.NEXT_PUBLIC_API_SECRET,
    secure: true
});

export default cloudinary;