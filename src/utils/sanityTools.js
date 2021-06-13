import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanityClient";
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
export const SANITY_PROJECT_ID = "1himrk4u";
