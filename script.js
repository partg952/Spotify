let isplaying = false
let button = document.getElementById('search-button')
let text = document.getElementById('search-text')

button.onclick=()=>{
search()
}
text.onchange=()=>{
search()
}

function search(){
    while(main.firstChild){
        main.removeChild(main.firstChild)
    }
fetch("http://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query="+text.value+"&type=track")
.then(res=>res.json())
.then(blob=>{
    console.log(blob)
    // search.data.tracks[0].previewURL
    for(let i=0;blob.search.data.tracks.length;i++){
        let div = document.createElement('div')
            let audio = document.createElement('audio')
            div.classList.add("div")
            main.appendChild(div)
            let play = document.createElement('button')
            let title = document.createElement('p')
            div.appendChild(title)
            let string = blob.search.data.tracks[i].albumName
            title.textContent = blob.search.data.tracks[i].albumName
            let word = string.split(string[9])[0]
            div.appendChild(play)
            play.textContent = "\u{25B6}"
            console.log(string)
            // title.textContent = word
            div.appendChild(audio)
            play.onclick = () => {
                if (!isplaying) {
                    audio.play();
                    isplaying = true
                } else {
                    audio.pause();
                    isplaying = false
                }

            }
            audio.src = blob.search.data.tracks[i].previewURL
        
    }
})

}



let main = document.getElementById('main-container')
fetch("http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4")
    .then(res => res.json())
    .then(blob => {
        console.log(blob)
        for (let i = 0; i < blob.tracks.length; i++) {
            let div = document.createElement('div')
            let audio = document.createElement('audio')
            div.classList.add("div")
            main.appendChild(div)
            let play = document.createElement('button')
            let title = document.createElement('p')
            div.appendChild(title)
            let string = blob.tracks[i].albumName
            title.textContent = blob.tracks[i].albumName
            let word = string.split(string[9])[0]
            div.appendChild(play)
            play.textContent = "\u{25B6}"
            console.log(string)
            // title.textContent = word
            div.appendChild(audio)
            play.onclick = () => {
                if (!isplaying) {
                    audio.play();
                    isplaying = true
                } else {
                    audio.pause();
                    isplaying = false
                }

            }
            audio.src = blob.tracks[i].previewURL
        }
    }).catch(()=>{

    })