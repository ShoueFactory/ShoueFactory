// Create the HTML structure
const html = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Animated Website</title>
      <style>
          body {
              margin: 0;
              padding: 0;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-image: url('background.jpg');
              background-size: cover;
              background-position: center;
              animation: rotateBackground 10s infinite linear;
          }

          @keyframes rotateBackground {
              0% {
                  transform: rotate(0deg);
              }
              100% {
                  transform: rotate(360deg);
              }
          }

          .container {
              text-align: center;
              color: white;
          }

          .animated-text {
              font-size: 3em;
              animation: bounce 2s infinite;
          }

          @keyframes bounce {
              0%, 100% {
                  transform: translateY(0);
              }
              50% {
                  transform: translateY(-10px);
              }
          }

          .button {
              display: inline-block;
              padding: 10px 20px;
              margin: 10px;
              font-size: 1.2em;
              color: white;
              background-color: blue;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s ease;
          }

          .button:hover {
              background-color: green;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1 class="animated-text">Welcome to My Website</h1>
          <button class="button">Learn More</button>
          <button class="button">Contact Us</button>
      </div>
  </body>
  </html>
`;

// Write the HTML to the document
document.write(html);
