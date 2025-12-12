import React from "react";
import { Input } from "@/components/ui/input";

const ImageUploader = ({ onUpload }) => {
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file && onUpload) {
            onUpload(file);
        }
    };

    return (
        <label
            htmlFor="blog-image"
            className="rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
            <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
                Click to upload image
            </div>
            <Input
                onChange={handleFileChange}
                id="blog-image"
                type="file"
                accept="image/*"
                className="hidden"
            />
        </label>
    );
};

export default ImageUploader;
