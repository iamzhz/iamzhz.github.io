const texts = ["Hi, there!", "I am zhz!"];
const typingSpeed = 150; // 打字速度，越小越快
const pauseBetweenTexts = 1000; // 打完一段文本后的停顿时间

let i = 0;
let indexForTexts = 0;

function typeWriter(text) {
    if (i < text.length) {
        document.getElementById("txt").innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text), typingSpeed);
    } else {
        // 当一段文字打完后，停顿一段时间，然后继续下一个文本
        setTimeout(() => {
            i = 0;
            indexForTexts++;
            if (indexForTexts < texts.length) {
                changeText();
            }
        }, pauseBetweenTexts);
    }
}

function changeText() {
    document.getElementById("txt").innerHTML = "";
    typeWriter(texts[indexForTexts]);
}

window.onload = changeText;
