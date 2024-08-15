async function consume(stream) {
  const reader = stream.getReader();
  while (!(await reader.read()).done) {}
}
export async function onRequest(context) {
  const response = await fetch(
    "https://openbanking.atlassian.net/wiki/plugins/viewsource/viewpagesrc.action?pageId=441614754"
  );

  const values = [];
  const rewriter = new HTMLRewriter().on("table tbody td", {
    text({ text }) {
      values.push(text);
    },
  });

  await consume(rewriter.transform(response).body);

  const downtimesByObieTicketRef = {};
  let currentKey = "";
  values.forEach((item) => {
    if (item.startsWith("OBIE-")) {
      currentKey = item;
      downtimesByObieTicketRef[currentKey] = [];
    } else {
      downtimesByObieTicketRef[currentKey].push(item);
    }
  });

  const cleaned = {};
  for (const [key, value] of Object.entries(downtimesByObieTicketRef)) {
    stupidHackForThisTicketNumber(key, value, cleaned);
    cleaned[key] = value.filter((x) => x);
  }

  return Response.json(cleaned);
}

// Spent like 3 hours trying to figure out why this only happens with this ticketId...
// But basically, instead of parsing an array with an item ["OBIE-12492", ...] I get
// ["OBIE-1", "2492", ...]
// It's probably (definitely) to do with streaming chunks at a time, but I'm too stupid
// to figure it out this late at night 🤷‍♀️
function stupidHackForThisTicketNumber(key, value, cleaned) {
  if (key === "OBIE-1" && value[0] === "2492") {
    cleaned["OBIE-12492"] = value.slice(1);
  }
}
