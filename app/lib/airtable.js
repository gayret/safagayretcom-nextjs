import Airtable from "airtable";

const fetchAirtableTable = async (tableName) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE
  );

  const records = await base(tableName).select({ view: "Grid view" }).all();

  const groupedRecords = records.reduce((accum, current) => {
    const { date, text, link } = current.fields;

    if (!accum[date]) {
      accum[date] = { date, link, texts: [] };
    }

    accum[date].texts.push(text);

    return accum;
  }, {});

  return Object.values(groupedRecords).reverse();
};

export { fetchAirtableTable };
