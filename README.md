# Encryptify

Encryptify is a secure platform for encryption and decryption, offering admin-approved access, two-factor authentication (2FA), and algorithms like Caesar Cipher and AES (128/192/256 bits). It features a user-friendly dashboard with secure key storage and automatic key retrieval, ensuring safe and seamless data decryption.

## Features

- User registration and login
- Admin approval for new accounts
- Multi-factor authentication (2FA) using Firebase Authentication
- Encryption and decryption using various algorithms (AES, Cysar)
- Secure storage and transfer of encryption keys
- Admin dashboard to manage users and keys

## Getting Started

### Prerequisites

- Node.js
- Firebase account

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/FirasKahlaoui/Encryptify.git
    cd Encryptify
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up Firebase:
    - Create a Firebase project and enable Authentication and Firestore.
    - Copy your Firebase config to the `.env` file.

4. Start the development server:

    ```bash
    npm start
    ```

## Usage

- Open your browser and go to `http://localhost:3000`.
- Register a new account.
- Log in and test the functionalities.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License.
