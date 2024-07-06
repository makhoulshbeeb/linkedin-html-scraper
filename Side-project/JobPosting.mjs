//Although it's missing some try catch phrases it could be useful to avoid potential CSRF check fails.

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
import * as cheerio from 'cheerio';

async function JobData(jobID){
    var url = `https://www.linkedin.com/jobs/view/${jobID}`;
    var res = await axios.get(url,{
        headers: {
            Cookie:'JSESSIONID=ajax:2711472108347807678; lang=v=2&lang=en-us; bcookie="v=2&90c31730-05c4-43c0-8a8b-d25a47589eff"; bscookie="v=1&202407050948080ccc55ea-5724-4e15-8f2d-136177637fb6AQHUVAXVZIRPYSNBtTI_whqUqKHIKUJl"; _gcl_au=1.1.1317281315.1720172892; lidc="b=VGST03:s=V:r=V:a=V:p=V:g=3247:u=1:x=1:i=1720172892:t=1720259292:v=2:sig=AQHhtRZS4R2cbyR_feDHTbaRZKQwknJv"; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19910%7CMCMID%7C54109288882820670884546633751466216722%7CMCAAMLH-1720777693%7C6%7CMCAAMB-1720777693%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1720180093s%7CNONE%7CvVersion%7C5.1.1; aam_uuid=54652106246005236114600370336310034137; _uetsid=b183c0303ab311efb46ea328c240870d; _uetvid=b183e4a03ab311efa706eb39b29a5861'
        }}).then((response)=>{
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