import type { WebsiteLegalDocument } from "@/content/website-legal";

export const WEBSITE_TERMS = {
  title: "TruthTrace Website Terms of Use",
  effectiveDate: "July 15, 2026",
  introduction: [
    "These Terms of Use apply to the public website at https://truthtrace.ai.",
    "By using this website, you agree to these Terms.",
  ],
  sections: [
    {
      id: "informational-website",
      title: "1. Informational Website",
      blocks: [
        {
          id: "purpose",
          type: "paragraph",
          text: "The TruthTrace website currently provides general information about TruthTrace and its product direction.",
        },
        {
          id: "not-offered-intro",
          type: "paragraph",
          text: "The website does not currently offer:",
        },
        {
          id: "not-offered",
          type: "list",
          items: [
            "User accounts",
            "Evidence uploads",
            "Case intake",
            "Personalized case analysis",
            "Payment or subscription services",
            "Legal representation",
            "Court filing services",
          ],
        },
        {
          id: "illustrative-features",
          type: "paragraph",
          text: "Some screens, workflows, records, and outputs shown on the website are illustrative and may represent planned or developing features.",
        },
      ],
    },
    {
      id: "no-advice",
      title: "2. No Legal or Professional Advice",
      blocks: [
        {
          id: "professional-advice",
          type: "paragraph",
          text: "Nothing on this website is legal, medical, mental-health, clinical, or other professional advice.",
        },
        {
          id: "no-determinations",
          type: "paragraph",
          text: "TruthTrace does not make custody recommendations, credibility determinations, diagnoses, legal findings, or guarantees about whether evidence will be accepted by a court.",
        },
        {
          id: "consult-professional",
          type: "paragraph",
          text: "You should consult a qualified attorney or other licensed professional about your specific situation.",
        },
        {
          id: "no-relationship",
          type: "paragraph",
          text: "Using this website does not create an attorney-client, therapist-client, evaluator-client, or other professional relationship.",
        },
      ],
    },
    {
      id: "do-not-submit",
      title: "3. Do Not Submit Case Information",
      blocks: [
        {
          id: "do-not-send-intro",
          type: "paragraph",
          text: "Do not send or attempt to upload:",
        },
        {
          id: "prohibited-information",
          type: "list",
          items: [
            "Evidence or court documents",
            "Messages, recordings, screenshots, or photographs",
            "Medical, therapy, or school records",
            "Information about a child",
            "Confidential or privileged information",
            "Personal, financial, or identifying information",
          ],
        },
        {
          id: "not-secure-transfer",
          type: "paragraph",
          text: "The public website is not a secure evidence-transfer or case-intake system.",
        },
        {
          id: "verified-contact-method",
          type: "paragraph",
          text: "Use only a verified contact method published on the current TruthTrace Contact page.",
        },
      ],
    },
    {
      id: "acceptable-use",
      title: "4. Acceptable Use",
      blocks: [
        {
          id: "lawful-use",
          type: "paragraph",
          text: "You may use the website for lawful informational purposes.",
        },
        {
          id: "may-not-intro",
          type: "paragraph",
          text: "You may not:",
        },
        {
          id: "prohibited-use",
          type: "list",
          items: [
            "Attempt to access nonpublic systems",
            "Disrupt or interfere with the website",
            "Introduce harmful code",
            "Misrepresent your affiliation with TruthTrace",
            "Use TruthTrace branding without permission",
            "Present illustrative website content as evidence from a real case",
            "Represent planned features as currently available services",
          ],
        },
      ],
    },
    {
      id: "illustrative-content",
      title: "5. Illustrative Content",
      blocks: [
        {
          id: "sample-materials",
          type: "paragraph",
          text: "The website may include sample interfaces, records, workflows, or reports.",
        },
        {
          id: "materials-intro",
          type: "paragraph",
          text: "Unless clearly stated otherwise, these materials:",
        },
        {
          id: "materials-boundaries",
          type: "list",
          items: [
            "Are not from a real family matter",
            "Are not judicial or professional findings",
            "Do not prove that a feature is currently available",
            "Do not guarantee any result",
            "Should not be used or submitted as evidence",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property",
      blocks: [
        {
          id: "ownership",
          type: "paragraph",
          text: "The TruthTrace name, website, branding, graphics, designs, and original content are owned by or licensed to TruthTrace and are protected by applicable intellectual-property laws.",
        },
        {
          id: "permitted-use",
          type: "paragraph",
          text: "You may view the website for personal and informational use. You may not copy, sell, republish, or use TruthTrace materials in a misleading way without permission.",
        },
      ],
    },
    {
      id: "third-party-links",
      title: "7. Third-Party Links",
      blocks: [
        {
          id: "links-may-appear",
          type: "paragraph",
          text: "The website may link to third-party websites or resources.",
        },
        {
          id: "third-party-responsibility",
          type: "paragraph",
          text: "TruthTrace does not control and is not responsible for their content, availability, privacy practices, or security.",
        },
      ],
    },
    {
      id: "disclaimers",
      title: "8. Disclaimers",
      blocks: [
        {
          id: "as-is",
          type: "paragraph",
          text: "The website is provided on an “as is” and “as available” basis.",
        },
        {
          id: "no-guarantee",
          type: "paragraph",
          text: "TruthTrace does not guarantee that the website will always be available, error-free, complete, current, secure, or suitable for a particular purpose.",
        },
        {
          id: "do-not-rely",
          type: "paragraph",
          text: "Do not rely on the website as the sole basis for a legal, custody, clinical, financial, safety, or evidentiary decision.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "9. Limitation of Liability",
      blocks: [
        {
          id: "liability-limit",
          type: "paragraph",
          text: "To the maximum extent permitted by law, TruthTrace and its owners, personnel, contractors, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages related to use of or reliance on this website.",
        },
        {
          id: "non-limitable-liability",
          type: "paragraph",
          text: "Nothing in these Terms limits liability that cannot legally be limited.",
        },
      ],
    },
    {
      id: "privacy",
      title: "10. Privacy",
      blocks: [
        {
          id: "privacy-intro",
          type: "paragraph",
          text: "Use of this website is also subject to the TruthTrace Privacy Notice:",
        },
        {
          href: "https://truthtrace.ai/privacy",
          id: "privacy-url",
          label: "https://truthtrace.ai/privacy",
          type: "url",
        },
      ],
    },
    {
      id: "changes",
      title: "11. Changes",
      blocks: [
        {
          id: "updates",
          type: "paragraph",
          text: "TruthTrace may update these Terms when the website or its services change.",
        },
        {
          id: "effective-date",
          type: "paragraph",
          text: "The effective date above identifies the current version.",
        },
      ],
    },
    {
      id: "contact",
      title: "12. Contact",
      blocks: [
        {
          id: "contact-intro",
          type: "paragraph",
          text: "The current verified contact information, when available, will be published at:",
        },
        {
          href: "https://truthtrace.ai/contact",
          id: "contact-url",
          label: "https://truthtrace.ai/contact",
          type: "url",
        },
        {
          id: "archived-address-warning",
          type: "paragraph",
          text: "Do not send case details, evidence, confidential communications, or child-related information to an address found only in an older document, archived page, or third-party listing.",
        },
      ],
    },
  ],
} as const satisfies WebsiteLegalDocument;
