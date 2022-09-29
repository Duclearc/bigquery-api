const credentials = require('../../config/ecomm-data-and-analytics-a7a255fb1e58.json')
const { datasetId, tableId } = require('../../config/config.json')

'use strict'

// [START bigquery_client_json_credentials]
// Creates a BigQuery client explicitly using service account credentials by specifying the private key file.
const { BigQuery } = require('@google-cloud/bigquery')

const options = {
    keyFilename: './config/ecomm-data-and-analytics-a7a255fb1e58.json',
    projectId: credentials.project_id
}

const bigquery = new BigQuery(options)
// [END bigquery_client_json_credentials]

async function loadDataToBigQuery(datasetId, tableId, data) {

    // Loads data from a local file into the table
    await bigquery
        .dataset(datasetId)
        .table(tableId)
        .insert(data, function (err, response) {
            console.log("error:" + JSON.stringify(err));
            console.log("response:" + JSON.stringify(response));
        })
}

function processRequest({ body }) {
    // console.log(method, {'data': target}, '\n')

    loadDataToBigQuery(datasetId, tableId, body)

    return JSON.stringify({ version: 'Lemundo GmbH', message: 'data added', data: body })
    // TODO: investigate if instead of a file we can upload the object directly

}

// NEXT.JS
export default function handler(req, res) {
    res.status(200).json(processRequest(req))
}