import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

function CustomChatbot(props) {

    const theme = {
        background: "white",
        fontFamily: "sans-serif",
        headerBgColor: "#fdd35c",
        botBubbleColor: "antiquewhite"
    }
    let praise = [
        "お疲れ様！よく頑張ったね！",
        "すごいね！最高じゃん！",
        "大変だったね...よく頑張りました！",
        "よく頑張ったね！えらいよ！",
        "今日もよく頑張りました！日進月歩！今日も成長したね！"
    ];

    const steps = [
        {
            id: "GreetingMessage",
            message: "やあ！",
            trigger: "AskInputStory"
        },
        {
            id: "AskInputStory",
            message: "お話、たくさん聞かせてね！",
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
    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps}/>
        </ThemeProvider>
    );
}
export default CustomChatbot;