import { generateComponents } from '@uploadthing/react';
import { generateReactHelpers } from '@uploadthing/react';

import type { OurFilerouter } from '@app/api/uploadthing/core';

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();