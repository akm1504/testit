/* global buttonsav, char */
var be=0;
const https = require('https');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const PaytmChecksum = require('Paytm_Node_Checksum');
const cee = "spreadid@predictandearnn.iam.gserviceaccount.com";
const pk="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQChObKvCpDTn5b6\nKS3pZUiyJZHsu38vLM7rk2Cb7D6PRcviprqSiLpcOhWkd0C2uNcJTGNOFpANAnHz\nXXUP/3O6y55tIiWNrqbDJ67p/rG7X9kneLm9+F5V9/z4RFrPryCr/+re2UeQkBnV\n380mqcpev0llAN6smErIcDcj6FL3hpTLJx7rCzeEgVNC/fFpgRZ4OJOJ7rTEQwbE\ntFHvwAzsd1IxgXhyKrk5lqmeSlTj7dm3TiA5yH6Q+0NKPIPAOSa2VrhFkGBYgRVm\nFiHC/Emgf3ZPamOJzqYGBc0BsVvHTG1oq6GXWblSduThfkfVhhMid1Jbegso+i3w\np4adeoEBAgMBAAECggEAM3CjUDIAz2SF2T82RNdqAFz4WB3ikHytcIBPPLB9rVzJ\nloE32fUB8NcffKAH58TF51OWA54zS9NR5CIXbYlFtX2uCIfyj2gAERgiOMpojq4g\nLPXZ3YDXKHq9HcFBcC4iMH6ww3Vz3e38MD79x644wU4q7qz+XvcgNR+ImE5R2mN2\nFFENcUtFlxUm8Oju7Xd1RyQPvCbCKNC7v4EsQZtBH1ID2n+TZFEiSyRt9unIBMPk\nDsUuifhf3SSv2EJkI/xDBaXYy7zjwoBtwTZZW930H82mXnYEigns4ivYqSUQzDjk\ng1bWghh0C300zdmI1KbBY3Oq8JvTzaV8NNSfWyI+OQKBgQDcruK9n2AuNebIkiEU\ntX96KGPS9TSlMi8TzZvTQLTHdace4epJzQRg8aYSwGHVw/di/WGeyIM3CADcLVu4\nw9EwDkzldwQej2REHA/HRfhtwJdjwpPmrX8cdUJRsiR73YFn8COnnEKPV4mGlLRP\nx5HN1e+E2ZpNjgja0vnjwyx7JwKBgQC7BubMRSuspelJwOcM3Kwx1wBTkTHd0gxz\nEo69ewR61hkz9zpbh3EkS0kXnydp9lzBeT3OqCgkrE32Bn6/Gw65feM0KvYj3wyz\n4tDFdu0vX99gu3RJfQ4NAStdeYwEsyTy9Ocnrz7zq9KNfu6RKZqUEUlC0NsoIBTI\nNB8mhDFblwKBgAmYyV95qNMZoPmj8TBXXD3Rt9WauDle31E7JcWgELyDz0q2hFvF\nQKV+nLxABYEoTn/NiQtAqQQhovfwOQbl7Rjr5kgsTs+NaMzVc5I05sLPF0ZNVeU4\nMkjoiIPI/XEths0gUkydrP9SzTY/DUBS63JKFWpvlBg/Tv9FIXzYJf0NAoGAbjn+\nEov91o4d9SLkybbRIbqmbZoYOrTOM4/PYqs7E65VQkRGN6WWsB5S4MIjN5dESZ7M\nJ50Bs8N9Wy+uybEHt5kTLC7ZzIBr+yUFiCu0VIR7oYY5Xgp/GnkC9t9o/2gZsbtW\n9ROa1YAB4vTZY+KSQQwDEocHcxmdRfU6Grg0YtcCgYB5uX47XhNKhLB9UIdhfRav\naVsB3F9Q3VM5HDLUE1AuOEzgPYftfJLgsnYkZHp23hxu0b5Ov79Rgh5GdjmD2vpU\nq+ofRAwd3I4TcdBBSWcf5FowWhXwcUzGEKPtOiXk1D9Xbq9mRRzcZBuZzLHJsXgU\nK5ZXV4pXkqLSPPHuv6Ec5w==\n-----END PRIVATE KEY-----\n";
const shid='1Wt6_tGezKxw0jcJ2iLBqJ3l1fA6AM0C7Qi0mHnQhevs';
const telegraf = require('telegraf');
const Keyboard = require('telegraf-keyboard');
const data = require('./data');
const options = {
        inline: false, // default
        duplicates: false, // default
        newline: false // default
    };
    const keyboard = new Keyboard(options);
     const doc = new GoogleSpreadsheet(shid);
