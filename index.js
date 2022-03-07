const raw_data = [["United Arab Emirates","AED",14.75,3.67315],
      ["Argentina","ARS",380,96.33375],
      ["Australia","AUD",6.55,1.366586949],
      ["Austria","EUR",3.92,0.850159405],
      ["Azerbaijan","AZN",3.95,1.699],
      ["Belgium","EUR",4.45,0.850159405],
      ["Bahrain","BHD",1.5,0.377],
      ["Brazil","BRL",22.9,5.24865],
      ["Canada","CAD",6.77,1.2741],
      ["Switzerland","CHF",6.5,0.92275],
      ["Chile","CLP",2990,759.285],
      ["China","CNY",22.4,6.4797],
      ["Colombia","COP",12950,3842.11],
      ["Costa Rica","CRC",2370,617.74],
      ["Czech Republic","CZK",89,21.80065],
      ["Germany","EUR",4.45,0.850159405],
      ["Denmark","DKK",30,6.3239],
      ["Egypt","EGP",42.5,15.67],
      ["Spain","EUR",4.4,0.850159405],
      ["Estonia","EUR",3.2,0.850159405],
      ["Euro area","EUR",4.29,0.850159405],
      ["Finland","EUR",4.89,0.850159405],
      ["France","EUR",4.3,0.850159405],
      ["Britain","GBP",3.49,0.734672887],
      ["Greece","EUR",3.3,0.850159405],
      ["Guatemala","GTQ",26,7.7448],
      ["Hong Kong","HKD",21,7.7729],
      ["Honduras","HNL",87,23.744],
      ["Croatia","HRK",24,6.39805],
      ["Hungary","HUF",908,305.64505],
      ["Indonesia","IDR",34000,14517.5],
      ["India","INR",190,74.615],
      ["Ireland","EUR",4.5,0.850159405],
      ["Israel","ILS",17,3.29205],
      ["Italy","EUR",4.3,0.850159405],
      ["Jordan","JOD",2.13,0.709],
      ["Japan","JPY",390,109.935],
      ["South Korea","KRW",4600,1150.35],
      ["Kuwait","KWD",1.25,0.3008],
      ["Lebanon","LBP",37000,22000],
      ["Sri Lanka","LKR",700,199.5],
      ["Lithuania","EUR",2.9,0.850159405],
      ["Latvia","EUR",2.85,0.850159405],
      ["Moldova","MDL",52,17.98],
      ["Mexico","MXN",64,20.13525],
      ["Malaysia","MYR",9.99,4.2245],
      ["Nicaragua","NIO",128,35.2063],
      ["Netherlands","EUR",4.22,0.850159405],
      ["Norway","NOK",57,9.0444],
      ["New Zealand","NZD",6.9,1.448750453],
      ["Oman","OMR",1.15,0.38505],
      ["Pakistan","PKR",580,161.1],
      ["Peru","PEN",12.9,3.9511],
      ["Philippines","PHP",142,50.35],
      ["Poland","PLN",13.43,3.90685],
      ["Portugal","EUR",3.45,0.850159405],
      ["Qatar","QAR",13,3.641],
      ["Romania","RON",10.6,4.1877],
      ["Russia","RUB",135,74.53],
      ["Saudi Arabia","SAR",14,3.7507],
      ["Singapore","SGD",5.9,1.36825],
      ["Slovakia","EUR",3.7,0.850159405],
      ["Slovenia","EUR",2.6,0.850159405],
      ["Sweden","SEK",54,8.7165],
      ["Thailand","THB",128,32.81],
      ["Turkey","TRY",19.99,8.55725],
      ["Taiwan","TWD",72,28.0475],
      ["Ukraine","UAH",65,27.22],
      ["Uruguay","UYU",225,44],
      ["United States","USD",5.65,1],
      ["Vietnam","VND",69000,23028.5],
      ["Venezuela","VES",16020000,3613989.071],
      ["South Africa","ZAR",33.5,14.6625]
]
const real_data = []
raw_data.forEach(element => {
    // console.log(re)
    real_data.push([element[0],element[2]/element[3],element[2]])
});
function getRealData(){
    return real_data
}
const raw_data_p = []
function extraData(){
    console.log(raw_data_p)
    raw_data.forEach(element=>{
        raw_data_p.push([element[1],element[2],element[3]])
    })
    return raw_data_p
}