const cloudinary = require("cloudinary").v2;

exports.uploadDataToCloudinary = async (file , folder , height , quality) => {
    const options = {folder , timeout : 120000};

    if(height) options.height = height;
    if(quality) options.quality = quality;

    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath , options);
}