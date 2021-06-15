window.onload = () => {
  console.log(window.location.pathname);
  if (window.location.pathname == "/uczen/index") {
    const modernUiButton = document.querySelector("#icon-wcag");
    modernUiButton.click();
  }
};
