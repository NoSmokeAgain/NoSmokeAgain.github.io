'use strict';
const SOURCES={cec:'https://db.cec.gov.tw/Visual',p2000:'https://vote.nccu.edu.tw/cec/A2000005.PDF',p2008:'https://web.cec.gov.tw/api/file/58f46594-605f-4c70-924a-71a9e4ca9c53.pdf',p2020:'https://web.cec.gov.tw/central/article/30476',p2024:'https://web.cec.gov.tw/central/article/41422',l2024:'https://web.cec.gov.tw/api/file/f797c63e-5043-4c13-9ae8-faf248fd889b.pdf',m2022:'https://www.cna.com.tw/news/aipl/202212020201.aspx',race2026:'https://www.cna.com.tw/news/aipl/202609045002.aspx',results2022:'https://news.pts.org.tw/projects/2022-election-vote/',results2024:'https://news.pts.org.tw/projects/2024-election-vote/'};
// Array order corresponds to the three 4×4 portrait atlases. Party is historical, never inferred current affiliation.
const RAW=[
['陳水扁','民進黨',2004,'總統',6471970,1,'cec'],
['呂秀蓮','民進黨',1997,'桃園縣長',375500,1],
['連戰','國民黨',2004,'總統',6442452,0,'cec'],
['宋楚瑜','無黨籍',2000,'總統',4664972,0,'p2000'],
['馬英九','國民黨',2008,'總統',7659014,1,'p2008'],
['謝長廷','民進黨',2008,'總統',5444949,0,'p2008'],
['蘇貞昌','民進黨',2001,'台北縣長',874495,1],
['蔡英文','民進黨',2020,'總統',8170231,1,'p2020'],
['朱立倫','國民黨',2016,'總統',3813365,0,'cec'],
['賴清德','民進黨',2024,'總統',5586019,1,'p2024'],
['韓國瑜','國民黨',2020,'總統',5522119,0,'p2020'],
['柯文哲','民眾黨',2024,'總統',3690466,0,'p2024'],
['侯友宜','國民黨',2022,'新北市長',1152555,1,'m2022'],
['蕭美琴','民進黨',2016,'花蓮立委',63231,1],
['鄭文燦','民進黨',2018,'桃園市長',552330,1],
['林佳龍','民進黨',2014,'台中市長',847284,1],
['蔣萬安','國民黨',2022,'台北市長',575590,1,'m2022','台北'],
['張善政','國民黨',2022,'桃園市長',557572,1,'m2022','桃園'],
['盧秀燕','國民黨',2022,'台中市長',799107,1,'m2022'],
['黃偉哲','民進黨',2022,'台南市長',433684,1,'m2022'],
['陳其邁','民進黨',2022,'高雄市長',766147,1,'m2022'],
['黃珊珊','無黨籍',2022,'台北市長',342141,0,'results2022'],
['高虹安','民眾黨',2022,'新竹市長',98121,1,'results2022'],
['王世堅','民進黨',2024,'台北立委',111605,1,'l2024'],
['吳思瑤','民進黨',2024,'台北立委',91958,1,'l2024'],
['王鴻薇','國民黨',2024,'台北立委',105050,1,'l2024'],
['羅智強','國民黨',2024,'台北立委',87973,1,'l2024'],
['徐巧芯','國民黨',2024,'台北立委',89727,1,'l2024'],
['洪孟楷','國民黨',2024,'新北立委',158596,1,'l2024'],
['林淑芬','民進黨',2024,'新北立委',118544,1,'l2024'],
['苗博雅','社民黨',2024,'台北立委',74375,0,'results2024'],
['王婉諭','時代力量',2024,'新竹縣立委',63566,0,'results2024'],
['黃國昌','時代力量',2016,'新北立委',80508,1,'https://web.cec.gov.tw/api/file/f9fd06ab-d2cf-4b00-b801-293e357ef54a.pdf'],
['陳時中','民進黨',2022,'台北市長',434558,0,'results2022'],
['鄭運鵬','民進黨',2022,'桃園市長',428983,0,'results2022'],
['蔡其昌','民進黨',2022,'台中市長',524224,0],
['謝龍介','國民黨',2022,'台南市長',387731,0,'results2022','台南'],
['柯志恩','國民黨',2022,'高雄市長',529607,0,'https://web.cec.gov.tw/api/file/943a264c-d910-4cee-9152-286d38394a7a.pdf','高雄'],
['蘇巧慧','民進黨',2020,'新北立委',106368,1,null,'新北'],
['沈伯洋','民進黨',2026,'台北市長候選人',null,0,'race2026','台北'],
['李四川','國民黨',2026,'新北市長候選人',null,0,'race2026','新北'],
['黃世杰','民進黨',2020,'桃園立委',111963,1,null,'桃園'],
['江啟臣','國民黨',2020,'台中立委',94750,1,null,'台中'],
['何欣純','民進黨',2020,'台中立委',149538,1,'https://www.ftvnews.com.tw/news/detail/2020111W0143','台中'],
['陳亭妃','民進黨',2016,'台南立委',149002,1,null,'台南'],
['賴瑞隆','民進黨',2020,'高雄立委',135052,1,null,'高雄'],
['黃捷','民進黨',2024,'高雄立委',113670,1,'l2024'],
['陳柏惟','台灣基進',2020,'台中立委',112839,1,'https://www.cna.com.tw/news/firstnews/202110230190.aspx']
];
const PARTY_COLORS={'民進黨':'#25805a','國民黨':'#426da3','民眾黨':'#189391','時代力量':'#a38722','社民黨':'#c0648a','台灣基進':'#b36444','無黨籍':'#7f8475','親民黨':'#cd7b26'};
const PEOPLE=RAW.map((r,id)=>{const [name,party,year,election,votes,won,source,race]=r;const type=votes===null?'new':election==='總統'?'president':election.includes('立委')?'legislator':'mayor';const R={president:8500000,mayor:1200000,legislator:160000};const T={president:100,mayor:80,legislator:60};const exactScore=type==='new'?55:60*Math.min(1,Math.sqrt(votes/R[type]))+.3*T[type]+(won?10:0);const score=Math.round(exactScore*10)/10;const price=type==='new'?85:Math.round((4+16*(exactScore/100)**2)*10);return{id,name,party,year,election,votes,won:!!won,type,score,price,exactScore,reference:R[type]||null,tier:T[type]||null,voteIndex:type==='new'?null:100*Math.min(1,Math.sqrt(votes/R[type])),source:SOURCES[source]||source||'https://votetw.com/data/candidate/'+encodeURIComponent(name),race:race||null,atlas:Math.floor(id/16),cell:id%16,color:PARTY_COLORS[party]||'#708577',trait:{president:'領航型',mayor:'城市型',legislator:'議政型',new:'新秀型'}[type]};});
// 外援卡：非選舉人物，無選票、無位置加成，統一戰力 70（身價依同一條公式 → 11.8 點）。
// 頭像在 assets/atlas-3.webp，依 GUESTS 順序排在 0–9 格。
const GUESTS=[
['郭臺銘','鴻海創辦人'],['黃仁勳','輝達創辦人'],['張忠謀','台積電創辦人'],['林書豪','職籃球員'],['王建民','前大聯盟投手'],
['李遠哲','諾貝爾化學獎得主'],['周杰倫','歌手'],['蔡依林','歌手'],['蔡阿嘎','YouTuber'],['李安','電影導演']
];
const GUEST_SCORE=70;
GUESTS.forEach(([name,title],gi)=>{const id=PEOPLE.length;PEOPLE.push({id,name,party:'外援',year:null,election:title,votes:null,won:false,type:'guest',score:GUEST_SCORE,exactScore:GUEST_SCORE,price:Math.round((4+16*(GUEST_SCORE/100)**2)*10),reference:null,tier:null,voteIndex:null,source:null,race:null,atlas:3,cell:gi,color:'#c9952b',trait:'外援'});});
PARTY_COLORS['外援']='#c9952b';
const ROLES=['總統','副總統','行政院長','立法院長','國防部長','外交部長','經濟部長','財政部長','內政部長','法務部長','教育部長','衛福部長','交通部長','勞動部長','台北市長','新北市長','桃園市長','台中市長','台南市長','高雄市長'].map((name,i)=>({id:i,name,group:i<2?'國家領導':i<4?'兩院院長':i<14?'中央部會':'六都首長',fit:i===3?'legislator':i<4?'president':i<14?'legislator':'mayor'}));
const BUDGET=2200;
function fitBonus(p,role){if(!p)return 0;if(p.type==='new')return 4;if(p.type===role.fit)return 6;if(p.type==='mayor'&&role.fit==='president')return 3;return 0;}
function rolePower(p,role){return p?Math.round((p.score+fitBonus(p,role))*10)/10:0;}

