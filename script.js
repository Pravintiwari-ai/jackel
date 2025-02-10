let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text)
{
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.pitch=1
    text_speak.rate=1
    text_speak.volume=1
    // text_speak.lang="hi-MA"
    window.speechSynthesis.speak(text_speak)
}
function wishMe()
{
    let day=new Date()
    let hours= day.getHours()
    if(hours>=0 && hours<12)
    {
        speak("Good morning sir")
    }
    else if(hours>=12 && hours<16)
    {
        speak("good afternoon sir")
    }
    else
    {
        speak("good evening sir")
    }
}
window.addEventListener('load', ()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex= event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener('click', ()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
     btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello"))
    {
        speak("hello sir,what can i help you")
    }
    else if (message.includes("who are you") ||message.includes("hu r u") )
    {
        speak("i am virtual assistant, created by pravin tiwari")
    }
    else if (message.includes("tell me about yourself"))
        {
            speak("i am jackel yourvirtual assistant, created by pravin tiwari")
        }
    
    else if (message.includes("open youtube"))
    {
        speak("opening youtube....")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes("open google"))
        {
            speak("opening google....")
            window.open("https://www.google.com/")
        }
    else if (message.includes("open instagram"))
        {
            speak("opening instagram....")
            window.open("https://www.instagram.com/")
        }
        else if (message.includes("open calculator"))
            {
                speak("opening open calculater....")
                window.open("calculator://")
            }
            else if (message.includes("open whatsapp"))
                {
                    speak("opening open whatsapp....")
                    window.open("whatsapp://")
                }
        else if (message.includes("date")){
            let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
            speak(date)
        }
    else{
        let finaltext="this is what i found on internet regarding" + message.replace("jackel","") || message.replace("jackal","")
        speak(finaltext)
        window.open(`https://www.google.com/search?q=${message.replace("jackal","")}`)
    }
        
    

}