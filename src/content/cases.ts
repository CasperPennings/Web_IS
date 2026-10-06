// Fictional example scenarios. Replace with real case studies when available.
export interface CaseStudy {
  placeholder: boolean;
  client: string;
  task: string;
  before: string;
  result: string;
}

export const cases: CaseStudy[] = [
  {
    placeholder: true,
    client: "Secondary school, ~1,200 pupils",
    task: "Processing new enrolments",
    before: "The office typed every online enrolment form over into the student administration.",
    result: "Forms go in automatically; staff only check them",
  },
  {
    placeholder: true,
    client: "Wholesaler, ~80 employees",
    task: "Entering supplier invoices",
    before: "Two people spent most of their week typing invoices into the accounting program.",
    result: "About 5 minutes → seconds per invoice",
  },
  {
    placeholder: true,
    client: "Care organisation, ~250 employees",
    task: "Weekly staffing report",
    before: "Every Monday, a manager copied figures from three programs into one spreadsheet.",
    result: "The report is ready before the week starts",
  },
];
