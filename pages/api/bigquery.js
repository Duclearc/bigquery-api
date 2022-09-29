'use strict'

const { client_email, dataset_id, private_key, project_id, table_id } = process.env

if(!( client_email && dataset_id && private_key && project_id && table_id )) {
    throw new Error('Environment Data missing')
}

// [START bigquery_client_json_credentials]
// Creates a BigQuery client explicitly using service account credentials by specifying the private key file.
const { BigQuery } = require('@google-cloud/bigquery')

const options = {
    projectId: project_id,
    credentials: {
        client_email,
        private_key
    }
}

const bigquery = new BigQuery(options)
// [END bigquery_client_json_credentials]

async function loadDataToBigQuery(dataset_id, table_id, payload) {

    // Loads data from a local file into the table
    await bigquery
        .dataset(dataset_id)
        .table(table_id)
        .insert(payload, function (err, response) {
            console.log("error:" + JSON.stringify(err));
            console.log("response:" + JSON.stringify(response));
        })
}

function processRequest({ body }) {

    loadDataToBigQuery(dataset_id, table_id, body)

    return JSON.stringify({ version: 'Lemundo GmbH', message: 'data added', data: body })

}

// NEXT.JS
export default function handler(req, res) {
    res.status(200).json(processRequest(req))
}