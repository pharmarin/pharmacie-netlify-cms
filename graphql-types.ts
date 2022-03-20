export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  /** Returns all children nodes filtered by type ProductsJson */
  childrenProductsJson?: Maybe<Array<Maybe<ProductsJson>>>;
  /** Returns the first child node of type ProductsJson or null if there are no children of given type on this node */
  childProductsJson?: Maybe<ProductsJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
  format?: InputMaybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredImage?: Maybe<File>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFields = {
  link?: Maybe<Scalars['String']>;
};

export type ProductsJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  attributes?: Maybe<ProductsJsonAttributes>;
  featuredImage?: Maybe<File>;
  laboratoire?: Maybe<Scalars['String']>;
  jsonId?: Maybe<Scalars['String']>;
  fields?: Maybe<ProductsJsonFields>;
};

export type ProductsJsonAttributes = {
  indication?: Maybe<Array<Maybe<Scalars['String']>>>;
  composition?: Maybe<Array<Maybe<Scalars['String']>>>;
  action?: Maybe<Array<Maybe<Scalars['String']>>>;
  utilisation?: Maybe<Array<Maybe<Scalars['String']>>>;
  avantages?: Maybe<Array<Maybe<Scalars['String']>>>;
  conseils?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductsJsonFields = {
  link?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  productsJson?: Maybe<ProductsJson>;
  allProductsJson: ProductsJsonConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  childrenProductsJson?: InputMaybe<ProductsJsonFilterListInput>;
  childProductsJson?: InputMaybe<ProductsJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<MarkdownRemarkFieldsFilterInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  sort?: InputMaybe<MarkdownRemarkSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryProductsJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  attributes?: InputMaybe<ProductsJsonAttributesFilterInput>;
  featuredImage?: InputMaybe<FileFilterInput>;
  laboratoire?: InputMaybe<StringQueryOperatorInput>;
  jsonId?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<ProductsJsonFieldsFilterInput>;
};


export type QueryAllProductsJsonArgs = {
  filter?: InputMaybe<ProductsJsonFilterInput>;
  sort?: InputMaybe<ProductsJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<MarkdownRemarkFieldsFilterInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  categories?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<FileFilterInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  childrenProductsJson?: InputMaybe<ProductsJsonFilterListInput>;
  childProductsJson?: InputMaybe<ProductsJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ProductsJsonFilterListInput = {
  elemMatch?: InputMaybe<ProductsJsonFilterInput>;
};

export type ProductsJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  attributes?: InputMaybe<ProductsJsonAttributesFilterInput>;
  featuredImage?: InputMaybe<FileFilterInput>;
  laboratoire?: InputMaybe<StringQueryOperatorInput>;
  jsonId?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<ProductsJsonFieldsFilterInput>;
};

export type ProductsJsonAttributesFilterInput = {
  indication?: InputMaybe<StringQueryOperatorInput>;
  composition?: InputMaybe<StringQueryOperatorInput>;
  action?: InputMaybe<StringQueryOperatorInput>;
  utilisation?: InputMaybe<StringQueryOperatorInput>;
  avantages?: InputMaybe<StringQueryOperatorInput>;
  conseils?: InputMaybe<StringQueryOperatorInput>;
};

export type ProductsJsonFieldsFilterInput = {
  link?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFieldsFilterInput = {
  link?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  depth?: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___frontmatter___type'
  | 'childrenMarkdownRemark___frontmatter___date'
  | 'childrenMarkdownRemark___frontmatter___categories'
  | 'childrenMarkdownRemark___frontmatter___tags'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___sourceInstanceName'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___absolutePath'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___relativePath'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___extension'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___size'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___prettySize'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___modifiedTime'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___accessTime'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___changeTime'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___birthTime'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___root'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___dir'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___base'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___ext'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___name'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___relativeDirectory'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___dev'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___mode'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___nlink'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___uid'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___gid'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___rdev'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___ino'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___atimeMs'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___mtimeMs'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___ctimeMs'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___atime'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___mtime'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___ctime'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___birthtime'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___birthtimeMs'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___blksize'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___blocks'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___publicURL'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___childrenImageSharp'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___childrenMarkdownRemark'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___childrenProductsJson'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___id'
  | 'childrenMarkdownRemark___frontmatter___featuredImage___children'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenMarkdownRemark___fields___link'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___type'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___categories'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___featuredImage___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___featuredImage___absolutePath'
  | 'childMarkdownRemark___frontmatter___featuredImage___relativePath'
  | 'childMarkdownRemark___frontmatter___featuredImage___extension'
  | 'childMarkdownRemark___frontmatter___featuredImage___size'
  | 'childMarkdownRemark___frontmatter___featuredImage___prettySize'
  | 'childMarkdownRemark___frontmatter___featuredImage___modifiedTime'
  | 'childMarkdownRemark___frontmatter___featuredImage___accessTime'
  | 'childMarkdownRemark___frontmatter___featuredImage___changeTime'
  | 'childMarkdownRemark___frontmatter___featuredImage___birthTime'
  | 'childMarkdownRemark___frontmatter___featuredImage___root'
  | 'childMarkdownRemark___frontmatter___featuredImage___dir'
  | 'childMarkdownRemark___frontmatter___featuredImage___base'
  | 'childMarkdownRemark___frontmatter___featuredImage___ext'
  | 'childMarkdownRemark___frontmatter___featuredImage___name'
  | 'childMarkdownRemark___frontmatter___featuredImage___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___featuredImage___dev'
  | 'childMarkdownRemark___frontmatter___featuredImage___mode'
  | 'childMarkdownRemark___frontmatter___featuredImage___nlink'
  | 'childMarkdownRemark___frontmatter___featuredImage___uid'
  | 'childMarkdownRemark___frontmatter___featuredImage___gid'
  | 'childMarkdownRemark___frontmatter___featuredImage___rdev'
  | 'childMarkdownRemark___frontmatter___featuredImage___ino'
  | 'childMarkdownRemark___frontmatter___featuredImage___atimeMs'
  | 'childMarkdownRemark___frontmatter___featuredImage___mtimeMs'
  | 'childMarkdownRemark___frontmatter___featuredImage___ctimeMs'
  | 'childMarkdownRemark___frontmatter___featuredImage___atime'
  | 'childMarkdownRemark___frontmatter___featuredImage___mtime'
  | 'childMarkdownRemark___frontmatter___featuredImage___ctime'
  | 'childMarkdownRemark___frontmatter___featuredImage___birthtime'
  | 'childMarkdownRemark___frontmatter___featuredImage___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___featuredImage___blksize'
  | 'childMarkdownRemark___frontmatter___featuredImage___blocks'
  | 'childMarkdownRemark___frontmatter___featuredImage___publicURL'
  | 'childMarkdownRemark___frontmatter___featuredImage___childrenImageSharp'
  | 'childMarkdownRemark___frontmatter___featuredImage___childrenMarkdownRemark'
  | 'childMarkdownRemark___frontmatter___featuredImage___childrenProductsJson'
  | 'childMarkdownRemark___frontmatter___featuredImage___id'
  | 'childMarkdownRemark___frontmatter___featuredImage___children'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___link'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type'
  | 'childrenProductsJson'
  | 'childrenProductsJson___id'
  | 'childrenProductsJson___parent___id'
  | 'childrenProductsJson___parent___parent___id'
  | 'childrenProductsJson___parent___parent___children'
  | 'childrenProductsJson___parent___children'
  | 'childrenProductsJson___parent___children___id'
  | 'childrenProductsJson___parent___children___children'
  | 'childrenProductsJson___parent___internal___content'
  | 'childrenProductsJson___parent___internal___contentDigest'
  | 'childrenProductsJson___parent___internal___description'
  | 'childrenProductsJson___parent___internal___fieldOwners'
  | 'childrenProductsJson___parent___internal___ignoreType'
  | 'childrenProductsJson___parent___internal___mediaType'
  | 'childrenProductsJson___parent___internal___owner'
  | 'childrenProductsJson___parent___internal___type'
  | 'childrenProductsJson___children'
  | 'childrenProductsJson___children___id'
  | 'childrenProductsJson___children___parent___id'
  | 'childrenProductsJson___children___parent___children'
  | 'childrenProductsJson___children___children'
  | 'childrenProductsJson___children___children___id'
  | 'childrenProductsJson___children___children___children'
  | 'childrenProductsJson___children___internal___content'
  | 'childrenProductsJson___children___internal___contentDigest'
  | 'childrenProductsJson___children___internal___description'
  | 'childrenProductsJson___children___internal___fieldOwners'
  | 'childrenProductsJson___children___internal___ignoreType'
  | 'childrenProductsJson___children___internal___mediaType'
  | 'childrenProductsJson___children___internal___owner'
  | 'childrenProductsJson___children___internal___type'
  | 'childrenProductsJson___internal___content'
  | 'childrenProductsJson___internal___contentDigest'
  | 'childrenProductsJson___internal___description'
  | 'childrenProductsJson___internal___fieldOwners'
  | 'childrenProductsJson___internal___ignoreType'
  | 'childrenProductsJson___internal___mediaType'
  | 'childrenProductsJson___internal___owner'
  | 'childrenProductsJson___internal___type'
  | 'childrenProductsJson___title'
  | 'childrenProductsJson___attributes___indication'
  | 'childrenProductsJson___attributes___composition'
  | 'childrenProductsJson___attributes___action'
  | 'childrenProductsJson___attributes___utilisation'
  | 'childrenProductsJson___attributes___avantages'
  | 'childrenProductsJson___attributes___conseils'
  | 'childrenProductsJson___featuredImage___sourceInstanceName'
  | 'childrenProductsJson___featuredImage___absolutePath'
  | 'childrenProductsJson___featuredImage___relativePath'
  | 'childrenProductsJson___featuredImage___extension'
  | 'childrenProductsJson___featuredImage___size'
  | 'childrenProductsJson___featuredImage___prettySize'
  | 'childrenProductsJson___featuredImage___modifiedTime'
  | 'childrenProductsJson___featuredImage___accessTime'
  | 'childrenProductsJson___featuredImage___changeTime'
  | 'childrenProductsJson___featuredImage___birthTime'
  | 'childrenProductsJson___featuredImage___root'
  | 'childrenProductsJson___featuredImage___dir'
  | 'childrenProductsJson___featuredImage___base'
  | 'childrenProductsJson___featuredImage___ext'
  | 'childrenProductsJson___featuredImage___name'
  | 'childrenProductsJson___featuredImage___relativeDirectory'
  | 'childrenProductsJson___featuredImage___dev'
  | 'childrenProductsJson___featuredImage___mode'
  | 'childrenProductsJson___featuredImage___nlink'
  | 'childrenProductsJson___featuredImage___uid'
  | 'childrenProductsJson___featuredImage___gid'
  | 'childrenProductsJson___featuredImage___rdev'
  | 'childrenProductsJson___featuredImage___ino'
  | 'childrenProductsJson___featuredImage___atimeMs'
  | 'childrenProductsJson___featuredImage___mtimeMs'
  | 'childrenProductsJson___featuredImage___ctimeMs'
  | 'childrenProductsJson___featuredImage___atime'
  | 'childrenProductsJson___featuredImage___mtime'
  | 'childrenProductsJson___featuredImage___ctime'
  | 'childrenProductsJson___featuredImage___birthtime'
  | 'childrenProductsJson___featuredImage___birthtimeMs'
  | 'childrenProductsJson___featuredImage___blksize'
  | 'childrenProductsJson___featuredImage___blocks'
  | 'childrenProductsJson___featuredImage___publicURL'
  | 'childrenProductsJson___featuredImage___childrenImageSharp'
  | 'childrenProductsJson___featuredImage___childrenImageSharp___gatsbyImageData'
  | 'childrenProductsJson___featuredImage___childrenImageSharp___id'
  | 'childrenProductsJson___featuredImage___childrenImageSharp___children'
  | 'childrenProductsJson___featuredImage___childImageSharp___gatsbyImageData'
  | 'childrenProductsJson___featuredImage___childImageSharp___id'
  | 'childrenProductsJson___featuredImage___childImageSharp___children'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___id'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___excerpt'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___html'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___htmlAst'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___excerptAst'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___headings'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___timeToRead'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___tableOfContents'
  | 'childrenProductsJson___featuredImage___childrenMarkdownRemark___children'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___id'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___excerpt'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___rawMarkdownBody'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___fileAbsolutePath'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___html'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___htmlAst'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___excerptAst'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___headings'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___timeToRead'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___tableOfContents'
  | 'childrenProductsJson___featuredImage___childMarkdownRemark___children'
  | 'childrenProductsJson___featuredImage___childrenProductsJson'
  | 'childrenProductsJson___featuredImage___childrenProductsJson___id'
  | 'childrenProductsJson___featuredImage___childrenProductsJson___children'
  | 'childrenProductsJson___featuredImage___childrenProductsJson___title'
  | 'childrenProductsJson___featuredImage___childrenProductsJson___laboratoire'
  | 'childrenProductsJson___featuredImage___childrenProductsJson___jsonId'
  | 'childrenProductsJson___featuredImage___childProductsJson___id'
  | 'childrenProductsJson___featuredImage___childProductsJson___children'
  | 'childrenProductsJson___featuredImage___childProductsJson___title'
  | 'childrenProductsJson___featuredImage___childProductsJson___laboratoire'
  | 'childrenProductsJson___featuredImage___childProductsJson___jsonId'
  | 'childrenProductsJson___featuredImage___id'
  | 'childrenProductsJson___featuredImage___parent___id'
  | 'childrenProductsJson___featuredImage___parent___children'
  | 'childrenProductsJson___featuredImage___children'
  | 'childrenProductsJson___featuredImage___children___id'
  | 'childrenProductsJson___featuredImage___children___children'
  | 'childrenProductsJson___featuredImage___internal___content'
  | 'childrenProductsJson___featuredImage___internal___contentDigest'
  | 'childrenProductsJson___featuredImage___internal___description'
  | 'childrenProductsJson___featuredImage___internal___fieldOwners'
  | 'childrenProductsJson___featuredImage___internal___ignoreType'
  | 'childrenProductsJson___featuredImage___internal___mediaType'
  | 'childrenProductsJson___featuredImage___internal___owner'
  | 'childrenProductsJson___featuredImage___internal___type'
  | 'childrenProductsJson___laboratoire'
  | 'childrenProductsJson___jsonId'
  | 'childrenProductsJson___fields___link'
  | 'childProductsJson___id'
  | 'childProductsJson___parent___id'
  | 'childProductsJson___parent___parent___id'
  | 'childProductsJson___parent___parent___children'
  | 'childProductsJson___parent___children'
  | 'childProductsJson___parent___children___id'
  | 'childProductsJson___parent___children___children'
  | 'childProductsJson___parent___internal___content'
  | 'childProductsJson___parent___internal___contentDigest'
  | 'childProductsJson___parent___internal___description'
  | 'childProductsJson___parent___internal___fieldOwners'
  | 'childProductsJson___parent___internal___ignoreType'
  | 'childProductsJson___parent___internal___mediaType'
  | 'childProductsJson___parent___internal___owner'
  | 'childProductsJson___parent___internal___type'
  | 'childProductsJson___children'
  | 'childProductsJson___children___id'
  | 'childProductsJson___children___parent___id'
  | 'childProductsJson___children___parent___children'
  | 'childProductsJson___children___children'
  | 'childProductsJson___children___children___id'
  | 'childProductsJson___children___children___children'
  | 'childProductsJson___children___internal___content'
  | 'childProductsJson___children___internal___contentDigest'
  | 'childProductsJson___children___internal___description'
  | 'childProductsJson___children___internal___fieldOwners'
  | 'childProductsJson___children___internal___ignoreType'
  | 'childProductsJson___children___internal___mediaType'
  | 'childProductsJson___children___internal___owner'
  | 'childProductsJson___children___internal___type'
  | 'childProductsJson___internal___content'
  | 'childProductsJson___internal___contentDigest'
  | 'childProductsJson___internal___description'
  | 'childProductsJson___internal___fieldOwners'
  | 'childProductsJson___internal___ignoreType'
  | 'childProductsJson___internal___mediaType'
  | 'childProductsJson___internal___owner'
  | 'childProductsJson___internal___type'
  | 'childProductsJson___title'
  | 'childProductsJson___attributes___indication'
  | 'childProductsJson___attributes___composition'
  | 'childProductsJson___attributes___action'
  | 'childProductsJson___attributes___utilisation'
  | 'childProductsJson___attributes___avantages'
  | 'childProductsJson___attributes___conseils'
  | 'childProductsJson___featuredImage___sourceInstanceName'
  | 'childProductsJson___featuredImage___absolutePath'
  | 'childProductsJson___featuredImage___relativePath'
  | 'childProductsJson___featuredImage___extension'
  | 'childProductsJson___featuredImage___size'
  | 'childProductsJson___featuredImage___prettySize'
  | 'childProductsJson___featuredImage___modifiedTime'
  | 'childProductsJson___featuredImage___accessTime'
  | 'childProductsJson___featuredImage___changeTime'
  | 'childProductsJson___featuredImage___birthTime'
  | 'childProductsJson___featuredImage___root'
  | 'childProductsJson___featuredImage___dir'
  | 'childProductsJson___featuredImage___base'
  | 'childProductsJson___featuredImage___ext'
  | 'childProductsJson___featuredImage___name'
  | 'childProductsJson___featuredImage___relativeDirectory'
  | 'childProductsJson___featuredImage___dev'
  | 'childProductsJson___featuredImage___mode'
  | 'childProductsJson___featuredImage___nlink'
  | 'childProductsJson___featuredImage___uid'
  | 'childProductsJson___featuredImage___gid'
  | 'childProductsJson___featuredImage___rdev'
  | 'childProductsJson___featuredImage___ino'
  | 'childProductsJson___featuredImage___atimeMs'
  | 'childProductsJson___featuredImage___mtimeMs'
  | 'childProductsJson___featuredImage___ctimeMs'
  | 'childProductsJson___featuredImage___atime'
  | 'childProductsJson___featuredImage___mtime'
  | 'childProductsJson___featuredImage___ctime'
  | 'childProductsJson___featuredImage___birthtime'
  | 'childProductsJson___featuredImage___birthtimeMs'
  | 'childProductsJson___featuredImage___blksize'
  | 'childProductsJson___featuredImage___blocks'
  | 'childProductsJson___featuredImage___publicURL'
  | 'childProductsJson___featuredImage___childrenImageSharp'
  | 'childProductsJson___featuredImage___childrenImageSharp___gatsbyImageData'
  | 'childProductsJson___featuredImage___childrenImageSharp___id'
  | 'childProductsJson___featuredImage___childrenImageSharp___children'
  | 'childProductsJson___featuredImage___childImageSharp___gatsbyImageData'
  | 'childProductsJson___featuredImage___childImageSharp___id'
  | 'childProductsJson___featuredImage___childImageSharp___children'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___id'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___excerpt'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___rawMarkdownBody'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___fileAbsolutePath'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___html'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___htmlAst'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___excerptAst'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___headings'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___timeToRead'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___tableOfContents'
  | 'childProductsJson___featuredImage___childrenMarkdownRemark___children'
  | 'childProductsJson___featuredImage___childMarkdownRemark___id'
  | 'childProductsJson___featuredImage___childMarkdownRemark___excerpt'
  | 'childProductsJson___featuredImage___childMarkdownRemark___rawMarkdownBody'
  | 'childProductsJson___featuredImage___childMarkdownRemark___fileAbsolutePath'
  | 'childProductsJson___featuredImage___childMarkdownRemark___html'
  | 'childProductsJson___featuredImage___childMarkdownRemark___htmlAst'
  | 'childProductsJson___featuredImage___childMarkdownRemark___excerptAst'
  | 'childProductsJson___featuredImage___childMarkdownRemark___headings'
  | 'childProductsJson___featuredImage___childMarkdownRemark___timeToRead'
  | 'childProductsJson___featuredImage___childMarkdownRemark___tableOfContents'
  | 'childProductsJson___featuredImage___childMarkdownRemark___children'
  | 'childProductsJson___featuredImage___childrenProductsJson'
  | 'childProductsJson___featuredImage___childrenProductsJson___id'
  | 'childProductsJson___featuredImage___childrenProductsJson___children'
  | 'childProductsJson___featuredImage___childrenProductsJson___title'
  | 'childProductsJson___featuredImage___childrenProductsJson___laboratoire'
  | 'childProductsJson___featuredImage___childrenProductsJson___jsonId'
  | 'childProductsJson___featuredImage___childProductsJson___id'
  | 'childProductsJson___featuredImage___childProductsJson___children'
  | 'childProductsJson___featuredImage___childProductsJson___title'
  | 'childProductsJson___featuredImage___childProductsJson___laboratoire'
  | 'childProductsJson___featuredImage___childProductsJson___jsonId'
  | 'childProductsJson___featuredImage___id'
  | 'childProductsJson___featuredImage___parent___id'
  | 'childProductsJson___featuredImage___parent___children'
  | 'childProductsJson___featuredImage___children'
  | 'childProductsJson___featuredImage___children___id'
  | 'childProductsJson___featuredImage___children___children'
  | 'childProductsJson___featuredImage___internal___content'
  | 'childProductsJson___featuredImage___internal___contentDigest'
  | 'childProductsJson___featuredImage___internal___description'
  | 'childProductsJson___featuredImage___internal___fieldOwners'
  | 'childProductsJson___featuredImage___internal___ignoreType'
  | 'childProductsJson___featuredImage___internal___mediaType'
  | 'childProductsJson___featuredImage___internal___owner'
  | 'childProductsJson___featuredImage___internal___type'
  | 'childProductsJson___laboratoire'
  | 'childProductsJson___jsonId'
  | 'childProductsJson___fields___link'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___type'
  | 'frontmatter___date'
  | 'frontmatter___categories'
  | 'frontmatter___tags'
  | 'frontmatter___featuredImage___sourceInstanceName'
  | 'frontmatter___featuredImage___absolutePath'
  | 'frontmatter___featuredImage___relativePath'
  | 'frontmatter___featuredImage___extension'
  | 'frontmatter___featuredImage___size'
  | 'frontmatter___featuredImage___prettySize'
  | 'frontmatter___featuredImage___modifiedTime'
  | 'frontmatter___featuredImage___accessTime'
  | 'frontmatter___featuredImage___changeTime'
  | 'frontmatter___featuredImage___birthTime'
  | 'frontmatter___featuredImage___root'
  | 'frontmatter___featuredImage___dir'
  | 'frontmatter___featuredImage___base'
  | 'frontmatter___featuredImage___ext'
  | 'frontmatter___featuredImage___name'
  | 'frontmatter___featuredImage___relativeDirectory'
  | 'frontmatter___featuredImage___dev'
  | 'frontmatter___featuredImage___mode'
  | 'frontmatter___featuredImage___nlink'
  | 'frontmatter___featuredImage___uid'
  | 'frontmatter___featuredImage___gid'
  | 'frontmatter___featuredImage___rdev'
  | 'frontmatter___featuredImage___ino'
  | 'frontmatter___featuredImage___atimeMs'
  | 'frontmatter___featuredImage___mtimeMs'
  | 'frontmatter___featuredImage___ctimeMs'
  | 'frontmatter___featuredImage___atime'
  | 'frontmatter___featuredImage___mtime'
  | 'frontmatter___featuredImage___ctime'
  | 'frontmatter___featuredImage___birthtime'
  | 'frontmatter___featuredImage___birthtimeMs'
  | 'frontmatter___featuredImage___blksize'
  | 'frontmatter___featuredImage___blocks'
  | 'frontmatter___featuredImage___publicURL'
  | 'frontmatter___featuredImage___childrenImageSharp'
  | 'frontmatter___featuredImage___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___featuredImage___childrenImageSharp___id'
  | 'frontmatter___featuredImage___childrenImageSharp___children'
  | 'frontmatter___featuredImage___childImageSharp___gatsbyImageData'
  | 'frontmatter___featuredImage___childImageSharp___id'
  | 'frontmatter___featuredImage___childImageSharp___children'
  | 'frontmatter___featuredImage___childrenMarkdownRemark'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___id'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___excerpt'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___html'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___htmlAst'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___excerptAst'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___headings'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___timeToRead'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___tableOfContents'
  | 'frontmatter___featuredImage___childrenMarkdownRemark___children'
  | 'frontmatter___featuredImage___childMarkdownRemark___id'
  | 'frontmatter___featuredImage___childMarkdownRemark___excerpt'
  | 'frontmatter___featuredImage___childMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___featuredImage___childMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___featuredImage___childMarkdownRemark___html'
  | 'frontmatter___featuredImage___childMarkdownRemark___htmlAst'
  | 'frontmatter___featuredImage___childMarkdownRemark___excerptAst'
  | 'frontmatter___featuredImage___childMarkdownRemark___headings'
  | 'frontmatter___featuredImage___childMarkdownRemark___timeToRead'
  | 'frontmatter___featuredImage___childMarkdownRemark___tableOfContents'
  | 'frontmatter___featuredImage___childMarkdownRemark___children'
  | 'frontmatter___featuredImage___childrenProductsJson'
  | 'frontmatter___featuredImage___childrenProductsJson___id'
  | 'frontmatter___featuredImage___childrenProductsJson___children'
  | 'frontmatter___featuredImage___childrenProductsJson___title'
  | 'frontmatter___featuredImage___childrenProductsJson___laboratoire'
  | 'frontmatter___featuredImage___childrenProductsJson___jsonId'
  | 'frontmatter___featuredImage___childProductsJson___id'
  | 'frontmatter___featuredImage___childProductsJson___children'
  | 'frontmatter___featuredImage___childProductsJson___title'
  | 'frontmatter___featuredImage___childProductsJson___laboratoire'
  | 'frontmatter___featuredImage___childProductsJson___jsonId'
  | 'frontmatter___featuredImage___id'
  | 'frontmatter___featuredImage___parent___id'
  | 'frontmatter___featuredImage___parent___children'
  | 'frontmatter___featuredImage___children'
  | 'frontmatter___featuredImage___children___id'
  | 'frontmatter___featuredImage___children___children'
  | 'frontmatter___featuredImage___internal___content'
  | 'frontmatter___featuredImage___internal___contentDigest'
  | 'frontmatter___featuredImage___internal___description'
  | 'frontmatter___featuredImage___internal___fieldOwners'
  | 'frontmatter___featuredImage___internal___ignoreType'
  | 'frontmatter___featuredImage___internal___mediaType'
  | 'frontmatter___featuredImage___internal___owner'
  | 'frontmatter___featuredImage___internal___type'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields___link'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ProductsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProductsJsonEdge>;
  nodes: Array<ProductsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ProductsJsonGroupConnection>;
};


export type ProductsJsonConnectionDistinctArgs = {
  field: ProductsJsonFieldsEnum;
};


export type ProductsJsonConnectionMaxArgs = {
  field: ProductsJsonFieldsEnum;
};


export type ProductsJsonConnectionMinArgs = {
  field: ProductsJsonFieldsEnum;
};


export type ProductsJsonConnectionSumArgs = {
  field: ProductsJsonFieldsEnum;
};


export type ProductsJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ProductsJsonFieldsEnum;
};

export type ProductsJsonEdge = {
  next?: Maybe<ProductsJson>;
  node: ProductsJson;
  previous?: Maybe<ProductsJson>;
};

export type ProductsJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'attributes___indication'
  | 'attributes___composition'
  | 'attributes___action'
  | 'attributes___utilisation'
  | 'attributes___avantages'
  | 'attributes___conseils'
  | 'featuredImage___sourceInstanceName'
  | 'featuredImage___absolutePath'
  | 'featuredImage___relativePath'
  | 'featuredImage___extension'
  | 'featuredImage___size'
  | 'featuredImage___prettySize'
  | 'featuredImage___modifiedTime'
  | 'featuredImage___accessTime'
  | 'featuredImage___changeTime'
  | 'featuredImage___birthTime'
  | 'featuredImage___root'
  | 'featuredImage___dir'
  | 'featuredImage___base'
  | 'featuredImage___ext'
  | 'featuredImage___name'
  | 'featuredImage___relativeDirectory'
  | 'featuredImage___dev'
  | 'featuredImage___mode'
  | 'featuredImage___nlink'
  | 'featuredImage___uid'
  | 'featuredImage___gid'
  | 'featuredImage___rdev'
  | 'featuredImage___ino'
  | 'featuredImage___atimeMs'
  | 'featuredImage___mtimeMs'
  | 'featuredImage___ctimeMs'
  | 'featuredImage___atime'
  | 'featuredImage___mtime'
  | 'featuredImage___ctime'
  | 'featuredImage___birthtime'
  | 'featuredImage___birthtimeMs'
  | 'featuredImage___blksize'
  | 'featuredImage___blocks'
  | 'featuredImage___publicURL'
  | 'featuredImage___childrenImageSharp'
  | 'featuredImage___childrenImageSharp___fixed___base64'
  | 'featuredImage___childrenImageSharp___fixed___tracedSVG'
  | 'featuredImage___childrenImageSharp___fixed___aspectRatio'
  | 'featuredImage___childrenImageSharp___fixed___width'
  | 'featuredImage___childrenImageSharp___fixed___height'
  | 'featuredImage___childrenImageSharp___fixed___src'
  | 'featuredImage___childrenImageSharp___fixed___srcSet'
  | 'featuredImage___childrenImageSharp___fixed___srcWebp'
  | 'featuredImage___childrenImageSharp___fixed___srcSetWebp'
  | 'featuredImage___childrenImageSharp___fixed___originalName'
  | 'featuredImage___childrenImageSharp___fluid___base64'
  | 'featuredImage___childrenImageSharp___fluid___tracedSVG'
  | 'featuredImage___childrenImageSharp___fluid___aspectRatio'
  | 'featuredImage___childrenImageSharp___fluid___src'
  | 'featuredImage___childrenImageSharp___fluid___srcSet'
  | 'featuredImage___childrenImageSharp___fluid___srcWebp'
  | 'featuredImage___childrenImageSharp___fluid___srcSetWebp'
  | 'featuredImage___childrenImageSharp___fluid___sizes'
  | 'featuredImage___childrenImageSharp___fluid___originalImg'
  | 'featuredImage___childrenImageSharp___fluid___originalName'
  | 'featuredImage___childrenImageSharp___fluid___presentationWidth'
  | 'featuredImage___childrenImageSharp___fluid___presentationHeight'
  | 'featuredImage___childrenImageSharp___gatsbyImageData'
  | 'featuredImage___childrenImageSharp___original___width'
  | 'featuredImage___childrenImageSharp___original___height'
  | 'featuredImage___childrenImageSharp___original___src'
  | 'featuredImage___childrenImageSharp___resize___src'
  | 'featuredImage___childrenImageSharp___resize___tracedSVG'
  | 'featuredImage___childrenImageSharp___resize___width'
  | 'featuredImage___childrenImageSharp___resize___height'
  | 'featuredImage___childrenImageSharp___resize___aspectRatio'
  | 'featuredImage___childrenImageSharp___resize___originalName'
  | 'featuredImage___childrenImageSharp___id'
  | 'featuredImage___childrenImageSharp___parent___id'
  | 'featuredImage___childrenImageSharp___parent___children'
  | 'featuredImage___childrenImageSharp___children'
  | 'featuredImage___childrenImageSharp___children___id'
  | 'featuredImage___childrenImageSharp___children___children'
  | 'featuredImage___childrenImageSharp___internal___content'
  | 'featuredImage___childrenImageSharp___internal___contentDigest'
  | 'featuredImage___childrenImageSharp___internal___description'
  | 'featuredImage___childrenImageSharp___internal___fieldOwners'
  | 'featuredImage___childrenImageSharp___internal___ignoreType'
  | 'featuredImage___childrenImageSharp___internal___mediaType'
  | 'featuredImage___childrenImageSharp___internal___owner'
  | 'featuredImage___childrenImageSharp___internal___type'
  | 'featuredImage___childImageSharp___fixed___base64'
  | 'featuredImage___childImageSharp___fixed___tracedSVG'
  | 'featuredImage___childImageSharp___fixed___aspectRatio'
  | 'featuredImage___childImageSharp___fixed___width'
  | 'featuredImage___childImageSharp___fixed___height'
  | 'featuredImage___childImageSharp___fixed___src'
  | 'featuredImage___childImageSharp___fixed___srcSet'
  | 'featuredImage___childImageSharp___fixed___srcWebp'
  | 'featuredImage___childImageSharp___fixed___srcSetWebp'
  | 'featuredImage___childImageSharp___fixed___originalName'
  | 'featuredImage___childImageSharp___fluid___base64'
  | 'featuredImage___childImageSharp___fluid___tracedSVG'
  | 'featuredImage___childImageSharp___fluid___aspectRatio'
  | 'featuredImage___childImageSharp___fluid___src'
  | 'featuredImage___childImageSharp___fluid___srcSet'
  | 'featuredImage___childImageSharp___fluid___srcWebp'
  | 'featuredImage___childImageSharp___fluid___srcSetWebp'
  | 'featuredImage___childImageSharp___fluid___sizes'
  | 'featuredImage___childImageSharp___fluid___originalImg'
  | 'featuredImage___childImageSharp___fluid___originalName'
  | 'featuredImage___childImageSharp___fluid___presentationWidth'
  | 'featuredImage___childImageSharp___fluid___presentationHeight'
  | 'featuredImage___childImageSharp___gatsbyImageData'
  | 'featuredImage___childImageSharp___original___width'
  | 'featuredImage___childImageSharp___original___height'
  | 'featuredImage___childImageSharp___original___src'
  | 'featuredImage___childImageSharp___resize___src'
  | 'featuredImage___childImageSharp___resize___tracedSVG'
  | 'featuredImage___childImageSharp___resize___width'
  | 'featuredImage___childImageSharp___resize___height'
  | 'featuredImage___childImageSharp___resize___aspectRatio'
  | 'featuredImage___childImageSharp___resize___originalName'
  | 'featuredImage___childImageSharp___id'
  | 'featuredImage___childImageSharp___parent___id'
  | 'featuredImage___childImageSharp___parent___children'
  | 'featuredImage___childImageSharp___children'
  | 'featuredImage___childImageSharp___children___id'
  | 'featuredImage___childImageSharp___children___children'
  | 'featuredImage___childImageSharp___internal___content'
  | 'featuredImage___childImageSharp___internal___contentDigest'
  | 'featuredImage___childImageSharp___internal___description'
  | 'featuredImage___childImageSharp___internal___fieldOwners'
  | 'featuredImage___childImageSharp___internal___ignoreType'
  | 'featuredImage___childImageSharp___internal___mediaType'
  | 'featuredImage___childImageSharp___internal___owner'
  | 'featuredImage___childImageSharp___internal___type'
  | 'featuredImage___childrenMarkdownRemark'
  | 'featuredImage___childrenMarkdownRemark___id'
  | 'featuredImage___childrenMarkdownRemark___frontmatter___title'
  | 'featuredImage___childrenMarkdownRemark___frontmatter___type'
  | 'featuredImage___childrenMarkdownRemark___frontmatter___date'
  | 'featuredImage___childrenMarkdownRemark___frontmatter___categories'
  | 'featuredImage___childrenMarkdownRemark___frontmatter___tags'
  | 'featuredImage___childrenMarkdownRemark___excerpt'
  | 'featuredImage___childrenMarkdownRemark___rawMarkdownBody'
  | 'featuredImage___childrenMarkdownRemark___fileAbsolutePath'
  | 'featuredImage___childrenMarkdownRemark___fields___link'
  | 'featuredImage___childrenMarkdownRemark___html'
  | 'featuredImage___childrenMarkdownRemark___htmlAst'
  | 'featuredImage___childrenMarkdownRemark___excerptAst'
  | 'featuredImage___childrenMarkdownRemark___headings'
  | 'featuredImage___childrenMarkdownRemark___headings___id'
  | 'featuredImage___childrenMarkdownRemark___headings___value'
  | 'featuredImage___childrenMarkdownRemark___headings___depth'
  | 'featuredImage___childrenMarkdownRemark___timeToRead'
  | 'featuredImage___childrenMarkdownRemark___tableOfContents'
  | 'featuredImage___childrenMarkdownRemark___wordCount___paragraphs'
  | 'featuredImage___childrenMarkdownRemark___wordCount___sentences'
  | 'featuredImage___childrenMarkdownRemark___wordCount___words'
  | 'featuredImage___childrenMarkdownRemark___parent___id'
  | 'featuredImage___childrenMarkdownRemark___parent___children'
  | 'featuredImage___childrenMarkdownRemark___children'
  | 'featuredImage___childrenMarkdownRemark___children___id'
  | 'featuredImage___childrenMarkdownRemark___children___children'
  | 'featuredImage___childrenMarkdownRemark___internal___content'
  | 'featuredImage___childrenMarkdownRemark___internal___contentDigest'
  | 'featuredImage___childrenMarkdownRemark___internal___description'
  | 'featuredImage___childrenMarkdownRemark___internal___fieldOwners'
  | 'featuredImage___childrenMarkdownRemark___internal___ignoreType'
  | 'featuredImage___childrenMarkdownRemark___internal___mediaType'
  | 'featuredImage___childrenMarkdownRemark___internal___owner'
  | 'featuredImage___childrenMarkdownRemark___internal___type'
  | 'featuredImage___childMarkdownRemark___id'
  | 'featuredImage___childMarkdownRemark___frontmatter___title'
  | 'featuredImage___childMarkdownRemark___frontmatter___type'
  | 'featuredImage___childMarkdownRemark___frontmatter___date'
  | 'featuredImage___childMarkdownRemark___frontmatter___categories'
  | 'featuredImage___childMarkdownRemark___frontmatter___tags'
  | 'featuredImage___childMarkdownRemark___excerpt'
  | 'featuredImage___childMarkdownRemark___rawMarkdownBody'
  | 'featuredImage___childMarkdownRemark___fileAbsolutePath'
  | 'featuredImage___childMarkdownRemark___fields___link'
  | 'featuredImage___childMarkdownRemark___html'
  | 'featuredImage___childMarkdownRemark___htmlAst'
  | 'featuredImage___childMarkdownRemark___excerptAst'
  | 'featuredImage___childMarkdownRemark___headings'
  | 'featuredImage___childMarkdownRemark___headings___id'
  | 'featuredImage___childMarkdownRemark___headings___value'
  | 'featuredImage___childMarkdownRemark___headings___depth'
  | 'featuredImage___childMarkdownRemark___timeToRead'
  | 'featuredImage___childMarkdownRemark___tableOfContents'
  | 'featuredImage___childMarkdownRemark___wordCount___paragraphs'
  | 'featuredImage___childMarkdownRemark___wordCount___sentences'
  | 'featuredImage___childMarkdownRemark___wordCount___words'
  | 'featuredImage___childMarkdownRemark___parent___id'
  | 'featuredImage___childMarkdownRemark___parent___children'
  | 'featuredImage___childMarkdownRemark___children'
  | 'featuredImage___childMarkdownRemark___children___id'
  | 'featuredImage___childMarkdownRemark___children___children'
  | 'featuredImage___childMarkdownRemark___internal___content'
  | 'featuredImage___childMarkdownRemark___internal___contentDigest'
  | 'featuredImage___childMarkdownRemark___internal___description'
  | 'featuredImage___childMarkdownRemark___internal___fieldOwners'
  | 'featuredImage___childMarkdownRemark___internal___ignoreType'
  | 'featuredImage___childMarkdownRemark___internal___mediaType'
  | 'featuredImage___childMarkdownRemark___internal___owner'
  | 'featuredImage___childMarkdownRemark___internal___type'
  | 'featuredImage___childrenProductsJson'
  | 'featuredImage___childrenProductsJson___id'
  | 'featuredImage___childrenProductsJson___parent___id'
  | 'featuredImage___childrenProductsJson___parent___children'
  | 'featuredImage___childrenProductsJson___children'
  | 'featuredImage___childrenProductsJson___children___id'
  | 'featuredImage___childrenProductsJson___children___children'
  | 'featuredImage___childrenProductsJson___internal___content'
  | 'featuredImage___childrenProductsJson___internal___contentDigest'
  | 'featuredImage___childrenProductsJson___internal___description'
  | 'featuredImage___childrenProductsJson___internal___fieldOwners'
  | 'featuredImage___childrenProductsJson___internal___ignoreType'
  | 'featuredImage___childrenProductsJson___internal___mediaType'
  | 'featuredImage___childrenProductsJson___internal___owner'
  | 'featuredImage___childrenProductsJson___internal___type'
  | 'featuredImage___childrenProductsJson___title'
  | 'featuredImage___childrenProductsJson___attributes___indication'
  | 'featuredImage___childrenProductsJson___attributes___composition'
  | 'featuredImage___childrenProductsJson___attributes___action'
  | 'featuredImage___childrenProductsJson___attributes___utilisation'
  | 'featuredImage___childrenProductsJson___attributes___avantages'
  | 'featuredImage___childrenProductsJson___attributes___conseils'
  | 'featuredImage___childrenProductsJson___featuredImage___sourceInstanceName'
  | 'featuredImage___childrenProductsJson___featuredImage___absolutePath'
  | 'featuredImage___childrenProductsJson___featuredImage___relativePath'
  | 'featuredImage___childrenProductsJson___featuredImage___extension'
  | 'featuredImage___childrenProductsJson___featuredImage___size'
  | 'featuredImage___childrenProductsJson___featuredImage___prettySize'
  | 'featuredImage___childrenProductsJson___featuredImage___modifiedTime'
  | 'featuredImage___childrenProductsJson___featuredImage___accessTime'
  | 'featuredImage___childrenProductsJson___featuredImage___changeTime'
  | 'featuredImage___childrenProductsJson___featuredImage___birthTime'
  | 'featuredImage___childrenProductsJson___featuredImage___root'
  | 'featuredImage___childrenProductsJson___featuredImage___dir'
  | 'featuredImage___childrenProductsJson___featuredImage___base'
  | 'featuredImage___childrenProductsJson___featuredImage___ext'
  | 'featuredImage___childrenProductsJson___featuredImage___name'
  | 'featuredImage___childrenProductsJson___featuredImage___relativeDirectory'
  | 'featuredImage___childrenProductsJson___featuredImage___dev'
  | 'featuredImage___childrenProductsJson___featuredImage___mode'
  | 'featuredImage___childrenProductsJson___featuredImage___nlink'
  | 'featuredImage___childrenProductsJson___featuredImage___uid'
  | 'featuredImage___childrenProductsJson___featuredImage___gid'
  | 'featuredImage___childrenProductsJson___featuredImage___rdev'
  | 'featuredImage___childrenProductsJson___featuredImage___ino'
  | 'featuredImage___childrenProductsJson___featuredImage___atimeMs'
  | 'featuredImage___childrenProductsJson___featuredImage___mtimeMs'
  | 'featuredImage___childrenProductsJson___featuredImage___ctimeMs'
  | 'featuredImage___childrenProductsJson___featuredImage___atime'
  | 'featuredImage___childrenProductsJson___featuredImage___mtime'
  | 'featuredImage___childrenProductsJson___featuredImage___ctime'
  | 'featuredImage___childrenProductsJson___featuredImage___birthtime'
  | 'featuredImage___childrenProductsJson___featuredImage___birthtimeMs'
  | 'featuredImage___childrenProductsJson___featuredImage___blksize'
  | 'featuredImage___childrenProductsJson___featuredImage___blocks'
  | 'featuredImage___childrenProductsJson___featuredImage___publicURL'
  | 'featuredImage___childrenProductsJson___featuredImage___childrenImageSharp'
  | 'featuredImage___childrenProductsJson___featuredImage___childrenMarkdownRemark'
  | 'featuredImage___childrenProductsJson___featuredImage___childrenProductsJson'
  | 'featuredImage___childrenProductsJson___featuredImage___id'
  | 'featuredImage___childrenProductsJson___featuredImage___children'
  | 'featuredImage___childrenProductsJson___laboratoire'
  | 'featuredImage___childrenProductsJson___jsonId'
  | 'featuredImage___childrenProductsJson___fields___link'
  | 'featuredImage___childProductsJson___id'
  | 'featuredImage___childProductsJson___parent___id'
  | 'featuredImage___childProductsJson___parent___children'
  | 'featuredImage___childProductsJson___children'
  | 'featuredImage___childProductsJson___children___id'
  | 'featuredImage___childProductsJson___children___children'
  | 'featuredImage___childProductsJson___internal___content'
  | 'featuredImage___childProductsJson___internal___contentDigest'
  | 'featuredImage___childProductsJson___internal___description'
  | 'featuredImage___childProductsJson___internal___fieldOwners'
  | 'featuredImage___childProductsJson___internal___ignoreType'
  | 'featuredImage___childProductsJson___internal___mediaType'
  | 'featuredImage___childProductsJson___internal___owner'
  | 'featuredImage___childProductsJson___internal___type'
  | 'featuredImage___childProductsJson___title'
  | 'featuredImage___childProductsJson___attributes___indication'
  | 'featuredImage___childProductsJson___attributes___composition'
  | 'featuredImage___childProductsJson___attributes___action'
  | 'featuredImage___childProductsJson___attributes___utilisation'
  | 'featuredImage___childProductsJson___attributes___avantages'
  | 'featuredImage___childProductsJson___attributes___conseils'
  | 'featuredImage___childProductsJson___featuredImage___sourceInstanceName'
  | 'featuredImage___childProductsJson___featuredImage___absolutePath'
  | 'featuredImage___childProductsJson___featuredImage___relativePath'
  | 'featuredImage___childProductsJson___featuredImage___extension'
  | 'featuredImage___childProductsJson___featuredImage___size'
  | 'featuredImage___childProductsJson___featuredImage___prettySize'
  | 'featuredImage___childProductsJson___featuredImage___modifiedTime'
  | 'featuredImage___childProductsJson___featuredImage___accessTime'
  | 'featuredImage___childProductsJson___featuredImage___changeTime'
  | 'featuredImage___childProductsJson___featuredImage___birthTime'
  | 'featuredImage___childProductsJson___featuredImage___root'
  | 'featuredImage___childProductsJson___featuredImage___dir'
  | 'featuredImage___childProductsJson___featuredImage___base'
  | 'featuredImage___childProductsJson___featuredImage___ext'
  | 'featuredImage___childProductsJson___featuredImage___name'
  | 'featuredImage___childProductsJson___featuredImage___relativeDirectory'
  | 'featuredImage___childProductsJson___featuredImage___dev'
  | 'featuredImage___childProductsJson___featuredImage___mode'
  | 'featuredImage___childProductsJson___featuredImage___nlink'
  | 'featuredImage___childProductsJson___featuredImage___uid'
  | 'featuredImage___childProductsJson___featuredImage___gid'
  | 'featuredImage___childProductsJson___featuredImage___rdev'
  | 'featuredImage___childProductsJson___featuredImage___ino'
  | 'featuredImage___childProductsJson___featuredImage___atimeMs'
  | 'featuredImage___childProductsJson___featuredImage___mtimeMs'
  | 'featuredImage___childProductsJson___featuredImage___ctimeMs'
  | 'featuredImage___childProductsJson___featuredImage___atime'
  | 'featuredImage___childProductsJson___featuredImage___mtime'
  | 'featuredImage___childProductsJson___featuredImage___ctime'
  | 'featuredImage___childProductsJson___featuredImage___birthtime'
  | 'featuredImage___childProductsJson___featuredImage___birthtimeMs'
  | 'featuredImage___childProductsJson___featuredImage___blksize'
  | 'featuredImage___childProductsJson___featuredImage___blocks'
  | 'featuredImage___childProductsJson___featuredImage___publicURL'
  | 'featuredImage___childProductsJson___featuredImage___childrenImageSharp'
  | 'featuredImage___childProductsJson___featuredImage___childrenMarkdownRemark'
  | 'featuredImage___childProductsJson___featuredImage___childrenProductsJson'
  | 'featuredImage___childProductsJson___featuredImage___id'
  | 'featuredImage___childProductsJson___featuredImage___children'
  | 'featuredImage___childProductsJson___laboratoire'
  | 'featuredImage___childProductsJson___jsonId'
  | 'featuredImage___childProductsJson___fields___link'
  | 'featuredImage___id'
  | 'featuredImage___parent___id'
  | 'featuredImage___parent___parent___id'
  | 'featuredImage___parent___parent___children'
  | 'featuredImage___parent___children'
  | 'featuredImage___parent___children___id'
  | 'featuredImage___parent___children___children'
  | 'featuredImage___parent___internal___content'
  | 'featuredImage___parent___internal___contentDigest'
  | 'featuredImage___parent___internal___description'
  | 'featuredImage___parent___internal___fieldOwners'
  | 'featuredImage___parent___internal___ignoreType'
  | 'featuredImage___parent___internal___mediaType'
  | 'featuredImage___parent___internal___owner'
  | 'featuredImage___parent___internal___type'
  | 'featuredImage___children'
  | 'featuredImage___children___id'
  | 'featuredImage___children___parent___id'
  | 'featuredImage___children___parent___children'
  | 'featuredImage___children___children'
  | 'featuredImage___children___children___id'
  | 'featuredImage___children___children___children'
  | 'featuredImage___children___internal___content'
  | 'featuredImage___children___internal___contentDigest'
  | 'featuredImage___children___internal___description'
  | 'featuredImage___children___internal___fieldOwners'
  | 'featuredImage___children___internal___ignoreType'
  | 'featuredImage___children___internal___mediaType'
  | 'featuredImage___children___internal___owner'
  | 'featuredImage___children___internal___type'
  | 'featuredImage___internal___content'
  | 'featuredImage___internal___contentDigest'
  | 'featuredImage___internal___description'
  | 'featuredImage___internal___fieldOwners'
  | 'featuredImage___internal___ignoreType'
  | 'featuredImage___internal___mediaType'
  | 'featuredImage___internal___owner'
  | 'featuredImage___internal___type'
  | 'laboratoire'
  | 'jsonId'
  | 'fields___link';

export type ProductsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProductsJsonEdge>;
  nodes: Array<ProductsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ProductsJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ProductsJsonGroupConnectionDistinctArgs = {
  field: ProductsJsonFieldsEnum;
};


export type ProductsJsonGroupConnectionMaxArgs = {
  field: ProductsJsonFieldsEnum;
};


export type ProductsJsonGroupConnectionMinArgs = {
  field: ProductsJsonFieldsEnum;
};


export type ProductsJsonGroupConnectionSumArgs = {
  field: ProductsJsonFieldsEnum;
};


export type ProductsJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ProductsJsonFieldsEnum;
};

