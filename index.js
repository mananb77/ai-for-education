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


// Get DOM elements
const userInputBox = document.getElementById('user-input-box');
const sendButton = document.getElementById('send-button');
const chatLog = document.getElementById('chat-log');

// Function to append a message to the chat log
function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<strong>${sender}: </strong>${message}`;
  chatLog.appendChild(messageElement);
}

// Function to handle user input and generate chatbot response
async function handleUserInput() {
  const userInput = userInputBox.value;
  appendMessage('You', userInput);

  setTimeout(async () => {
    // Simulating a chatbot response (replace with your actual logic)
    const chatbotResponse = await generateChatbotResponse(userInput);
    appendMessage('Chatbot', chatbotResponse);

    // Clear the user input box
    userInputBox.value = '';
  }, 1000); // Change the delay duration as per your requirement
}

// Event listener for the send button click
sendButton.addEventListener('click', handleUserInput);

// Event listener for the Enter key press in the user input box
userInputBox.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submission
    handleUserInput();
  }
});

// Function to generate a chatbot response (replace with your actual logic)
async function generateChatbotResponse(userInput) {
  // Replace this with your actual logic to generate the chatbot response
  return "Sure, I've created a calendar generated from your link that you attached.";
}


app.post("/", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content_Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content: "You are courseLogisticsGPT, a helpful assistant for developing todo lists and calendar outlines for developing and running courses."},
        {role: "user", content: message}
      ],
      ... message,
      temperature: 0,
      max_tokens: 100,
    })
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data = await response.json()
    res.send(data)
  } catch (error) {
    console.error(error)
  }

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
