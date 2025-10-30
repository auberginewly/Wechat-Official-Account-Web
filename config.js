const oa_name = "yearn1ng";
const oa_description = "山山而川 人生海海 不过尔尔";
const web_beian = "赣ICP备2025066072号-2";

function replaceText(elementId, newText) {
  var element = document.getElementById(elementId);
  if (element) {
      element.innerText = newText;
  } else {
      console.log("Element with ID '" + elementId + "' not found.");
  }
}

replaceText('wechatOA-name', oa_name);
replaceText('wechatOA-description', oa_description)
replaceText('web-beian', web_beian)