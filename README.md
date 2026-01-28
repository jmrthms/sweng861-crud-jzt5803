# SWENG 861 - Campus Analytics Project

**Student:** Jomar Thomas Almonte
**Course:** SWENG 861 | Software Construction
**Semester:** Spring 2026

## Project Description

A campus analytics platform designed to aggregate metrics from various university domains (Enrollment, Facilities, etc.) into a centralized dashboard.

## Week 2 Assignment: Authentication & Protected APIs

This week's deliverable implements **Google OAuth 2.0** for secure user authentication and protects API endpoints using JWT (JSON Web Tokens).

### Features Implemented

- **Social Login:** Users can sign in using their Google Account.
- **User Persistence:** User profiles (Google ID, Email) are stored in a local SQLite database.
- **Secure API:** The `/secure-data` endpoint is protected and requires a valid Bearer token.
- **Sessionless Auth:** Uses JWT for stateless authentication after the initial OAuth handshake.

### Prerequisites

- Node.js (v18+)
- Google Cloud Console Credentials (Client ID & Secret)

### Setup Instructions

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Environment Configuration:**
    Create a `.env` file in the root directory with the following variables:

    ```env
    PORT=3000
    JWT_SECRET=your_jwt_secret_here
    SESSION_SECRET=your_session_secret_here
    GOOGLE_CLIENT_ID=your_google_client_id_from_gcp
    GOOGLE_CLIENT_SECRET=your_google_client_secret_from_gcp
    ```

3.  **Start the Server:**
    ```bash
    npm start
    ```
    The server will run at `http://localhost:3000`.

### Testing Verification

1.  **Public Access:**
    - Visit `http://localhost:3000/` to see the home page.
2.  **Authentication:**
    - Click the **"Login with Google"** button.
    - Complete the Google Sign-In flow.
    - You will be redirected back providing a JWT token.

3.  **Protected Endpoint:**
    - Once logged in, click **"Test Secure Endpoint"** on the UI.
    - You should see a success message with your user profile data.
    - Try accessing `http://localhost:3000/secure-data` directly in a browser (incognito) or via curl without a token; you will receive a `401 Unauthorized`.

---

## Week 1 Deliverable: Hello/Health Endpoint

_(Previous assignment content)_

- `/health`: Returns JSON status.
