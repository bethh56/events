const pies = [
    {
     name: "Dutch Apple Pie",
     price: 1000,
     isWarm: true,
     isOrganic: true,
     crust: "extra flakey",
     iceCream: "Vanilla Bean",
     isAvaliable: true,
     imgUrl: "https://preppykitchen.com/wp-content/uploads/2015/12/Apple-Pie-Feature.jpg",
     drinkPairing: "whiskey",
     instructor: "Zoe"
    },
    {
        name: "Regular Apple Pie",
        price: 5000,
        isWarm: true,
        isOrganic: true,
        crust: "under baked",
        iceCream: "Vegan Chocolate",
        isAvaliable: true,
        imgUrl: "https://cakewhiz.com/wp-content/uploads/2018/10/Simple-Apple-Pie-Recipe.jpg",
        drinkPairing: "all wine",
        instructor: "Mary"
    },
    {
        name: "Pizza Pie",
        price: 1000,
        isWarm: true,
        isOrganic: false,
        crust: "yeah!",
        iceCream: "no",
        isAvaliable: true,
        imgUrl: "http://www.rhodesbread.com/blog/images/YvonneF/10102016/rhodes-pizza-pie-10.jpg",
        drinkPairing: "High Life",
        instructor: "Luke"
    },
    {
        name: "Berry Pie",
        price: 1,
        isWarm: false,
        isOrganic: true,
        crust: "graham cracker",
        iceCream: "Mint",
        isAvaliable: true,
        imgUrl: "https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/m/800/mixed-berry-pie.jpg",
        drinkPairing: "Gin",
        instructor: "Mary"
    },
    {
        name: "Pi",
        price: 3.14,
        isWarm: false,
        isOrganic: true,
        crust: "crumb",
        iceCream: "Moose Tracks",
        isAvaliable: true,
        imgUrl: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/pi_gqp5ha.jpg",
        drinkPairing: "milk",
        instructor: "Luke"
       },
       {
        name: "Pumpkin Pie",
        price: 10,
        isWarm: false,
        isOrganic: true,
        crust: "almond flour",
        iceCream: "Whipped Cream",
        isAvaliable: true,
        imgUrl: "https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2016/11/Homemade-Pumpkin-Pie-4.jpg?fit=1360%2C1360&ssl=1",
        drinkPairing: "tea",
        instructor: "Beth"
       },
       {
        name: "Blueberry",
        price: 6,
        isWarm: true,
        isOrganic: true,
        crust: "extra flakey",
        iceCream: "Vanilla Bean",
        isAvaliable: true,
        imgUrl: "https://www.simplyrecipes.com/wp-content/uploads/2017/07/blueberry-pie-horiz-a-180011.jpg",
        drinkPairing: "water",
        instructor: "Beth"
       },
       {
        name: "Pecan Pie",
        price: 70,
        isWarm: false,
        isOrganic: false,
        crust: "extra flakey",
        iceCream: "none",
        isAvaliable: true,
        imgUrl: "https://i2.wp.com/grandbaby-cakes.com/wp-content/uploads/2019/10/Pecan-Pie-Recipe-1.jpg",
        drinkPairing: "whiskey",
        instructor: "Zoe"
       },  
]
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const pieBuilder = (monkeybuttArray) => {
    let domString = "";
    for (let i = 0; i < monkeybuttArray.length; i++){
        domString += `<div class="cards">`;
        domString += `<h1>Type: ${monkeybuttArray[i].name}</h1>`;
        domString += `<img src="${monkeybuttArray[i].imgUrl}"/>`;
        domString += `<h3>Cost: ${monkeybuttArray[i].price}</h3>`;
        domString += `<h4>Is the pie warm?: ${monkeybuttArray[i].isWarm}</h4>`;
        domString += `<h4>Is the pie organic: ${monkeybuttArray[i].isOrganic}</h4>`;
        domString += `<h4>What type of crust: ${monkeybuttArray[i].crust}</h4>`;
        domString += `<h4>Flavor of Ice Cream: ${monkeybuttArray[i].iceCream}</h4>`;
        domString += `<h4>Is it avaliable: ${monkeybuttArray[i].isAvaliable}</h4>`;
        domString += `<h4>Pairing Drink: ${monkeybuttArray[i].drinkPairing}</h4>`;
        domString += `<h4>Instructor: ${monkeybuttArray[i].instructor}</h4>`;
        domString += `</div>`;
    }  
    printToDom('pies', domString);
};

const findMyPies = (e) => {
    const buttonId = e.target.id;
    const myPies = [];
    for(let i = 0; i < pies.length; i++) {
        if(pies[i].instructor === buttonId) {
            myPies.push(pies[i]);
        }
    }
    pieBuilder(myPies);
};

pieBuilder(pies);

document.getElementById('Zoe').addEventListener('click', findMyPies);
document.getElementById('Mary').addEventListener('click', findMyPies);
document.getElementById('Luke').addEventListener('click', findMyPies);
document.getElementById('Beth').addEventListener('click', findMyPies);

