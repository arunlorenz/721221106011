const express = require('express');
const axios = require('axios'); 
const app = express();

let nums = []; 
async function getInput(type) {
    const url = `http://20.244.56.144/nums/${type}`; 
    const result = await axios.get(url); 
    return result.data.nums; 
}

async function solve(req, res) {
    const type = req.params.type;
  
    const temp = await getInput(type);
    nums = temp;
  
    var sum = 0;
    for(let i = 0;i<nums.length;i++){
        sum += nums[i];
    }
    const average = sum/nums.length;
    
      res.json({
      nums: temp,
      previous: nums.slice(0, 10 - nums.length),
      current: nums,
      avg: average,
    });
  }
  
app.get('/nums/:type', solve);

app.listen(9876, () => {
  console.log(`Average Calculator is running`);
});