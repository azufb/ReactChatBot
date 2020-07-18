import React from 'react';
import ChatBot from 'react-simple-chatbot';

function CustomChatbot(props) {
    let praise = [
        "お疲れ様！よく頑張ったね！",
        "えらい！",
        "すごいね！",
        "よく頑張ったね！"
    ];

    const steps = [
        {
            id: "GreetingMessage",
            message: "やあ！",
            trigger: "AskInputStory"
        },
        {
            id: "AskInputStory",
            message: "お話いっぱい聞かせて！",
            trigger: "InputStory"
        },
        {
            id: "InputStory",
            user: true,
            trigger: "Story"
        },
        {
            id: "Story",
            message: praise[Math.floor(Math.random() * praise.length)],
            trigger: "EndingMessage"
        },
        {
            id: "EndingMessage",
            message: "またお話聞きたいな！いつでもおいで！",
            end: true
        }
    ];
    return <ChatBot steps={steps}/>
}
export default CustomChatbot;