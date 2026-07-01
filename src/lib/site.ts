export const SITE_NAME = "GVS Advogados Associados";

export const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://www.gvsadvocacia.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL.replace(/\/$/, "")}/og-image.jpg`;

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
