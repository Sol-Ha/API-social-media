let fetchDatas = async function () {
  let url = await fetch ("https://graph.instagram.com/media?access_token=IGQVJWc0hxLUJHd011STdicGNSOXg3Q3BvNEJLYmRnOGREeDk4R0VkbkRRdXhwdWNaTUlWcU9SYXRKNVoyOXBnREVKUmpBWVktdnEtOXltYkgtdG1ZAVmwxXzY5YnNPNTBCaVg2czZAR&fields=caption,media_url,timestamp,like_count");
  let dataJson = await url.json();

  console.log(dataJson);
  socialMediaCard(dataJson);
};

function socialMediaCard(datas) {
  // COMPANIES LOGOS
  const logoArray = new Array();
  logoArray[0] = new Image("60", "60");
  logoArray[0].src = "assets/logos/facebook.svg";

  logoArray[1] = new Image("60", "60");
  logoArray[1].src = "assets/logos/instagram.svg";

  logoArray[2] = new Image("65", "65");
  logoArray[2].src = "assets/logos/twitter.svg";

  const imageArray = new Array();
  imageArray[0] = new Image("245", "188");
  imageArray.src = "assets/images/image.jpg";

  // FOOTER LOGOS
  for (let i = 0; i < datas.data.length; i++) {
  const footerArrayA = new Array();
  footerArrayA[0] = new Image("30", "30");
  footerArrayA[0].src = "assets/logos/goto A.svg";

  footerArrayA[1] = new Image("30", "30");
  footerArrayA[1].src = "assets/logos/share A.svg";

  footerArrayA[2] = new Image("40", "40");
  footerArrayA[2].src = "assets/logos/heart A.svg";

  const footerArrayB = new Array();
  footerArrayB[0] = new Image("30", "30");
  footerArrayB[0].src = "assets/logos/goto B.svg";

  footerArrayB[1] = new Image("30", "30");
  footerArrayB[1].src = "assets/logos/share B.svg";

  footerArrayB[2] = new Image("40", "40");
  footerArrayB[2].src = "assets/logos/heart B.svg";

  
  // CARD CONSTRUCTION
  const socialMediaCard = document.querySelector("section");

  let newArticle = document.createElement("article");
  socialMediaCard.appendChild(newArticle);

  // HEADER
  let headerArticle = document.createElement("header");
  newArticle.appendChild(headerArticle);

  headerArticle.appendChild(logoArray[1]);

  // BODY
  let bodyArticle = document.createElement("main");
  newArticle.appendChild(bodyArticle);
  
  bodyArticle.appendChild(imageArray[0]); 
  
  let txtArticle = document.createElement("p");
  bodyArticle.appendChild(txtArticle);
  txtArticle.textContent=datas.data[i].caption;

    // FOOTER
    let footerArticle = document.createElement("footer");
    newArticle.appendChild(footerArticle);

    let divFooter1 = document.createElement("div");
    footerArticle.appendChild(divFooter1);

    let divFooter2 = document.createElement("div");
    footerArticle.appendChild(divFooter2);
  
    divFooter1.appendChild(footerArrayB[0]); 
    divFooter1.appendChild(footerArrayB[1]); 
    divFooter2.appendChild(footerArrayB[2]);

    let numberOfLike = document.createElement("p");
    divFooter2.appendChild(numberOfLike);
    numberOfLike.innerText += 10;
  }
}

fetchDatas()
socialMediaCard();
setTimeout(fetchDatas, 1000 * 60 * 5);
