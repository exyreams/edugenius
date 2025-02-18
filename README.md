# EduGenius: Your Interactive Learning Companion
<!-- Badges -->
<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript"></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000.svg?style=flat&logo=Next.js&logoColor=white" alt="Next.js"></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=flat&logo=Tailwind-CSS&logoColor=white" alt="Tailwind CSS"></a>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/Vercel-000000.svg?style=flat&logo=Vercel&logoColor=white" alt="Vercel"></a>
</p>
EduGenius is an interactive web application designed to help students learn and practice Mathematics and Physics concepts.  It provides a comprehensive, engaging, and personalized learning experience, leveraging AI-powered features to make education more effective.

## Features

*   **Interactive Learning Modules:** Explore key concepts in Mathematics and Physics through interactive lessons, visualizations, and practice exercises.
*   **Formula Solver:** Upload images of mathematical or physics problems and receive step-by-step solutions, helping you understand the problem-solving process.
*   **Customizable Quizzes:** Generate quizzes based on specific topics, difficulty levels, and even by uploading your own documents (PDF or TXT).
*   **Challenges:** Tackle a curated set of challenge problems that push your understanding and problem-solving skills.
*   **Formula Reference:** Access a categorized library of essential formulas in Mathematics and Physics.
*   **AI-Powered Assistance (Planned):**  Future development includes integrated AI tutoring features for personalized guidance and feedback.
*   **User Authentication:** Secure user accounts with GitHub and Discord integration via NextAuth.
*   **Responsive Design:**  A user-friendly interface that adapts to different screen sizes (desktops, tablets, and mobile devices).
*   **Dark Mode Support:** Choose between light and dark themes for optimal viewing comfort.
*   **Extensible Architecture:** Built with Next.js and a modular design, making it easy to add new subjects, topics, and features.
*   **LaTeX Support:** Mathematical formulas and equations are beautifully rendered using LaTeX for clarity and precision.
*   **Export Solutions (PDF/Images):** Download solutions as PDFs or images for offline access and sharing.

## Technologies Used

