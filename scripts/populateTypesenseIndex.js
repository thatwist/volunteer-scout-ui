/* eslint-disable */
require("dotenv").config();

// Start Typesense server with `npm run typesenseServer`
// Then run `npm run populateTypesenseIndex` or `node populateTypesenseIndex.js`

const Typesense = require('typesense');

module.exports = (async () => {
  const typesense = new Typesense.Client({

    apiKey: process.env.TYPESENSE_ADMIN_API_KEY,
    nodes: [
      {
        host: process.env.REACT_APP_TYPESENSE_HOST,
        port: process.env.REACT_APP_TYPESENSE_PORT,
        protocol: process.env.REACT_APP_TYPESENSE_PROTOCOL,
      },
    ],
  });

  const schema = {
    name: 'posts',
    fields: [
      { name: 'title', type: 'string', locale: 'ru' },
      { name: 'date', type: 'string' },
      { name: 'date_bucket', type: 'string', facet: true },
      { name: 'ts', type: 'float' },
      { name: 'category', type: 'string', facet: true, locale: 'ru' },
      { name: 'channel', type: 'string', facet: true },
      { name: 'platform', type: 'string', facet: true },
      { name: 'post_id', type: 'int32' },
      { name: 'views', type: 'int32', "optional": true },
      { name: 'description', type: 'string', locale: 'ru' },
      { name: 'message', type: 'string', locale: 'ru' }

      // Only fields that need to be searched / filtered by need to be specified in the collection's schema
      // The documents you index can still contain other additional fields.
      //  These fields not mentioned in the schema, will be returned as is as part of the search results.
      // { name: 'image_url', type: 'string' },
    ],
    default_sorting_field: 'ts',
  };

  console.log('Populating index in Typesense');

  try {
    await typesense.collections('posts').delete();
    console.log('Deleting existing collection: posts');
  } catch (error) {
    // Do nothing
  }

  console.log('Creating schema: ');
  console.log(JSON.stringify(schema, null, 2));
  await typesense.collections().create(schema);

  console.log('Adding records: ');
  const posts = require('../data/posts.json');
  try {
    const returnData = await typesense
      .collections('posts')
      .documents()
      .import(posts);
    console.log(returnData);
    console.log('Done indexing.');

    const failedItems = returnData.filter(item => item.success === false);
    if (failedItems.length > 0) {
      throw new Error(
        `Error indexing items ${JSON.stringify(failedItems, null, 2)}`
      );
    }

    return returnData;
  } catch (error) {
    console.log(error);
    error.importResults.forEach(res => console.log(res))
  }
})();
