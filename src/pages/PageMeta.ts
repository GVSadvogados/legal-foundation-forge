import { useEffect } from "react";

type PageMetaOptions = {
  title: string;
  description: string;
};

export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      return tag;
    };

    ensureMeta("description").content = description;
  }, [description, title]);
}
