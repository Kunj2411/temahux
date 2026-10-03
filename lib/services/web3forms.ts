const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type Web3FormsContext = {
  subject: string;
  website: string;
  page: string;
  source: string;
};

export async function submitToWeb3Forms(
  form: HTMLFormElement,
  context: Web3FormsContext,
) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("Form delivery is not configured.");
  }

  const formData = new FormData(form);
  if (formData.get("botcheck")) return;

  const fields: Record<string, string> = {};
  formData.forEach((value, name) => {
    if (name !== "botcheck" && typeof value === "string") {
      fields[name] = value.trim();
    }
  });

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: context.subject,
      from_name: context.website,
      Website: context.website,
      Page: context.page,
      Source: context.source,
      ...fields,
    }),
  });

  const result: unknown = await response.json();
  if (
    !response.ok ||
    typeof result !== "object" ||
    result === null ||
    !("success" in result) ||
    result.success !== true
  ) {
    throw new Error("Web3Forms submission failed.");
  }
}
