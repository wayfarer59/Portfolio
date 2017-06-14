var cloudinary = require('cloudinary');

const config = {
    "port": 8080,
    "corsHeaders": ["Link"],
    cloudinaryConfig: {
        cloud_name: 'wayfarer59',
        api_key: '813693433384161',
        api_secret: 'BOVHMXFVTG3Jj1ovmIGa_IzN2aQ'
    }
};

module.exports = cloudinary;