import saveJobList from './JobFinder.js'; // Use ./ for current directory
import { delay } from './JobFinder.js';

let batch_size=8; //cutomize the batch size
let batch_start = 0
const search = "Developer";//Customize the search
async function getJobs(){while(batch_start<2000){
    await saveJobList(search,batch_start)
    batch_start+=batch_size;
    console.log("waiting for the next batch ...");
    await delay(Math.random()*3000+2000); //Randomized Time Intervals to avoid detection

}}

getJobs()

