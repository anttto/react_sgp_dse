let currentLanguage = document.documentElement.lang;

//국가별 텍스트 변경
export function setLanguage() {
  const langEl = document.querySelectorAll("[data-lang]");
  langEl.forEach(function (lang) {
    lang.innerHTML = translang[currentLanguage][lang.dataset.lang];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (currentLanguage == "ko") document.body.classList.add("ko");
  if (currentLanguage == "en") document.body.classList.add("en");
  if (currentLanguage == "de") document.body.classList.add("de");
  if (currentLanguage == "fr") document.body.classList.add("fr");
  if (currentLanguage == "es") document.body.classList.add("es");
  if (currentLanguage == "pt") document.body.classList.add("pt");
  if (currentLanguage == "th") document.body.classList.add("th");
  if (currentLanguage == "ja") document.body.classList.add("ja");
  if (currentLanguage == "zh-TW") document.body.classList.add("zh-TW");
  if (currentLanguage == "zh-CN") document.body.classList.add("zh-CN");
});

export function popupLang() {
  const msgTxt = [
    "",
    translang[currentLanguage].POP1,
    translang[currentLanguage].POP2,
    translang[currentLanguage].POP3,
    translang[currentLanguage].POP4,
    translang[currentLanguage].POP5,
    translang[currentLanguage].POP6,
    translang[currentLanguage].POP7,
    translang[currentLanguage].POP8,
    translang[currentLanguage].POP9,
    translang[currentLanguage].POP10,
    translang[currentLanguage].POP11,
    translang[currentLanguage].POP12,
    translang[currentLanguage].POP13,
    translang[currentLanguage].POP14,
    translang[currentLanguage].POP15,
    translang[currentLanguage].POP16,
    translang[currentLanguage].POP17,
    translang[currentLanguage].POP18,
    translang[currentLanguage].POP19,
    translang[currentLanguage].POP20,
    translang[currentLanguage].POP21,
    translang[currentLanguage].POP22,

    translang[currentLanguage].ERROR1,
    translang[currentLanguage].ERROR2,
    translang[currentLanguage].ERROR3,
    translang[currentLanguage].ERROR4,
  ];
  return msgTxt;
}
