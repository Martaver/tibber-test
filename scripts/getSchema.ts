import {writeFile} from 'fs';
import {introspectionQuery} from 'graphql';
import qgl from 'graphql-tag';
import {promisify} from 'util';

import apolloConfig from '../apollo.config';
import {getClient} from '../graphql/getClient';

const _writeFile = promisify(writeFile);

const getSchema = async () => {
  const client = await getClient();

  const result = await client.query({
    query: qgl`${introspectionQuery}`,
  });

  await _writeFile(
    apolloConfig.client.service.localSchemaFile,
    JSON.stringify(result.data, null, 2)
  );

  console.log('Done!');
};

getSchema();
