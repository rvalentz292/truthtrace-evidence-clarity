export type WebsiteLegalBlock =
  | {
      id: string;
      type: "paragraph";
      text: string;
    }
  | {
      id: string;
      type: "list";
      items: readonly string[];
    }
  | {
      href: string;
      id: string;
      label: string;
      type: "url";
    };

export type WebsiteLegalDocument = {
  effectiveDate: string;
  introduction: readonly string[];
  sections: readonly {
    blocks: readonly WebsiteLegalBlock[];
    id: string;
    title: string;
  }[];
  title: string;
};
