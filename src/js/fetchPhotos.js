var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'YOUR_API_KEY' }).base('appO3IZ9yx6DgGTDA');

base('Images').select({
    // Selecting the first 3 records in Main View:
    maxRecords: 3,
    view: "Main View"
}).eachPage(function page(records, fetchNextPage) {

    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved ', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(error) {
    if (error) {
        console.log(error);
    }
});
