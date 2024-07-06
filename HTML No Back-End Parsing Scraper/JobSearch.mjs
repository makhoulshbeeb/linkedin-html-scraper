//This Code returns id numbers from job search page you could also just 
//iterate through the numbers if the plan is to push through all jobs


import axios from 'axios';
import cheerio from 'cheerio';

async function JobIDs(search, nb_results, page){
    const keywords = search.replace(" ","%20");
    const url = `https://lb.linkedin.com/jobs/search/?geoId=101834488&keywords=${keywords}&start=${(page-1)*25}`;
    var res = await axios.get(url).then((response)=>{
       return response.data;
    })
    var $ = await cheerio.load(res);
    var data = [];
    for (let i=1;i<=nb_results;i++){
      data.push(await $(`ul.scaffold-layout__list-container:nth-child(${i})`).attr('data-occludable-job-id'));
    }
    return data;
}

console.log(await JobIDs("Math Teacher",10,2));