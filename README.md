# SummaryAI

## Overview 
Summarizer AI is a web application that uses the Rapid API's [Article Extractor And Summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer/playground/apiendpoint_99e4b95c-3adc-4532-8b4e-20795c3c996a) to generate concise summaries from larger texts. Build with React.js and Redux, it provides an intuitive interface for users to input text and receive sumamrized content. 

## Features 

- **AI-Powered Summarization :** Leverages an API to generate summaries.
- **State Management:** Utilizes Redux for efficient state management.
- **User-Friendly Interface:** Clean and simple design for ease of use.
- **Responsive Design:** Fully responsive design using CSS, ensuring usability across various devices.
- **Conditional API Requests:** Uses RTK Query to make API requests based on click events. 
- **Summary Persistence:** Stores the last searched summary in local storage.
- **Robust Error Handling:** Captures and manages client and server side errors effectively.


## Installation 

1. **Clone the respository:**
   ```bash
   git clone https://github.com/NishevithaV/SummaryAI.git
   cd SummaryAI
    ```
   
2. **Insall dependencies:**
   ```bash
    npm install 
    ```

3. **Create a  `.env` file:**

   Create a `.env` file in the root directory and add your Rapid API key:
   ```env
    REACT_APP_API_KEY=your-api-key
    ```

4. **Start the application:**
    ```bash
    npm start
    ```
    The app will be available at `http://localhost:3000`.

## Usage 
1. Enter the text you want to summarize in the input field.
2. Click the arrow button.
3. View the generated summary below the input field.
4. Click on the copy-to-clipboard icon to copy the generated text.
5. The last generated summary is stored in local storage and can be viewed upon revisiting the app. 

## Technologies Used 
- **React.js**
- **Redux Toolkit Query (RTK Query)**
- **CSS**
- **RAPID API's Summarizer API**

## Contributing 
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes. 