*   **Frontend:**
    *   [Next.js](https://nextjs.org/): A React framework for building server-rendered and statically generated web applications.
    *   [React](https://reactjs.org/): A JavaScript library for building user interfaces.
    *   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
    *   [Lucide React](https://lucide.dev/):  A library of beautifully designed, accessible, open-source icons.
    *   [React Icons](https://react-icons.github.io/react-icons/): A collection of popular icons as React components.
    *   [Framer Motion](https://www.framer.com/motion/): A production-ready motion library for React.
    *   [Katex](https://katex.org/): A fast, easy-to-use JavaScript library for TeX math rendering on the web.
    *   [Chart.js](https://www.chartjs.org/):  A simple yet flexible JavaScript charting library for designers & developers.
    *   [Sonner](https://sonner.emilkowal.ski/): An opinionated toast component for React.
    *   [React Use](https://github.com/streamich/react-use): A collection of essential React Hooks.
    *   [jsPDF](https://github.com/MrRio/jsPDF): A library for generating PDF documents.
    *   [html2canvas](https://html2canvas.hertzen.com/): A JavaScript library for capturing screenshots from web pages.
    *   [jszip](https://stuk.github.io/jszip/): A JavaScript library for creating, reading, and editing .zip files.

*   **Backend:**
    *   [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction):  Serverless functions for handling API requests.
    *   [Google Generative AI](https://ai.google.dev/): Used for generating quiz questions and potentially future AI tutoring features.
    *   [NextAuth.js](https://next-auth.js.org/): Authentication for Next.js applications, supporting providers like GitHub and Discord.

*   **Project Management:**
    *   [Zod](https://zod.dev/): TypeScript-first schema validation with static type inference.

*   **Development Tools:**
    *   [TypeScript](https://www.typescriptlang.org/):  A superset of JavaScript that adds static typing.
    *   [ESLint](https://eslint.org/): A pluggable and configurable linter tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
    *   [Prettier](https://prettier.io/): An opinionated code formatter.

## Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/exyreams/edugenius.git
    cd edugenius
    ```

2.  **Install dependencies:**

    ```bash
    npm install --legacy-peer-deps
    ```

    *Note: `--legacy-peer-deps` is used due to potential compatibility issues with some dependencies.  If you encounter problems, you might be able to install without this flag, or investigate the specific dependency conflicts.*

3.  **Set up environment variables:**

    Create a `.env.local` file in the root directory of the project and add the following environment variables:

    ```
    GITHUB_ID=your_github_id
    GITHUB_SECRET=your_github_secret
    DISCORD_CLIENT_ID=your_discord_client_id
    DISCORD_CLIENT_SECRET=your_discord_client_secret
    NEXTAUTH_SECRET=your_nextauth_secret
    GEMINI_API_KEY=your_gemini_api_key
    NEXTAUTH_URL=http://localhost:3000
    ```

    *   **`GITHUB_ID` and `GITHUB_SECRET`:**  Obtain these from your GitHub OAuth application settings. (See [GitHub OAuth documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)).
    *   **`DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET`:** Obtain these from your Discord Developer Portal. (See [Discord Developer documentation](https://discord.com/developers/docs/intro)).
    *   **`NEXTAUTH_SECRET`:**  A secret string used by NextAuth.js for security. You can generate a strong secret using `openssl rand -base64 32` in your terminal.
    *   **`GEMINI_API_KEY`:** Obtain this from the Google Cloud Console after enabling the Gemini API. (See [Google Generative AI documentation](https://ai.google.dev/)).
    *   **`NEXTAUTH_URL`**: Set this to your development URL (e.g., `http://localhost:3000`).

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be accessible at `http://localhost:3000`.

## Project Structure

The project follows a standard Next.js application structure with some key directories:

*   **`app/`:** Contains the main application logic, including pages, API routes, and components.
    *   **`api/`:**  API routes (serverless functions) for handling backend logic.
        *   **`auth/[...nextauth]/route.ts`:** NextAuth.js configuration for handling authentication.
        *   **`gemini/`:**  API routes for interacting with the Google Generative AI model.  This is organized by subject and functionality (e.g., `mathematics/challenges`).
    *   **`chemistry/`:**  Pages related to Chemistry (currently a placeholder).
    *   **`mathematics/`:**  Pages related to Mathematics, further organized by concepts and features.
        *   **`concepts/`:** Pages for exploring mathematical concepts.
            *   **`foundational/`:** Foundational mathematics topics (e.g., area & perimeter, fractions).
            *   **`intermediate-advanced/`:**  Intermediate and advanced mathematics topics (e.g., algebra, calculus, discrete math, Fourier analysis, geometry, Laplace transforms).
    *   **`physics/`:** Pages related to Physics, organized similarly to Mathematics.
    *   **`quiz/`:** Pages for the quiz functionality.
    *   **`solve/`:** Pages for the problem-solving features.
    *   **`layout.tsx`:**  Defines the overall layout of the application.
    *   **`page.tsx`:**  The main landing page of the application.
*   **`components/`:**  Reusable React components.
    *   **`quiz/`:**  Components specific to the quiz functionality (e.g., `Results`, `Loader`).
    *   **`Breadcrumb.tsx`:**  A breadcrumb navigation component.
    *   **`ColorToggle.tsx`:**  A component for toggling between light and dark themes.
    *   **`Footer.tsx`:**  The application footer.
    *   **`Navbar.tsx`:**  The application navigation bar.
    *   **`SessionProvider.tsx`:**  Provides NextAuth.js session context.
    *   **`ThemeProvider.tsx`:**  Provides theme support using `next-themes`.
*   **`public/`:**  Static assets, such as images.
*   **`styles/`:**  Global CSS styles.
*   **`utils/`** Contains utility files and color constants for theme implementation.

## API Routes

The `app/api` directory contains serverless functions that handle specific tasks:

*   **`/api/auth/[...nextauth]/route.ts`:**  Configures NextAuth.js for authentication with GitHub and Discord.  Handles sign-in, sign-out, and session management.
*   **`/api/gemini/mathematics/challenges`:** Generates a mathematics challenge quiz using the Google Generative AI model.  The request body should include:
    *   `prompt`: (string) The user's input prompt.
    *   `numQuestions`: (number) The number of questions to generate.
    *   `topic`: (string) The topic of the quiz (e.g., "algebra", "calculus").
    *   `difficulty`: (string) The difficulty level ("basic", "intermediate", "advanced").
*   **`/api/gemini/mathematics/formulas`:** Generates a mathematics formula quiz using the Google Generative AI model.  The request body should include the same parameters as `challenges`.
*   **`/api/gemini/mathematics/from-files`:** Generates a quiz from text content provided in a file. The request body includes:
    * `fileContent`: (string) The text content from the uploaded file.
    * `numQuestions`: (number) The number of questions.
*   **`/api/gemini/mathematics/solve`:** Solves mathematics problems provided in image files. It uses the Gemini model to generate step-by-step solutions.
    *   `files`: One or more image files (PNG, JPEG, WEBP, HEIC, HEIF).
*   **`/api/gemini/physics/challenges`:** Similar to the mathematics challenges endpoint, but for physics.
*   **`/api/gemini/physics/from-files`:** Similar to the mathematics from-files endpoint, but for physics.
*   **`/api/gemini/physics/solve`:** Similar to the mathematics solve endpoint, but for physics.

The API routes are designed to be modular and easily extensible to support additional subjects and features.  Error handling is implemented using `try...catch` blocks and appropriate HTTP status codes.  Input validation is performed using the `zod` library.

## Contributing

Contributions are welcome!  Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3.  Commit your changes: `git commit -m "Add: My awesome feature"`
4.  Push to the branch: `git push origin feature/your-feature-name`
5.  Submit a pull request.

Please ensure your code adheres to the existing coding style and includes appropriate documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or contributions, please contact the project maintainers exyreams@gmail.com.