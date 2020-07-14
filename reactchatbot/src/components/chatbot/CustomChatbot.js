import React from "react";
import ChatBot from "react-simple-chatbot";

function CustomChatbot(props) {
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
            id: "Done",
            message: "またお話ししたいな！いつでもおいで！",
            end: true
        }
    ];
    return <ChatBot steps={steps} />
}
export default CustomChatbot;