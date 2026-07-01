import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

type PageMetaOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

function ensureMeta(name: string, attr = "name") {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  return tag;
}

function ensureLink(rel: string) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  return tag;
}

export function usePageMeta({ title, description, path = "/", image = DEFAULT_OG_IMAGE, noIndex = false }: PageMetaOptions) {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();

    document.title = title;
    ensureMeta("description").content = description;
    ensureMeta("robots").content = noIndex ? "noindex,nofollow" : "index,follow";

    ensureMeta("og:site_name", "property").content = SITE_NAME;
    ensureMeta("og:title", "property").content = title;
    ensureMeta("og:description", "property").content = description;
    ensureMeta("og:type", "property").content = "website";
    ensureMeta("og:url", "property").content = canonicalUrl;
    ensureMeta("og:image", "property").content = image;

    ensureMeta("twitter:card").content = "summary_large_image";
    ensureMeta("twitter:title").content = title;
    ensureMeta("twitter:description").content = description;
    ensureMeta("twitter:image").content = image;

    ensureLink("canonical").href = canonicalUrl;
  }, [description, image, noIndex, path, title]);
}
