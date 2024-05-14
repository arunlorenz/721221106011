
# Average Calculator

This is an Express.js application that calculates the average of numbers obtained from a remote API endpoint.

## Prerequisites

- Node.js installed on your system

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_url>

2. Navigate to the project directory:

    ```bash
    cd average-calculator
    
3. Install dependencies:

    ```bash
    npm install
    
## Usage
1. Start the server:
    ```bash
    node app.js


2. Access the calculator via the browser or using a tool like cURL:
    ```bash
    curl http://localhost:9876/nums/<type>
    
Replace <type> with the desired type of numbers (e.g., 'odd', 'even').

## API Endpoints
- **'GET /nums/:type'**: Retrieves a list of numbers of the specified type and calculates the average.

## License
This project is licensed under the MIT License
