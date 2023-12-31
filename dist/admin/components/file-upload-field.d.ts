import React from "react";
type FileUploadFieldProps = {
    onFileChosen: (files: File[]) => void;
    filetypes: string[];
    errorMessage?: string;
    placeholder?: React.ReactElement | string;
    className?: string;
    multiple?: boolean;
    text?: React.ReactElement | string;
};
declare const FileUploadField: React.FC<FileUploadFieldProps>;
export default FileUploadField;
