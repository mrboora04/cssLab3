const tabList=document.querySelector('.tabs ul');
tabList.addEventListener('click',handleTabClick);
function handleTabClick(event){if(event.target.tagName==='A'){event.preventDefault();const tabItems=tabList.querySelectorAll('li');
tabItems.forEach(item=>item.classList.remove('active'));const clickedItem=event.target.parentElement;
clickedItem.classList.add('active');const tabId=event.target.getAttribute('href').slice(1);
const tabPanel=document.getElementById(tabId);const allPanels=document.querySelectorAll('.tabs>div');
allPanels.forEach(panel=>panel.classList.remove('active'));tabPanel.classList.add('active')}}
