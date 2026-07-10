const words = ["Penetration Tester.", "Researcher.", "Content Creator."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typed-text').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        }
        timer = setTimeout(loopTyping, 100); // Typing speed
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typed-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 50); // Deleting speed
    };
    setTimeout(loopDeleting, 2000); // Pause before deleting
}

// Start typing effect on load
window.addEventListener('load', () => {
    setTimeout(typingEffect, 1000);
});
