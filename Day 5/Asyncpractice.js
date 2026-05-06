//----1.-------------------------------------------------------------------------------------------------------------------------------------------

// async function getDogFacts() {
//     return await new Promise(async (resolve, reject) => {
//         try {
//             const res = await fetch("https://dogapi.dog/api/v2/facts");
//             const data = await res.json();

//             const list = data?.data || [];
//             const facts = list.map(d => d?.attributes?.body);

//             resolve(facts);
//         } catch (error) {
//             reject(error);
//         }
//     });
// }

// getDogFacts()
//     .then(data => console.log(data))
//     .catch(err => console.error(err));


// //Output:
// // [     
// //   'Dogs are about as smart as a two- or three-year-old child. This means they can understand about 150-200 words, including signals and hand movements with the same meaning as words.'
// // ]  






//-----2.-----------------------------------------------------------------------------------------------------------------------------------


// async function getCatFacts() {
//     const res = await fetch("https://meowfacts.herokuapp.com/?count=2");
//     return await res.json();
// }

// getCatFacts()
//     .then(data => console.log(data))
//     .catch(err => console.error(err));


// Output : 

// {
//   data: [
//      'The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat.',
//      'A cat can sprint at about thirty-one miles per hour.'
//   ]
// }


// -----3.-----------------------------------------------------------------------------------------------------------------------------------------------------------



// async function getRandomEmoji() {
//     const res = await fetch("https://emojihub.yurace.pro/api/random");
//     const data = await res.json();

//     return {
//         name: data?.name,
//         category: data?.category,
//         symbol: data?.htmlCode?.[0]
//     };
// }
// Output : 

// Emoji: paw prints
// Category: animals and nature
// Symbol: &#128062;


//----4.-----------------------------------------------------------------------------------------------------------------------------------------



// async function getEuroRates() {
//     const res = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json");
//     return await res.json();
// }

// getEuroRates()
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// Output :

//     xof: 652.742002,
//     xpf: 119.331742,
//     xrp: 0.83263078,
//     xtz: 3.17059072,
//     yer: 278.89146,
//     zar: 19.639274,
//     zec: 0.0027322315,
//     zil: 279.61296937,
//     zmk: 10520.09684,
//     zmw: 21.892311,
//     zwl: 376.334943



//---------5.------------------------------------------------------------------------------------------------------------------------------------



// async function getMinVariancePortfolio() {
//     const res = await fetch("https://api.portfoliooptimizer.io/v1/portfolios/optimization/minimum-variance", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             assets: 2,
//             assetsCovarianceMatrix: [
//                 [0.0025, 0.0005],
//                 [0.0005, 0.0100]
//             ]
//         })
//     });

//     return await res.json();
// }

// getMinVariancePortfolio()
//     .then(data => console.log(data))
//     .catch(err => console.error("Error:", err));


//   Output :

//   { assetsWeights: [ 0.8260869565217391, 0.17391304347826086 ]}

//---------6.----------------------------------------------------------------------------------------------------------------------------------------


// async function getBiryaniImage() {
//     const res = await fetch("https://foodish-api.com/api/images/biryani");

//     if (!res.ok) {
//         throw new Error(`HTTP error: ${res.status}`);
//     }

//     const data = await res.json();
//     return data.image;
// }

// getBiryaniImage()
//     .then(image => console.log("Biryani Image:", image))
//     .catch(err => console.error("Error:", err));

// output : 

// Biryani Image: https://foodish-api.com/images/biryani/biryani64.jpg



//--------7.--------------------------------------------------------------------------------------------------------------------------------------------


// async function getDisneyCharacters() {
//     const res = await fetch("https://api.disneyapi.dev/character");
//     const result = await res.json();

//     return (result?.data || []).map(c => c?.name);
// }

// getDisneyCharacters()
//     .then(names => console.log(names))
//     .catch(err => console.error("Error:", err));

//   output :

//     'Captain Amelia',
//   'Amelia Duckworth',
//   'Captain Anderson',
//   'Erica Ange',
//   'Angela',
//   'Anthony Biddle',
//   'Apaches',
//   'Apothecary Gary',
//   'Aqua',
//   'Archibald Smelding',
//   'Mr. Arrow',
//   'Queen Athena'







//-------8.--------------------------------------------------------------------------------------------------------------------------------------


// async function getIndiaDetails() {
//     const res = await fetch("https://restcountries.com/v3.1/name/india");
//     const data = await res.json();

//     const country = data?.[0];

//     return {
//         name: country?.name?.common,
//         capital: country?.capital?.[0]
//     };
// }

// getIndiaDetails()
//     .then(result => console.log(result))
//     .catch(err => console.error("Error:", err));

//   output :

//   { name: 'India', capital: 'New Delhi' }



//----------9.----------------------------------------------------------------------------------------------------------------------------------------

// async function getRadioStations() {
//     const res = await fetch("https://de1.api.radio-browser.info/json/stations");
//     const data = await res.json();

//     return (data || [])
//         .slice(0, 5)
//         .map(s => s?.name);
// }

// getRadioStations()
//     .then(names => console.log(names))
//     .catch(err => console.error("Error:", err));


//   output : 

//     '\tArrow Classic Rock',
//   '\tBlasmusikradio mit Bernd',
//   '\tFun Radio',
//   '\tHard Rock Radio FM',
//   '\tKLVZ Legends 810AM/95.3 FM - Denver, CO'



//--------10.-----------------------------------------------------------------------------------------------------------------------------------------



async function getSpiderManTitles() {
    const res = await fetch("https://imdb.iamidiotareyoutoo.com/search?q=spiderman");
    const data = await res.json();

    return (data?.description || []).map(m => m?.["#TITLE"]);
}

getSpiderManTitles()
    .then(titles => console.log(titles))
    .catch(err => console.error("Error:", err));


//   output :

//     'Spider-Man',
//   'Spiderman the Verse',
//   'Spider-Man: Brand New Day',
//   'Spider-Man: No Way Home',
//   'Italian Spiderman',
//   'The Amazing Spider-Man',
//   'Spider-Man: Across the Spider-Verse',
//   'The Amazing Spider-Man 2'