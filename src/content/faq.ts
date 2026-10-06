export const faq = [
  {
    q: "What is MCP?",
    a: "The Model Context Protocol is an open standard that lets AI agents call tools in other software in a controlled way. An MCP server is the bridge: it defines exactly which actions an agent may perform on a system.",
  },
  {
    q: "Which systems do you support?",
    a: "Anything a person can operate. Where there is an API or database access we use it; where there is not, we use terminal or UI automation. We tell you in the review which route is safest for your system.",
  },
  {
    q: "What if our system has no API?",
    a: "That is the typical case. The bridge wraps the screens or terminal sessions in well-defined tools such as create_order, so the agent never touches the UI directly.",
  },
  {
    q: "What does it cost to run?",
    a: "There is a monthly support fee and the usual AI model usage, which for structured tasks like these is small compared to the labour saved. The calculator above lets you test your own assumptions.",
  },
  {
    q: "What if automation doesn't pay off?",
    a: "Then we say so in the process review, before you spend on a build. Not every workflow is worth automating.",
  },
  {
    q: "Who owns the code?",
    a: "You do. The bridge runs in your infrastructure and uses an open standard, so you are not locked in to us or to one AI vendor.",
  },
];
