# Client Side API Code

This is a simple web application that demonstrates how to consume an API on a button click using vanilla JavaScript.

## Features

- User enters a rapper's name in the input field.
- On button click, the app fetches data from a public API and displays the rapper's birth name.
- 
<img width="1366" height="768" alt="Screenshot (80)" src="https://github.com/user-attachments/assets/e88b1c54-7b01-4042-a734-67e4fdfcd261" />


![Screenshot_2025-09-04-07-51-30-951_com android chrome](https://github.com/user-attachments/assets/d17f3c7c-d94e-4c36-bbeb-83d7675ffde9)

## Project Structure

```
index.html
css/
js/
  main.js
```

- `index.html`: The main HTML file containing the UI.
- `js/main.js`: Handles the API request and updates the UI.

## Usage

1. Open `index.html` in your browser.
2. Enter a rapper's name in the input field.
3. Click the "Click Me" button.
4. The birth name of the rapper will be displayed under "Result".

## API

This project uses the following API endpoint:

```
https://my-first-crud.onrender.com/api/{rapperName}
```

Replace `{rapperName}` with the name you want to search for.

## Example

- Input: `eminem`
- Output: `Marshall Bruce Mathers III`

## License

This project is for educational purposes.
