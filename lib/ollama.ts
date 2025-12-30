function cleanMarkdown(text: string) {
  return text
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, "")
    // Remove inline code
    .replace(/`([^`]+)`/g, "$1")
    // Remove markdown headings
    .replace(/^#+\s?/gm, "")
    // Remove list symbols
    .replace(/^[-*+]\s+/gm, "")
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    // Remove images
    .replace(/!\[.*?\]\(.*?\)/g, "")
    // Normalize spacing
    .replace(/\n{2,}/g, "\n")
    .trim();
}

interface SummarizeOptions {
  titleLength?: "short" | "medium" | "long";
  includeActionItems?: boolean;
  includeTLDR?: boolean;
  tone?: "neutral" | "informative" | "friendly" | "formal";
}

export async function summarizeText(
  content: string,
  options: SummarizeOptions = {}
) {
  const cleanedContent = cleanMarkdown(content);

  const { titleLength = "medium", includeActionItems = false, includeTLDR = false, tone = "informative" } = options;

  // Construct dynamic instructions based on options
  const prompt = `
You are an AI summarization engine.

IMPORTANT RULES:
- IGNORE all original formatting, markdown, README structure, symbols, and code
- DO NOT copy headings or bullets from input
- ONLY understand the meaning of the text
- Produce a NEW clean summary in readable English
- Tone: ${tone}
- Title length preference: ${titleLength}

OUTPUT FORMAT (STRICT):
Title:
A concise title (according to length preference).

Short Overview:
1 paragraph summarizing the content clearly and accurately.

Key Points:
- Point 1
- Point 2
- Point 3

${
  includeActionItems
    ? `Action Items:
- Suggested next steps or recommendations based on the content`
    : ""
}

Conclusion:
1–2 sentence conclusion.

${includeTLDR ? "TL;DR:\n- One-line concise summary" : ""}

CONTENT TO SUMMARIZE:
${cleanedContent}
`;

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3.2:3b",
      stream: false,
      prompt,
    }),
  });

  const data = await response.json();
  return data.response;
}
