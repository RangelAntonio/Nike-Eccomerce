const wrapper = document.querySelector('.sliderWrapper')

const menuItems = document.querySelectorAll('.menuItem');


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  let choseProducts = [0]
  const currentProductImg = document.querySelector('.productImg')
  const currentProductTitle = document.querySelector('.productTitle')
  const currentProductPrice = document.querySelector('.productPrice')
  const currentColors = document.querySelectorAll('.color')
  const currentProductSizes = document.querySelectorAll('.size')


  menuItems.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        // seleciona o slide 
        wrapper.style.transform=`translateX(${-100 * index}vw)`
        // seleciona o produto 
        choseProducts = products[index]
        // seleciona a imagem do produto 
        currentProductTitle.textContent = choseProducts.title
        currentProductPrice.textContent = "$" + choseProducts.price
        currentProductImg.src = choseProducts.colors[0].img
       currentColors.forEach((color, index)=>{
           
           color.style.backgroundColor = choseProducts.colors[index].code
       })

    })
  
})
currentColors.forEach((color, index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src = choseProducts.colors[index].img
    })
})