doc.useServiceAccountAuth({client_email: cee,private_key: pk});
var fs = require('fs');
const Stage = require('telegraf/stage');
const session = require('telegraf/session');
const Scene = require('telegraf/scenes/base');
const {leave} = Stage;
const stage = new Stage();
const bot = new telegraf('783456561:AAFCDC779hTVdhazpfVSV-O5-ROfrv2VR44');
const getName = new Scene('getName');
stage.register(getName);
const getNumber = new Scene('getNumber');
stage.register(getNumber);
const check = new Scene('check');
stage.register(check);
const getBUT = new Scene('getBUT');
stage.register(getBUT);
const getaddit = new Scene('getaddit');
stage.register(getaddit);
const getadditt = new Scene('getadditt');
stage.register(getadditt);
const getadditpb = new Scene('getadditpb');
stage.register(getadditpb);
const getaddittpb = new Scene('getaddittpb');
stage.register(getaddittpb);
const getadditb = new Scene('getadditb');
stage.register(getadditb);
const getaddittb = new Scene('getaddittb');
stage.register(getaddittb);
const getps = new Scene('getps');
stage.register(getps);
const getpss = new Scene('getpss');
stage.register(getpss);
const getdel = new Scene('getdel');
stage.register(getdel);
bot.telegram.deleteWebhook();

async function sheetDel(a){
            const doc = new GoogleSpreadsheet(shid);
doc.useServiceAccountAuth({client_email: cee,private_key: pk});
await doc.loadInfo();
const sheet = doc.sheetsByIndex[1];
const rows = await sheet.getRows();
for(var i=0;i<sheet.rowCount-1;i++)
{
    if( rows[i].ID ==a)
    {
        console.log(i);
        console.log(rows[i].ID)
await rows[i].delete();
await sheet.resize({ rowCount:sheet.rowCount-1 , columnCount:3 });

    }
} 

}


 async function STARTADD(a){
     var FLAG=0;
            const doc = new GoogleSpreadsheet(shid);
doc.useServiceAccountAuth({client_email: cee,private_key: pk});
await doc.loadInfo();
const sheet = doc.sheetsByIndex[0];
const rows = await sheet.getRows();
console.log(sheet.rowCount);
for(var i=0;i<sheet.rowCount-1;i++)
{
      console.log(rows[i].ID);
    if( rows[i].ID ==a)
    {
   FLAG = i;
   break;
    }
    else FLAG = -1;
} 
if(FLAG == -1){
    await sheet.addRow({ ID: a , P: '0', A:'0',T10:'0',T30:'0',T50:'0',TT10:'-',TT30:'-',TT50:'-'});
      console.log("done babae");}

}

async function linkADD(a,id,i){
            const doc = new GoogleSpreadsheet(shid);
doc.useServiceAccountAuth({client_email: cee,private_key: pk});
await doc.loadInfo();
const sheet = doc.sheetsByIndex[0];
const rows = await sheet.getRows();
console.log(sheet.rowCount);
var amd;
      console.log(id);
    if( rows[i].ID == id)
    {
        console.log(rows[i].B);
        console.log(parseFloat(a));
        amd = parseFloat(rows[i].B) + parseFloat(a);
     rows[i].B = amd.toString();
             await rows[i].save();
     console.log(rows[i].B)
}}


       async function ADDBUT(a,b){
            const doc = new GoogleSpreadsheet(shid);
doc.useServiceAccountAuth({client_email: cee,private_key: pk});
await doc.loadInfo();
const sheet = doc.sheetsByIndex[1];
const rows = await sheet.getRows();
console.log(sheet.rowCount);
    await sheet.addRow({ B1: a , B2: b });
      console.log("done babae");

}

bot.use(session());
bot.use(stage.middleware());

function getuseridd(user) {
    return user.id;
}

function getNames(user) {
    return user.first_name;
}

function gettext(user) {
    return user.text;
}

function getext(user) {
    return user.text;
}

