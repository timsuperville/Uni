# API Documentation

This document provides information about the available APIs and their associated details.

## Register

- **Endpoint**: `/api/auth/register`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:

   ```json
   {
      "username": "string",
      "email": "string",
      "password": "string"
   }
   ```

- **Response**:
  - **Success**:
    - **Status**: `201 Created`

   ```json
   {
      "message": "User registered successfully",
      "userId": "string"
   }
   ```

  - **Error**:
    - **Status**: `409 Existing User`

   ```json
   {
      "error": "string"
   }
   ```

## Login

- **Endpoint**: `/api/auth/login`
- **Method**: `POST`
- **Description**: Authenticates a user.
- **Request Body**:

   ```json
   {
      "username": "string",
      "password": "string"
   }
   ```

- **Response**:
  - **Success**:

      ```json
      {
         "message": "Login successful",
         "token": "string"
      }
      ```

  - **Error**:

      ```json
      {
         "error": "string"
      }
      ```

## Logout

- **Endpoint**: `/api/auth/logout`
- **Method**: `POST`
- **Description**: Destroys the current user session
- **Request Body**:

  ```json
  {}
  ```

## Forgot Password

- **Endpoint**: `/api/auth/forgot-password`
- **Mothod**: 


## Get User Info

- **Endpoint**: `/api/user/{userId}`
- **Method**: `GET`
- **Description**: Retrieves information about a specific user.
- **Response**:
  - **Success**:

      ```json
      {
         "userId": "string",
         "username": "string",
         "email": "string"
      }
      ```

  - **Error**:

      ```json
      {
         "error": "string"
      }
      ```

## Update User Info

- **Endpoint**: `/api/user/{userId}`
- **Method**: `PUT`
- **Description**: Updates information for a specific user.
- **Request Body**:

   ```json
   {
      "username": "string",
      "email": "string"
   }
   ```

- **Response**:
  - **Success**:

      ```json
      {
         "message": "User information updated successfully"
      }
      ```

  - **Error**:

      ```json
      {
         "error": "string"
      }
      ```

## Delete User

- **Endpoint**: `/api/user/{userId}`
- **Method**: `DELETE`
- **Description**: Deletes a specific user.
- **Response**:
  - **Success**:

      ```json
      {
         "message": "User deleted successfully"
      }
      ```

  - **Error**:

      ```json
      {
         "error": "string"
      }
      ```
