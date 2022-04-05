function shout(string) {
    return string.toUpperCase();
}
"Hello".toUpperCase();

function whisper(string) {
    return string.toLowerCase();
}
"HELLO".toLowerCase()

 function logShout(string){
     console.log(shout(string));
 }
 function logWhisper(string){
    console.log(string.toLowerCase())
 }


 function sayHiToHeadphonedRoommate(string) {
     if (string.toLowerCase() === string) {
         return "I can't hear you!"
        }
     if (string.toUpperCase() === string) {
         return "YES INDEED!"

     }
     if (string === "Let's have dinner together!") {
         return "I would love to!"

     }

 }
