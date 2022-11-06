const form = document.getElementById('create-post');
form.addEventListener('submit', e => {
  e.preventDefault();
});


// Sidebar
const menuItems = document.querySelectorAll(".menu-item");
// MESSGE
const messageNotfications = document.querySelector("#message-notfications");
const message = document.querySelector(".message");
// Message contentlerini secme
const messages = message.querySelectorAll(".messages");
const messageSearch = document.querySelector("#message-search");

// Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
let root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
// const bg1 = document.querySelector(".bg-1");
// const bg2 = document.querySelector(".bg-2");
// const bg3 = document.querySelector(".bg-3");

// Click olunanda active clasini sil
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

// Click olunanda active clasi elave et
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove functionunu cagirma
    changeActiveItem();
    item.classList.add('active');

    // Notfication bar i yoxlamaq
    if(item.id != "notfications"){
      document.querySelector(".notfications-popup").style.display = 'none'; 
      // document.querySelector("#notfications .notfications-count").style.display = 'block'; 
    } else {
      document.querySelector(".notfications-popup").style.display = 'block';
      document.querySelector("#notfications .notfications-count").style.display = 'none'
    }
  })
});

// --------------------------- Message ------------------------
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  messages.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1){
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  })
}

// Search chat
messageSearch.addEventListener('keyup', searchMessage);

// Message bolmesinin arxa fonuna kolge elave edir
messageNotfications.addEventListener('click', () => {
  message.style.boxShadow = '0 0 1rem var(--color-primary)'
  messageNotfications.querySelector('.notfications-count').style.display = 'none';
  // kolgeye vaxt elave etmek
  setTimeout(() => {
    message.style.boxShadow = 'none';
  }, 2000)
});


// customize-theme 
const openThemeModal = () => {
  themeModal.style.display = "grid";
}

const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = 'none';
  }
}
//close modal
themeModal.addEventListener('click', closeThemeModal);

// Open modal
theme.addEventListener('click', openThemeModal);

// Remove active class form spqan
const removeActiveSpan = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
}
const removeColorsSpanActive = () => {
  colorPalette.forEach(color => {
    color.classList.remove('active');
  })
}

// ---------------------- Font Size ------------------------\
fontSizes.forEach(size => {
  size.addEventListener("click", () => {
    removeActiveSpan();
    let fontSize;
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1')){
      fontSize = "10px";
      root.style.setProperty('----sticky-top-let', '5.4rem');
      root.style.setProperty('----sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')){
      fontSize = "13px";
      root.style.setProperty('----sticky-top-let', '5.4rem');
      root.style.setProperty('----sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')){
      fontSize = "16px";
      root.style.setProperty('----sticky-top-let', '-2rem');
      root.style.setProperty('----sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')){
      fontSize = "19px";
      root.style.setProperty('----sticky-top-let', '-5rem');
      root.style.setProperty('----sticky-top-right', '-25rem');
    } else if (size.classList.contains('font-size-5')){
      fontSize = "22px";
      root.style.setProperty('----sticky-top-let', '-12rem');
      root.style.setProperty('----sticky-top-right', '35rem');
    } 
    document.querySelector("html").style.fontSize = fontSize;
  })
  //
});

// change color primare
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    removeColorsSpanActive()
    let primaryHue
    color.classList.toggle('active');
    
    if(color.classList.contains('color-1')){
      primaryHue = 252;
    } else if(color.classList.contains('color-2')){
      primaryHue = 52;
    } else if(color.classList.contains('color-3')){
      primaryHue = 352;
    } else if(color.classList.contains('color-4')){
      primaryHue = 152;
    } else if(color.classList.contains('color-5')){
      primaryHue = 202;
    }

    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})

 //theme background value
// let lightColorLightness;
// let whiteColorLightness;
// let darkColorLightness;

// const changeBG = () => {
//   root.style.setProperty('--light-color-lightness', lightColorLightness);
//   root.style.setProperty('--white-color-lightness', whiteColorLightness);
//   root.style.setProperty('--dark-color-lightness', darkColorLightness);
// }

// bg1.addEventListener('click', () => {
//   bg1.classList.add('active');
//   //remove active class form the others
//   bg2.classList.remove('active');
//   bg3.classList.remove('active')
//   window.location.reload();
// });



// bg2.addEventListener('click', () => {
//   lightColorLightness = "15%";
//   whiteColorLightness = "20%";
//   darkColorLightness = "15%";

//   bg2.classList.font = "white";
//   bg2.classList.add('active');
//   //remove active class form the others
//   bg1.classList.remove('active');
//   bg3.classList.remove('active')
//   changeBG();
// });

// bg3.addEventListener('click', () => {
//   lightColorLightness = "95%";
//   whiteColorLightness = "10%";
//   darkColorLightness = "0%";

//   bg2.classList.add('active');
//   //remove active class form the others
//   bg1.classList.remove('active');
//   bg2.classList.remove('active')
//   changeBG();
// });

