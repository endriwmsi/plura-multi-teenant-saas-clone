import { FileIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  apiEndpoint: 'agencyLogo' | 'avatar' | 'subaccountLogo';
  onChange: (url?: string) => void;
  value?: string;
}

const FileUpload = ({apiEndpoint, onChange, value}: Props) => {
  const type = value?.split('.').pop();

  if (value) {
    return (
      <div className="flex flex-col justify-center items-center">
        {type !== "pdf" ? (
          <div className="relative w-40 h-40">
            <Image
              src={value}
              alt="uploaded image"
              className='object-container'
              fill
            />
          </div>
        ) : (
          <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
            <FileIcon />
          </div>
        )}
      </div>
    );
  }
}

export default FileUpload;