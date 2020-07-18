import React from 'react';
import ChatBot from 'react-simple-chatbot';

function CustomChatbot(props) {
    let story = new Array();
    story = [
        "お疲れ様！よく頑張ったね！",
        "えらい！",
        "すごいね！",
        "よく頑張ったね！"
    ];

    const steps = [
        {
            id: "GreetingMessage",
            message: "今日のお話、聞かせて！",
            trigger: "AskInputStory"
        },
        {
            id: "AskInputStory",
            message: "今日のお話を入力してください。",
            trigger: "InputStory"
        },
        {
            id: "InputStory",
            user: true,
            trigger: "Story"
        },
        {
            id: "Story",
            message: story(Math.floor(Math.random() * story.length)),
            trigger: "EndingMessage"
        },
        {
            id: "EndingMessage",
            message: "またお話聞きたいな！いつでもおいで！",
            end: true
        }
    ];
    return <ChatBot steps={steps} {...config} />;
}
export default CustomChatbot;