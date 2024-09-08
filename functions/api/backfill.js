export async function onRequest(context) {
  const results = await fetchTicketsFromJira();
  console.log(`found ${results.length} issues`);
  return results;
}

async function fetchTicketsFromJira() {
  const firstBatch = await fetchBatch(0);

  const allTickets = [];
  for (let i = 0; i < firstBatch.total; i += 100) {
    const result = fetchBatch(i);
    const mappedIssues = mapBatchToTickets(result);
    allTickets.push(...mappedIssues);
  }

  return allTickets;
}

async function fetchBatch(startIndex) {
  var result = await fetch(
    "https://openbanking.atlassian.net/rest/api/search",
    buildFetchParams(startIndex)
  );
  return await result.json();
}

function mapBatchToTickets(issues) {
  return issues.map(mapIssueToTicket);
}

function mapIssueToTicket(issue) {
  const mappedIssue = {
    key: issue.key,
    summary: issue.fields.summary,
    status: issue.fields.status.name,
    resolution: issue.fields.resolution.name,
    description: issue.fields.description.content[0].content[0].text,
    provider: issue.fields.customfield_11865,
    providerGroup: mapProviderToProviderGroup(issue.fields.customefield_11865),
    issueType: issue.fields.issuetype,
    start: issue.fields.customfield_11869,
    end: issue.fields.customfield_11870,
    created: issue.fields.created,
    updated: issue.fields.updated,
    affectedApis: issue.fields.description.customfield_11872.value,
  };
  console.log(mappedIssue);
  return mappedIssue;
}

function mapProviderToProviderGroup() {
  return "";
}

async function buildFetchParams(startIndex = 0) {
  const body = {
    jql: "project=OBIE ORDER BY Rank ASC",
    startAt: startIndex,
    maxResults: 100,
    fields: [
      "key",
      "issuetype",
      "summary",
      "status",
      "resolution",
      "description",
      "customfield_11872",
      "customfield_11865",
      "created",
      "updated",
      "customfield_11870",
      "customfield_11869",
    ],
  };

  return { mehod: "POST", body: body };
}
