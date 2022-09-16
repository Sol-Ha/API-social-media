let fetchDatas = async function () {
  let url = "data.json";
  let response = await fetch(url);
  let dataJson = await response.json();

  console.log(dataJson);
};

function socialMediaCard() {
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
  imageArray[0].src = "assets/images/image.jpg";

  // FOOTER LOGOS
  
  const footerArrayA = new Array();
  footerArrayA[0] = new Image("30", "30");
  footerArrayA[0].src = "assets/logos/goto A.svg";

  footerArrayA[1] = new Image("30", "30");
  footerArrayA[1].src = "assets/logos/share A.svg";

  footerArrayA[2] = new Image("40", "40");
  footerArrayA[2].src = "assets/logos/heart A.svg";

  // CARD CONSTRUCTION
  const socialMediaCard = document.querySelector("section");
  let newArticle = document.createElement("article");
  socialMediaCard.appendChild(newArticle);

  // HEADER
  let headerArticle = document.createElement("header");
  newArticle.appendChild(headerArticle);

  headerArticle.appendChild(logoArray[0]);

  // BODY
  let bodyArticle = document.createElement("main");
  newArticle.appendChild(bodyArticle);
  
  bodyArticle.appendChild(imageArray[0]); 
  
  let txtArticle = document.createElement("p");
  bodyArticle.appendChild(txtArticle);
  txtArticle.innerText += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum quod perspiciatis ut, rem, nobis sit laudantium tempore, natus ea voluptates earum reprehenderit optio eos? Consequatur minima consequuntur maxime aliquid.";

    // FOOTER
    let footerArticle = document.createElement("footer");
    newArticle.appendChild(footerArticle);

    let divFooter = document.createElement("div");
    footerArticle.appendChild(divFooter);

    divFooter.appendChild(footerArrayA[0]); 
    divFooter.appendChild(footerArrayA[1]); 
    footerArticle.appendChild(footerArrayA[2]);
}

socialMediaCard();
setTimeout(fetchDatas, 1000 * 60 * 5);
