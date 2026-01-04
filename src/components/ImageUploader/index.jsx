import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CloudinaryUpload({ onUpload }) {
    const [preview, setPreview] = useState(null);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setPreview(URL.createObjectURL(file));
        onUpload(file);
    };

    return (
        <div className="grid gap-2">
            <Input
                id="image-upload-input"
                className="hidden"
                type="file"
                onChange={handleUpload}
                accept="image/*"
            />

            {preview ? (
                <div className="space-y-2">
                    <div className="w-40 my-2">
                        <img
                            src={preview}
                            alt="uploaded"
                            style={{ maxWidth: "300px", borderRadius: "8px" }}
                        />
                    </div>
                    <Label
                        htmlFor="image-upload-input"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 cursor-pointer"
                    >
                        Change Image
                    </Label>
                </div>
            ) : (
                <Label
                    htmlFor="image-upload-input"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 cursor-pointer"
                >
                    Upload Image
                </Label>
            )}
        </div>
    );
}