bot.on('photo', (ctx) => {
    console.log(ctx.message);
});

bot.hears(/paytm/, async (ctx) => {

  var obj,F,FL,G;
  FL=0;
    var paytmParams = {};
    var id = ctx.message.text;
    var ret = id.replace('/paytm ','');
    console.log(ret);

paytmParams["MID"]     = "ETWjKE63708073966690";
paytmParams["ORDERID"] = ret;


await doc.loadInfo();
const sheets = doc.sheetsByIndex[0];
const sheet = doc.sheetsByIndex[2];
const rows = await sheet.getRows();

var l=sheet.rowCount;
console.log(l);
    console.log(rows[0].LINK);

for(i=0;i<l-1;i++){
    var li =  rows[i].LINK;
    if(li == ret)
    {
        FL = -1;
        
    }
            else if(ret == '/paytm'){FL=-5;ctx.reply('Send the id in the format \n\n/paytm txn_id',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});}
    }    console.log(FL);

    
    if(FL == -1){
                  ctx.reply('Already processed',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}}); 
        
    }
    
    else if(FL == -5){ctx.reply('TRY AGAIN',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});}
     else{
    PaytmChecksum.generateSignature(paytmParams, "g0JnPDoRiBhy_wF#").then(async function(checksum){
    paytmParams["CHECKSUMHASH"] = checksum;
    var post_data = JSON.stringify(paytmParams);
    var options = {
       hostname: 'securegw.paytm.in',
        port: 443,
        path: '/order/status',
        method: 'POST',
        headers: {'Content-Type': 'application/json',
            'Content-Length': post_data.length}};
    var response = "";
    var post_req = https.request(options,async function(post_res) {post_res.on('data',async function (chunk) {response += chunk;});
    post_res.on('end',async function(){
            obj = JSON.parse(response);
            console.log('Response: ', response);
            if(obj.STATUS == "TXN_FAILURE"){ctx.reply('ORDER ID INCORRECT',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});}
            else{
                await sheet.addRow({ LINK : ret });
          F = obj.TXNAMOUNT;
          G = obj.RESPMSG;
          for(var i=0;i<sheets.rowCount-1;i++)
{linkADD(F,getuseridd(ctx.message.from),i);}
  ctx.reply(''+G,
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}}); }
    });});
    post_req.write(post_data);
    post_req.end();
           
                            });}});
        
            

