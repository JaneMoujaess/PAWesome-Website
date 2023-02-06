//Title Section - Download
var numberOfDownloadButtons = document.querySelectorAll(".download-button").length;
function downloadClick()
{
  alert("Downloaded ✔️");
}
for (var i = 0; i < numberOfDownloadButtons; i++) {
  document.querySelectorAll(".download-button")[i].addEventListener("click", downloadClick);
}

//Pricing Section
var subscribeBasic=document.querySelector(".subscribeBasic");
var subscribePro=document.querySelector(".subscribePro");
subscribeBasic.addEventListener("click",function()
{
  if(subscribePro.classList.contains("subscribed"))
  {
    subscribePro.classList.remove("subscribed");
    subscribePro.textContent="Subscribe";
  }
  if(subscribeBasic.classList.contains("subscribed"))
  {
    subscribeBasic.classList.remove("subscribed");
    subscribeBasic.textContent="Subscribe";
  }
  else
  {
    subscribeBasic.textContent="Unsubscribe";
    subscribeBasic.classList.add("subscribed");
  }
});

subscribePro.addEventListener("click",function()
{
  if(subscribeBasic.classList.contains("subscribed"))
  {
    subscribeBasic.classList.remove("subscribed");
    subscribeBasic.textContent="Subscribe";
  }
  if(subscribePro.classList.contains("subscribed"))
  {
    subscribePro.classList.remove("subscribed");
    subscribePro.textContent="Subscribe";
  }
  else
  {
    subscribePro.textContent="Unsubscribe";
    subscribePro.classList.add("subscribed");
  }
});
