import axios from 'axios';
import * as cheerio from 'cheerio';

async function JobIDs(search, nb_results){
    const keywords = search.replace(" ","%20");
    const url = `https://www.linkedin.com/jobs/search/?${keywords}`;
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

console.log(await JobIDs("Math Teacher",10));