export type ProductsJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ProductsJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteMetadataQuery = { site?: { siteMetadata?: { title?: string | null, description?: string | null } | null } | null };

export type CategoryIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryIndexQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null, allMarkdownRemark: { group: Array<{ fieldValue?: string | null, totalCount: number }> } };

export type CategoriesSingleQueryVariables = Exact<{
  categoriesName?: InputMaybe<Scalars['String']>;
}>;


export type CategoriesSingleQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null, allMarkdownRemark: { totalCount: number, edges: Array<{ node: { id: string, fields?: { link?: string | null } | null, frontmatter?: { categories?: Array<string | null> | null, tags?: Array<string | null> | null, title?: string | null, featuredImage?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } }> } };

export type LaboratoiresIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type LaboratoiresIndexQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null, allProductsJson: { group: Array<{ fieldValue?: string | null, totalCount: number }> } };

export type LaboratoiresSingleQueryVariables = Exact<{
  laboratoiresName?: InputMaybe<Scalars['String']>;
}>;


export type LaboratoiresSingleQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null, allProductsJson: { totalCount: number, nodes: Array<{ id: string, title?: string | null, featuredImage?: { childImageSharp?: { gatsbyImageData: any } | null } | null, fields?: { link?: string | null } | null }> } };

