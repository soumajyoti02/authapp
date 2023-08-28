This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# NEXT.JS BASIC CONCEPTS

1. page.js is our main Homepage in nextJS.

2. A folder is made inside the main directory and named as COMPONENTS. Inside that, LoginForm, RegistrationForm, Userinfo & Navbar is created.

3. To create Any page routes,

   - create a folder inside APP directory.
   - Rename that folder as the name of the desired page i.e. about, contact us.
   - Then make a file called page.js inside every folders.
   - Here the page routes are dashboard & register.

4. A folder is made inside App directory & named as API

   - All the API routes will be created here.
   - To create any API, make a subfolder inside this API folder.
   - Rename that folder as that desired APi like register, userExist here.
   - Inside those SubFolder, create a file named route.js.
   - All the Backend code regarding that API should be written in that folder.
   - To fetch an API, just fetch "api/api_name"
   - Inside that API, receive the request body as req.json();
   - Send response from that API as: return NextResponse.json({ message: "Your message" }, { status: 201 });

5. Make a folder named lib

   - Inside this folder, Write code for connecting with mongoDB database.
   - Use this connectmongoDB() function in every other place inside api routes.

6. Make a folder named models

   - Made all Schemas in this folder.

# Code Workflow

1. Inside main page.js, LoginForm component is called. It's our homepage.

2. Inside LoginForm.js component,

- signIn function is called inside handleSubmit. It's came from next-auth.
- For this, inside API folder, AUTH folder is present.
  All of these credential things are coming from "authOptions" function defined inside that API.
- If no error comes, then we just redirect to dashboard page by using useRouter from "next/navigation".
- If User didn't write all the fields, then a error message will be shown that all fields are necessery.
- RegisterForm link is added below that loginForm. From that user can go to registerPage to Sign Up.

3. Inside RegisterForm.js component,

- Checking that user exists or not by fetching userExist api and sending user's email as body.If any user is present with that email, That api will return that user.
- If user != null then we just return from this function displaying that error message that "User Exists"
- Then we will fetch register API and sending name, email, password as body. This API will save that user into database.

4. If response from this API is ok then user will redirected to login page by useRouter()

5. After login, user will redirected to UserInfo page,

- Here we used useSession from next-auth to get all the details of that user who is currently logged in.
- All the user information is displayed here.