const PARTY_ASSETS={
'民進黨':{icon:'https://upload.wikimedia.org/wikipedia/commons/b/bd/Green_Taiwan_with_White_Cross_%28cropped%29.svg',full:'民主進步黨',source:'https://commons.wikimedia.org/wiki/File:Green_Taiwan_with_White_Cross_(cropped).svg',credit:'Lmmnhn · CC BY-SA 4.0 · 原圖，僅縮放'},
'國民黨':{icon:'https://upload.wikimedia.org/wikipedia/commons/a/a1/Emblem_of_the_Kuomintang.svg',full:'中國國民黨',source:'https://commons.wikimedia.org/wiki/File:Emblem_of_the_Kuomintang.svg',credit:'Zscout370 / Laurent1979 · Public domain'},
'民眾黨':{icon:"https://upload.wikimedia.org/wikipedia/commons/3/3c/Emblem_of_Taiwan_People%27s_Party_2019_Logo_Only.svg",full:'台灣民眾黨',source:"https://commons.wikimedia.org/wiki/File:Emblem_of_Taiwan_People's_Party_2019_Logo_Only.svg",credit:'Jrthsr700tmax / Bangardi · Public domain'},
'時代力量':{icon:'https://upload.wikimedia.org/wikipedia/commons/f/f4/New_Power_Party_candidate_icon.svg',full:'時代力量',source:'https://commons.wikimedia.org/wiki/File:New_Power_Party_candidate_icon.svg',credit:'Qqkuro66541 · CC BY-SA 4.0 · 歷史候選人識別，原圖僅縮放'},
'社民黨':{icon:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Social_Democratic_Party_Taiwan_Logo.svg',full:'社會民主黨',source:'https://commons.wikimedia.org/wiki/File:Social_Democratic_Party_Taiwan_Logo.svg',credit:'Source: sdp.org.tw · Public domain'},
'台灣基進':{icon:'https://upload.wikimedia.org/wikipedia/commons/0/0b/Taiwan_Statebuilding_Party_Logo.png',full:'台灣基進',source:'https://commons.wikimedia.org/wiki/File:Taiwan_Statebuilding_Party_Logo.png',credit:'中華民國立法院 · Public domain'},
'無黨籍':{icon:null,full:'無黨籍',source:null,credit:'無黨籍不使用政黨黨徽'}
};
