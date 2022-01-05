import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";
import uploadcare from "netlify-cms-media-library-uploadcare";
import ArticleSinglePreview from "./preview-templates/ArticleSinglePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("articles", ArticleSinglePreview);