export type PostsIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsIndexQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null, allMarkdownRemark: { edges: Array<{ node: { id: string, fields?: { link?: string | null } | null, frontmatter?: { categories?: Array<string | null> | null, date?: any | null, tags?: Array<string | null> | null, title?: string | null, featuredImage?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } }> } };

export type PostsSingleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostsSingleQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null, markdownRemark?: { id: string, html?: string | null, frontmatter?: { categories?: Array<string | null> | null, date?: any | null, title?: string | null, tags?: Array<string | null> | null, featuredImage?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null };

export type ProductsIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsIndexQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null, allProductsJson: { nodes: Array<{ id: string, laboratoire?: string | null, title?: string | null, featuredImage?: { childImageSharp?: { gatsbyImageData: any } | null } | null, fields?: { link?: string | null } | null }> } };

export type ProductsSingleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductsSingleQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null, productsJson?: { id: string, laboratoire?: string | null, title?: string | null, attributes?: { action?: Array<string | null> | null, avantages?: Array<string | null> | null, composition?: Array<string | null> | null, conseils?: Array<string | null> | null, indication?: Array<string | null> | null, utilisation?: Array<string | null> | null } | null, featuredImage?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null };

export type TagsIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsIndexQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null, allMarkdownRemark: { group: Array<{ fieldValue?: string | null, totalCount: number }> } };

export type TagsSingleQueryVariables = Exact<{
  tagsName?: InputMaybe<Scalars['String']>;
}>;


export type TagsSingleQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null, allMarkdownRemark: { totalCount: number, edges: Array<{ node: { id: string, fields?: { link?: string | null } | null, frontmatter?: { categories?: Array<string | null> | null, tags?: Array<string | null> | null, title?: string | null, featuredImage?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } }> } };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
