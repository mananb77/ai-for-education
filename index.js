import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  organization: 'org-t5BD0Ux8dO35xYFEdnLVgc7E',
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {

//   const options = {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${API_KEY}`,
//       "Content_Type": "application/json"
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {role: "system", content: "You are courseLogisticsGPT, a helpful assistant for developing todo lists and calendar outlines for developing and running courses."},
//         {role: "user", content: message}
//       ],
//       ... message,
//       temperature: 0,
//       max_tokens: 100,
//     })
//   }

//   try {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', options)
//     const data = await response.json()
//     res.send(data)
//   } catch (error) {
//     console.error(error)
//   }

  const { message } = req.body;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {role: "system", content: "You are courseLogisticsGPT, a helpful assistant for developing todo lists and calendar outlines for developing and running courses."},
      {role: "user", content: message}
    ],
    ... message,
    temperature: 0
  });

  res.json({
    completion: completion.data.choices[0].message
  })

  const response = await response.json();


});

// // Get DOM elements
// const userInputBox = document.getElementById('user-input-box');
// const sendButton = document.getElementById('send-button');
// const chatLog = document.getElementById('chat-log');

// // Function to append a message to the chat log
// function appendMessage(sender, message) {
//   const messageElement = document.createElement('div');
//   messageElement.classList.add('message');
//   messageElement.innerHTML = `<strong>${sender}: </strong>${message}`;
//   chatLog.appendChild(messageElement);
// }

// // Function to handle user input and generate chatbot response
// async function handleUserInput() {
//   const userInput = userInputBox.value;
//   appendMessage('You', userInput);

//   // Add user input to conversation history
//   conversation.push({
//     role: 'system',
//     content: userInput
//   });

//   // Generate chatbot response using OpenAI API
//   const response = await getChatbotResponse(conversation);

//   // Append chatbot response to the chat log
//   const chatbotReply = response.choices[0].message.content;
//   appendMessage('Chatbot', chatbotReply);

//   // Clear user input box
//   userInputBox.value = '';

//   // Scroll to the bottom of the chat log
//   chatLog.scrollTop = chatLog.scrollHeight;
// }

// // Function to send conversation history to OpenAI API and get chatbot response
// async function getChatbotResponse(conversation) {
//   try {
//     const response = await openai.ChatCompletion.create({
//       model: 'gpt-4', // Replace with the desired model ID
//       messages: [
//         {role: "system", content: "You are courseLogisticsGPT, a helpful assistant for developing todo lists and calendar outlines for developing and running courses."},
//         {role: user, content: conversation}
//       ],
//       apiKey: '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',
//     });

//     return response;
//   } catch (error) {
//     console.error('Error:', error);
//     // Handle error
//   }
// }

// // Event listener for the send button
// sendButton.addEventListener('click', handleUserInput);

// // Event listener for the enter key press
// userInputBox.addEventListener('keypress', function(event) {
//   if (event.key === 'Enter') {
//     handleUserInput();
//   }
// });

// // Function to scroll to the bottom of the chat log
// function scrollToBottom() {
//   chatLog.scrollTop = chatLog.scrollHeight;
// }

// // Scroll to the bottom of the chat log on initial load and when new messages are appended
// document.addEventListener('DOMContentLoaded', scrollToBottom);
// chatLog.addEventListener('DOMNodeInserted', scrollToBottom);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});



// lets do a single query
// then pass the query response into the calendar / gmail integration







