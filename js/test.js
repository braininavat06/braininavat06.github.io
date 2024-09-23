document.querySelectorAll('code').forEach(el => {
    hljs.highlightElement(el);
});

document.querySelectorAll('pre').forEach(pre => {
    var language = pre.getElementsByTagName('code')[0].classList[0].substring(9);
    var copyButton = document.createElement('button');
    copyButton.className = "copy-button";
    copyButton.innerHTML = `복사▼ ${language}`;
    copyButton.addEventListener("click", (e) => {
        var codeContent = e.currentTarget.parentNode.getElementsByTagName('code')[0];
        window.navigator.clipboard.writeText(codeContent.textContent);
    })
    pre.append(copyButton);
});