



## Getting Started - How to Run the App

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Then, on another terminal, run"
```bash
npx prisma studio
```
In ortder to gain access to the Database

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies Used
Using Nextjs and ReactJjs to build this project, I used the following 
    -@clerk/nextjs      - for User authentication and management
    -@prisma/client     - For database access
    -axios              - for making API requests
    -moment             - for handling date and time
    -next               - for building react applications with server-side rendering
    -nextjs-toploader   - for handling the loading indicator
    -prisma             - db toolkit for typescript and node
    -react              - for building user interfaces
    -react-dom          - for working with react DOM
    -react-hot-toast    - FOR NOTIFICATIONS
    -styled-components  - FOR STYLING
    -tailwindcss        - For styling
   
  
  ## DESIGN Choices
 I chose something simple yet eye-catching. TeachMateAI is a platform designed for schools, necessitating a straightforward and easily comprehensible user interface (UI). The dashboard's design incorporates the main colors, orange and dark blue. Each task is prominently displayed on the dashboard immediately after creation.

For task management, I opted for a straightforward approach by using task statuses - completed and incomplete. Additionally, users have the option to toggle the 'Importance' of a task when creating it. To enhance usability, I implemented tabs that facilitate the filtering of tasks, providing separate views for completed, incomplete, and important tasks.
