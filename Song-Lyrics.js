const songLyrics = `
[Verse 1] We are the world
[Verse 2] We are the children
[Verse 3] We are the ones who make a brighter day, so let's start giving
[Verse 4] There's a choice we're making
[Verse 5] We're saving our own lives
[Verse 6] It's true we'll make a better day, just you and me`;

const pattern = /\[Verse \d+\] .+/g;
const extractedLyrics = songLyrics.match(pattern);

console.log("Extracted Song Lyrics:");
for (let i = 0; i < extractedLyrics.length; i++) {
    console.log(extractedLyrics[i]);
};