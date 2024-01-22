const shlok_s = document.querySelector(".shlok-s");
const shlokSanskrit = document.querySelector(".shlok-sanskrit");
const shlokEnglish = document.querySelector(".shlok-english");
const hindiTranslation = document.querySelector(".hindi-translation");
const englishTranslation = document.querySelector(".english-translation");
const gitaBtn = document.querySelector(".btn-gita");
const getShlok = async (searchShlok)=>{
    const API = "https://bhagavadgitaapi.in/slok/";
    const response = (await fetch("https://bhagavadgitaapi.in/slok/" + searchShlok));
    const data = await response.json();
    console.log(data);
    const shlokcardSanskrit = `
    
        <h2 >Shlok in Sanskrit</h2>
        <p class="shlok-s shlok-common">${data.slok}</p>
    `
    const shlokcardEnglish = 
    `
    <h2>Shlok in English</h2>
    <p class="shlok-e shlok-common">${data.transliteration}</p>
    `
    const hindiTranslationcard = `
    <h2>हिंदी में अनुवाद</h2>
    <p class="translation-h shlok-common">${data.tej.ht}</p>
    `;
    const englishTranslationcard = `
    <h2>Tanslation in English</h2>
    <p class="translation-e shlok-common">${data.adi.et}</p>
    `;
    shlokSanskrit.innerHTML = shlokcardSanskrit;
    shlokEnglish.innerHTML = shlokcardEnglish;
    hindiTranslation.innerHTML = hindiTranslationcard;
    englishTranslation.innerHTML = englishTranslationcard;
}

// fetch("https://bhagavadgitaapi.in/slok/1/1")
// .then(reponse => Response.json())
// .then(data => {
//     shlok_s.innerHTML = data.slok;
// })
gitaBtn.addEventListener("click", (e)=>{
    // console.log("clicked");
    e.preventDefault();
    const chInput = document.querySelector(".inputCh").value;
    const verseInput = document.querySelector(".inputverse").value;
    console.log(typeof chInput, verseInput)
    const searchShlok = chInput+"/"+verseInput+"/";
    console.log(searchShlok)
    if(chInput&& verseInput){
        getShlok(searchShlok);
        // console.log("ram ram");
    }
    // return false;s
})
const formSubmit = () =>{
    const chInput = document.querySelector(".inputCh");
    const verseInput = document.querySelector(".inputverse")
    console.log(chInput, verseInput)
    const searchShlok = chInput+"/"+verseInput+"/";
    if(chInput.value && verseInput.value){
        getShlok(searchShlok);
    }
    return false;
}

