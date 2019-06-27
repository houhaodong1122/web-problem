const schedule = require('node-schedule');
const process = require('child_process');
const path = require('path');
const { fileDisplay } = require('./run');

const filePath = path.resolve('../');

function run() {
  fileDisplay(filePath);

  process.exec('cd .. && git add . && git commit -m "README自动生成" && git push',function (error, stdout, stderr) {
    console.log('ok');
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

const  scheduleCronstyle = ()=>{
  //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('10 * * * * *',()=>{
      run();
    }); 
}

scheduleCronstyle();