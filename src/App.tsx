import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Hyperlink from "./components/Hyperlink";

function App() {
  return (
    <>
      <div className="mx-auto max-w-4xl text-xl md:pb-10">
        <h1 className="text-center font-heading text-3xl font-semibold md:pt-4 md:text-start">
          Julius Polar
        </h1>

        <Heading title="About me" />
        <p>
          I'm a front-end developer, tech-enthusiast, and gamer. I have been
          working as a developer for over a decade, built many web-applications
          with various technologies.
        </p>

        <Heading title="Work" />
        <p>
          I'm currently working at{" "}
          <Hyperlink
            text="Uniscon GmbH"
            link="https://www.idgard.com/about/"
          />
          , developing the main web-application of the company's main product,{" "}
          <Hyperlink
            text="idgard"
            link="https://www.idgard.com/"
          />
          .
        </p>

        <Heading title="Personal projects" />
        <p>
          I also developed various web-applications on my own, check them out.
        </p>
        <p className="pt-3">
          <Hyperlink
            text="Planning Poker"
            link="https://julianelda.io/planning-poker/"
          />
        </p>
        <p>Online Scrum/Planning poker.</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Firebase, Angular, Nx, jest, Cypress, Storybook, tailwindcss,
          Fontawesome.
        </p>
        <p className="pt-4">
          <Hyperlink
            text="f4"
            link="https://julianelda.io/f4/"
          />
        </p>
        <p>
          A theorycrafting tool for Final Fantasy XIV's Black Mage. Compare
          specified rotation to standard rotation.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          React, Vite, Vitest, TypeScript, tailwindcss.
        </p>
        <p className="pt-4">
          <Hyperlink
            text="This page"
            link="https://julianelda.io/"
          />
        </p>
        <p>My homepage.</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          React, Vite, TypeScript, tailwindcss.
        </p>

        <Heading title="Contact" />
        <p>
          You can contact me via{" "}
          <Hyperlink
            text="LinkedIn"
            link="https://www.linkedin.com/in/julius-polar/"
          />
          . Check out my{" "}
          <Hyperlink
            text="GitHub"
            link="https://github.com/JulianElda"
          />{" "}
          too.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
