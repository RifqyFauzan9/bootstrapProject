const ghostEmote = document.getElementById('emote');
ghostEmote.addEventListener('mouseover', function () {
    ghostEmote.innerText = '😮';
});

ghostEmote.addEventListener('mouseout', function () {
    ghostEmote.innerText = '👻';
});