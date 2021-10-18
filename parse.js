const axios = require("axios");
const cheerio = require("cheerio");



async function ax() {
  const info = await axios.get("http://tronalddump.io/tag");
  let format = info.data._embedded.tag;
  let href = format.map((el) => el._links.self.href);
   console.log(href);


  
}
  // return newArray;


let ar = [];
ax().then((res) => ar.push(res));

setTimeout(() => {
  ar.forEach((element) => {});
  // console.log(ar);
}, 3000);

//cheerio
const parse = async (url) => {
  const getHTML = async (url) => {
    const data = await axios.get(url, {
      headers: {
        Accept: 'text/html'
      },
      responseType: 'text'
    });
    return cheerio.load(data);
  };
  const $ = await getHTML("http://tronalddump.io/tag/Women");
  console.log($.html());
  const pageNumber = $(`<a href="http://tronalddump.io/tag/Barack%20Obama">http://tronalddump.io/tag/Barack%20Obama</a>`).eq(1).text()
  // console.log(pageNumber);
  
};
parse();


                  
