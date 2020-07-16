import React from "react";
import ChatBot from "react-simple-chatbot";
import * as admin from 'firebase-admin';

function CustomChatbot(props) {

    let story = new Array();
    story = [
        "よく頑張ったね！",
        "えらいね！",
        "すごい！"
    ];

    const steps = [
        {
            id: "Greet",
            message: "今日の話、聞かせて！",
            trigger: "input"
        },
        {
            id: "input",
            message: "入力してください。",
            trigger: "story"
        },
        {
            id: "story",
            message: story[Math.floor(Math.random()*story.length)],
            trigger: "Done"
        },
        {
            id: "Done",
            message: "またお話ししたいな！いつでもおいで！",
            end: true
        }
    ];
    return <ChatBot steps={steps} />
}
export default CustomChatbot;