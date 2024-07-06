import { promises as fs } from 'fs';
import { type } from 'os';

// Function to check if a job with the given JobId exists
export default async function CheckId(jobId) {
  let existingJobIds = [];

  try {
    const existingData = await fs.readFile('./JSON/jobIds.json', 'utf8');

    // Check if the Id file is empty
    if (existingData.trim() === '') {
      console.log('./JSON/jobList.json is empty');
      return false;
    }

    // Parse JSON data
    existingJobIds = JSON.parse(existingData);

    // Check if any job in the list matches the given JobId
    const jobExists = existingJobIds.some(element => element.jobId === jobId);
    return jobExists;

  } catch (error) {
    // Handle file not found or JSON parsing errors
    if (error.code === 'ENOENT') {
      console.log('./JSON/jobList.json file does not exist. Returning false.');
      return false;
    } else if (error.name === 'SyntaxError') {
      console.error('Error parsing JSON from jobLIds.json:', error.message);
      return false;
    } else {
      console.error('Error reading or parsing ./JSON/jobList.json:', error);
      return false;
    }
  }
}

