/*
    Job Title => div.job-details-jobs-unified-top-card__job-title > h1
    Company Name => div.job-details-jobs-unified-top-card__company-name > a
    Job Location , Job Post Date, Number of Applicants => div.job-details-jobs-unified-top-card__primary-description-container .innerText()
    Job Description => div.mt4 .innerText()
    Skills Needed => div.job-details-how-you-match__skills-item-subtitle > a
    Application Link => `https://www.linkedin.com/jobs/view/${jobID}`
*/
import * as JobSearch from "./JobSearch.mjs";
import axios from 'axios';
import cheerio from 'cheerio';

async function JobData(jobID){
    var url = `https://www.linkedin.com/jobs/view/${jobID}`;
    var res = await axios.get(url).then((response)=>{
        return response.data;
     })
     console.log(await res);
     var $ = await cheerio.load(res);
     var data = {
        title: $('div.job-details-jobs-unified-top-card__job-title > h1').text(),
        company: $('div.job-details-jobs-unified-top-card__company-name > a').text(),
        location: $('div.job-details-jobs-unified-top-card__primary-description-container').text(),
        description: $('div.mt4').text(),
        skills: $('div.job-details-how-you-match__skills-item-subtitle > a').text(),
        link:   url,
     };
     return data;
}

console.log(await JobData("3805103255"));