bot.hears(['Admin','!admin','/admin'], async (ctx) => {
   for (let key of data.admins) {
if(ctx.message.from.id === key) {  
    ctx.reply('Hiiii Admin',
            {reply_markup: {keyboard: [['Add Button','Delete Button'], ['Add Balance'],['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
            }}});

bot.hears('Balance', async(ctx) => {
   const doc = new GoogleSpreadsheet(shid);
doc.useServiceAccountAuth({client_email: cee,private_key: pk});
await doc.loadInfo();
const sheet = doc.sheetsByIndex[0];
const rows = await sheet.getRows();
for(i=0;i<sheet.rowCount-1;i++)
    {      
               if (getuseridd(ctx.message.from) == rows[i].ID) {
ctx.reply('Predict Balance = ' + rows[i].P + '\n(10-'+ rows[i].T10+'; 30-'+ rows[i].T30+'; 50-'+rows[i].T50+')\nWITHDRAW Balance = ' + rows[i].A+'\nRecharge Balance = '+ rows[i].B ,
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
            break
        }
    }
});

bot.start((ctx) => {
      STARTADD(getuseridd(ctx.message.from));
    ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
});

bot.hears("◀️ BACK", (ctx) => {
    ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['Balance','About']], resize_keyboard: true, one_time_keyboard: true}});
});

bot.hears(["/del","Delete Button"], async (ctx) => {
await doc.loadInfo();
const sheet = doc.sheetsByIndex[1];
const rows = await sheet.getRows();
for(i=0;i<sheet.rowCount-1;i++)
{
        z = rows[i].B1 + ` VS ` + rows[i].B2;
        console.log(z);
keyboard.add(z);}
    keyboard.add('◀️ BACK');
            await ctx.reply('Select from keyboard to delete', keyboard.draw());    ctx.scene.enter('getdel');
});

getdel.on('text', async (ctx) => {
    await doc.loadInfo();
console.log('trees')

const sheet = doc.sheetsByIndex[1];
console.log('tree')
const rows = await sheet.getRows();
console.log('tres')
for(i=0;i<sheet.rowCount-1;i++)
{
        z = rows[i].B1 + ` VS ` + rows[i].B2;
    if(ctx.message.text == z){rows[i].delete();
    await sheet.resize({ rowCount: sheet.rowCount-1, columnCount: 2 });
        }

}            ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.leave('main');
    });

bot.hears(["💵Bet Price💸", '◀ BACK(💵Bet Price💸)'],async (ctx) => {
await doc.loadInfo();
const sheet = doc.sheetsByIndex[1];
const rows = await sheet.getRows();
for(i=0;i<sheet.rowCount-1;i++)
{
        z = rows[i].B1 + ` VS ` + rows[i].B2;
        console.log(z);
keyboard.add(z);}
    keyboard.add('◀️ BACK');
    ctx.reply('\u20B910 -- 10% SHARE\r\n\r\n\u20B930 -- 30% share\r\n\r\n\u20B950 -- 50% share\r\n\r\nThe winners will get a share of 10 %, 30 % or 50 % respectively..according to the money  deposited by your opponents.\r\n\r\nEg: opponents deposited \u20B92k.You will get\r\n\u20B9200 for \u20B910\r\n\u20B9600 for \u20B930\r\n\u20B91000 for \u20B950 Deposited.\r\nEqually distributed among the winners\r\n\r\nSelect from keyboard', keyboard.draw());
   var fid= "AgACAgUAAxkBAAIZNF6a140UYY-UK3CRmBlnYEd0-ROtAALiqTEbFjHYVHwDhff5FYgqGq8lMwAEAQADAgADeQADewMGAAEYBA";
            console.log(getuseridd(ctx.message.from));
            bot.telegram.sendPhoto(getuseridd(ctx.message.from),fid);
    //ctx.scene.enter('getBUT');
    ctx.scene.enter('getps');
});

getBUT.hears('◀️ BACK', async (ctx) => {
    ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.leave('main');
});

getBUT.on('text', async (ctx) => {
    var z;
    var FLAG = -1;
    const fs = require('fs');
    let butt = JSON.parse(fs.readFileSync('Butsave.json'));
    const n = (butt.Buttons.length);
    for (var i = 1; i < n; i++) {
        z = butt.Buttons[i].name1 + ` VS ` + butt.Buttons[i].name2;
        if (ctx.message.text === z) {
            FLAG = i;
            ctx.reply(`Pay amount and Send Payment Details`,
                    {reply_markup: {keyboard: [['Send Payment Details'], ['◀ BACK(💵Bet Price💸)'], ['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
        }
    }
    if (FLAG === -1)
        ctx.scene.enter('getBUT');
    else
        ctx.scene.leave('main');
});

bot.hears(['/add_pbal', 'Add Predict Balance'], (ctx) => {
ctx.reply('Enter Amount',
                {reply_markup: {keyboard: [['Rs10','Rs30','Rs50'],['Clear'],['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});            ctx.scene.enter('getadditpb');
       ctx.scene.enter('getaddittpb');         
});        
    
   

getadditpb.hears('◀️ BACK', (ctx) => {
    ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.leave('main');
});

getadditpb.on('text', (ctx) => {
    ctx.session.adidd = ctx.message.text;
    ctx.reply('Enter Amount',
                {reply_markup: {keyboard: [['Rs10','Rs30','Rs50'],['Clear'],['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
                ctx.session.bech=-1;
    ctx.scene.leave('main');
});


getaddittpb.hears('◀️ BACK', (ctx) => {
    ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.leave('main');
});


getaddittpb.on('text', async (ctx) => {
    ch=0;
    var Q,r,v;
    await doc.loadInfo();
const sheet = doc.sheetsByIndex[0];
const rows = await sheet.getRows();
await doc.loadInfo();
const sheets = doc.sheetsByIndex[1];
const row = await sheets.getRows();
                v=parseInt(rows[i].B,10);

for(var i=0;i<sheets.rowCount-1;i++)
{
     if( ctx.session.setteam == row[i].B1 + ` VS ` + row[i].B2) r=row[i].I;
        }
console.log(sheet.rowCount);
for(var i=0;i<sheet.rowCount-1;i++)
{
      console.log(rows[i].ID);

    if( rows[i].ID == getuseridd(ctx.session.from))
    {
           if(ctx.session.amt == 'Rs10'){   
                Q=parseInt(rows[i].P,10);
                        Q=Q+10;
             if(v>=10){   if(rows[i].TT10 =='-'){ 
                     rows[i].P = Q;
             rows[i].T10=parseInt(rows[i].T10, 10)+1;         
            rows[i].TT10=ctx.message.text+'('+r+')';
             }
            else {
                   rows[i].P = Q;
        rows[i].T10=parseInt(rows[i].T10, 10)+1;         
        rows[i].TT10=rows[i].TT10 +','+ctx.message.text+'('+r+')';
        console.log(rows[i].TT10);
        await rows[i].save();
        console.log(rows[i].TT10);}}
        else {
            ctx.reply('Please recharge',
                {reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});}}

        else if(ctx.session.amt == 'Rs30'){     
                        Q=parseInt(rows[i].P,10);
                        Q=Q+30;
             if(v>=30){     
                if(rows[i].TT30 =='-'){   
                          rows[i].P = Q;
                        rows[i].T30=parseInt(rows[i].T30, 10)+1;      
                rows[i].TT30=ctx.message.text+'('+r+')';}
            else {rows[i].TT30=rows[i].TT30 +','+ctx.message.text+'('+r+')';
                 console.log(rows[i].TT30);
                 await rows[i].save();}}
       else {ctx.reply('Please recharge',
                {reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});}}
    else if(ctx.session.amt == 'Rs50'){
                        Q=parseInt(rows[i].P,10);
                        Q=Q+50;
                          if(v>=50){ 
                        rows[i].P = Q;
                        rows[i].T50=parseInt(rows[i].T50, 10)+1;
                if(rows[i].TT50 =='-'){             
                rows[i].TT50=ctx.message.text+'('+r+')';}
            else rows[i].TT50=rows[i].TT50 +','+ctx.message.text+'('+r+')';
                             console.log(rows[i].TT50);
                             await rows[i].save();}
        else {ctx.reply('Please recharge',
                {reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});}}}                
    
 else
    {
        ctx.reply('Select from keyboard',
                {reply_markup: {keyboard: [['Rs10','Rs30','Rs50'],['Clear'],['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
        ctx.scene.leave('main');
    }}

});

bot.hears(['/add_bal', 'Add Balance'], (ctx) => {
    var FLAG;
    for (let key of data.admins) {
        if (getuseridd(ctx.message.from) === key) {
            ctx.reply('Enter ID');
            ctx.scene.enter('getadditb');
            FLAG = 0;
            break;
        } else
            FLAG = -1;
    }
    if (FLAG === -1)
    {
        ctx.reply('Not a Admin',
                {reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
        ctx.scene.leave('main');
    }
});

getadditb.on('text', (ctx) => {
    ctx.session.adid = ctx.message.text;
    ctx.reply('enter Withdraw Amount');
    ctx.scene.enter('getaddittb');
});

getadditb.on('◀️ BACK', (ctx) => {
    ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.leave('main');
});

getaddittb.on('text', async(ctx) => {
    ch=0;
           await doc.loadInfo();
const sheet = doc.sheetsByIndex[0];
const rows = await sheet.getRows();
console.log(sheet.rowCount);
for(var i=0;i<sheet.rowCount-1;i++)
{
      console.log(rows[i].ID);

    if( rows[i].ID ==ctx.session.adid)
    {
        
            ch=-1;
        rows[i].P = ctx.message.text;
        await rows[i].save();        
    }}
    if (ch === 0)
    {
        ctx.reply('Enter Correct ID',
                {reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
        ctx.scene.enter('getadditpb');
    } else
    {
        ctx.reply('Done Admin',
                {reply_markup: {keyboard: [['Add Balance'], ['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
        ctx.scene.leave('main');
    }

});

bot.hears(['/add', 'Add Button'], (ctx) => {
    var FLAG;
    for (let key of data.admins) {
        if (getuseridd(ctx.message.from) === key) {
    ctx.reply('enter button 1',{reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
            ctx.scene.enter('getaddit');
            FLAG = 0;
            break;
        } else
            FLAG = -1;
    }
    if (FLAG === -1)
    {
        ctx.reply('Not a Admin',
                {reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
        ctx.scene.leave('main');
    }
});

getaddit.hears('◀️ BACK', (ctx) => {
    ctx.reply('CANCELLED',{reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
        ctx.scene.leave('main');
});

getadditt.hears('◀️ BACK', (ctx) => {
    ctx.reply('CANCELLED',{reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
        ctx.scene.leave('main');
});

getaddit.on('text', (ctx) => {
    ctx.session.adname = ctx.message.text;
    ctx.reply('enter button 2',{reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.enter('getadditt');
});

getadditt.on('text', (ctx) => {
ADDBUT(ctx.session.adname,ctx.message.text);
        ctx.reply('Done Admin',
            {reply_markup: {keyboard: [['Add Button'], ['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.leave('main');

});

bot.hears("About", (ctx) => {
    ctx.reply('This is a bot ', {reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
});

bot.hears("Predict and earn", (ctx) => {
    ctx.reply('Play and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['💵Bet Price💸', 'Send Payment Details'], ['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
});

bot.command('payment_details', async (ctx) => {
    ctx.reply("Enter first name, last name and middle name ",
            {reply_markup: {remove_keyboard: true}});
    await ctx.scene.leave('getName');
    ctx.scene.enter('getName');
});

bot.hears("Clear", (ctx) => {
    if( ctx.session.adchec=0){
    ctx.reply('Are you sure to clear', {reply_markup: {keyboard: [['Clear','◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.enter('getaddittpb');
}
else {    
        ctx.reply('ENTER ID', {reply_markup: {keyboard: [['Clear','◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.enter('getaddittpb');
}

});

bot.hears(['Send Payment Details','Rs10','Rs30','Rs50'], async (ctx) => {
    ctx.session.amt = ctx.message.text;
    var z;
await doc.loadInfo();
const sheet = doc.sheetsByIndex[1];
const rows = await sheet.getRows();
for(i=0;i<sheet.rowCount-1;i++)
{
        z = rows[i].B1 + ` VS ` + rows[i].B2;
keyboard.add(z);}
    keyboard.add('◀️ BACK');
    ctx.reply('CHOOSE THE GAME TO BET', keyboard.draw());
    ctx.scene.enter('getps');
});

getps.hears('◀️ BACK', async (ctx) => {
        var z;
await doc.loadInfo();
const sheet = doc.sheetsByIndex[1];
const rows = await sheet.getRows();
for(i=0;i<sheet.rowCount-1;i++)
{
        z = rows[i].B1 + ` VS ` + rows[i].B2;
keyboard.add(z);}
    keyboard.add('◀️ BACK');
    ctx.reply('CHOOSE THE GAME TO BET', keyboard.draw());
    ctx.scene.enter('getps');    
});

getps.on('text', async (ctx) => {
    var z;
    var FLAG = -1;
await doc.loadInfo();
const sheet = doc.sheetsByIndex[1];
const rows = await sheet.getRows();
for(i=0;i<sheet.rowCount-1;i++)
{
        z = rows[i].B1 + ` VS ` + rows[i].B2;
        if (ctx.message.text === z) {
            ctx.session.setteam = z;
        FLAG = 0;
ctx.reply('Select the team to bet on win',
            {reply_markup: {keyboard: [[rows[i].B1], [rows[i].B2],['◀️ BACK']], resize_keyboard: true, one_time_keyboard: true}});
    }}
    if (FLAG === -1)
        ctx.scene.enter('getps');
    else { if(ctx.session.bech==-1){ctx.scene.enter('getaddittpb')}
        
        else ctx.scene.enter('getpss');}


});

getpss.on('text', async (ctx) => {
ctx.session.team = ctx.message.text;
    ctx.reply("Enter first name, last name and middle name ",
            {reply_markup: {remove_keyboard: true}});
    await ctx.scene.leave('getpss');
   
   ctx.scene.enter('getName');
});

getName.hears('/start', async (ctx) => {
    ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.leave('main');
});

getName.on('text', async (ctx) => {
    if (ctx.message.text === '◀️  Back') {
        return ctx.reply('You are already back at the very beginning. Please enter your name');
    }
    ctx.session.name = ctx.message.text;
    ctx.reply("Click the' Send Contact 'button below to share the number.",
            {reply_markup: {keyboard: [[{text: '📱 Send contact', request_contact: true}], ['◀️  Back', '❌ Erase everything']], resize_keyboard: true, one_time_keyboard: true}});
    await ctx.scene.leave('getName');
    ctx.scene.enter('getNumber');
});

getNumber.hears('◀️  Back', async (ctx) => {
    ctx.reply('Enter first name, last name and middle name' + `\nname: ${ctx.session.name}` +
            {reply_markup: {keyboard: [['◀️  Back', '❌ Erase everything']], resize_keyboard: true, one_time_keyboard: true}});
    await ctx.scene.leave('getNumber');
    ctx.scene.enter('getName');
});

getNumber.hears('◀️ Back', async (ctx) => {
    ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.leave('main');
});

getNumber.hears('/start', async (ctx) => {
    ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.leave('main');
});

getNumber.hears(['❌ Erase everything', '/start'], async (ctx) => {
    ctx.reply("Let's start again.Enter first name, last name and middle name", {reply_markup: {remove_keyboard: true}});
    await ctx.scene.leave('getNumber');
    ctx.scene.enter('getName');
    ctx.session = null;
});

getNumber.on('contact', async (ctx) => {
    ctx.session.phone = ctx.message.contact.phone_number;
    ctx.reply('Share the payment Details as photo\n' + `\nName : ${ctx.session.name} \n` + `\n Number: ${ctx.session.phone}`,
            {reply_markup: {keyboard: [['◀️ Back']], resize_keyboard: true, one_time_keyboard: true}});
    await ctx.scene.leave('getNumber');
    ctx.scene.enter('getNumber');
});

getNumber.on('photo', async (ctx) => {
    ctx.session.phot = ctx.message.photo[0].file_id;
    console.log(ctx.message.photo[0].file_id);
    ctx.reply('❗️ Check all the data and click "✅ DONE" if they are correct:\n' + `\nName ${ctx.session.name} \n` +
            `\n Number: ${ctx.session.phone};\n\nGAME: ${ctx.session.setteam}\n\nTeam: ${ctx.session.team}`, {reply_markup: {keyboard: [['️✅ DONE'], ['❌ Erase everything']], resize_keyboard: true, one_time_keyboard: true}, parse_mode: 'markdown'});
    await ctx.scene.leave('getNumber');
    ctx.scene.enter('check');
});

check.hears('️✅ DONE', (ctx) => {
    ctx.reply('✅ Thank you',
            {reply_markup: {keyboard: [['◀️ BACK']], resize_keyboard: true}});
    ctx.scene.leave('main');
    for (let key of data.admins) {
        bot.telegram.sendPhoto(key, ctx.session.phot, {
            caption: `New Entry! \n\n NAME: ${ctx.session.name} \n\nLINK: t.me/${ctx.chat.username}\n` + `\nPhone: ${ctx.session.phone}\n\nGAME: ${ctx.session.setteam}\n\nTeam: ${ctx.session.team}\n\nID:<code>${ctx.message.from.id}</code>`}, {parse_mode: 'html'});
    
}
    ctx.session = null;
});

check.hears('/start', async (ctx) => {
    ctx.reply('Hello🤗 ' + getNames(ctx.message.from) + '!!\n\nPlay and win💵.....Bet little earn high\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPL Comming soon\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tStay tuned and Loot',
            {reply_markup: {keyboard: [['Predict and earn'], ['About', 'Balance']], resize_keyboard: true, one_time_keyboard: true}});
    ctx.scene.leave('main');
});

check.hears('◀️ Back', async (ctx) => {
    ctx.reply(`Click the "Send Contact" button below to share the number. \n\nNAME: ${ctx.session.name}`,
            {reply_markup: {keyboard: [[{text: '📱 Send contact', request_contact: true}], ['◀️  Back', '❌ Erase everything']], resize_keyboard: true, one_time_keyboard: true}});
    await ctx.scene.leave('check');
    ctx.scene.enter('getNumber');
});

check.hears(['❌ Erase everything', '/start'], async (ctx) => {
    ctx.reply('Name', {reply_markup: {remove_keyboard: true}});
    await ctx.scene.leave('getNumber');
    ctx.scene.enter('getName');
    ctx.session = null;
});


bot.launch();
