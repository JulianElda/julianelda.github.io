import { Footer, useDarkMode, Hyperlink } from "@julianelda/scratchpad";
import Heading from "./components/Heading";

function App() {
  const { isDarkTheme, toggleDarkTheme } = useDarkMode();

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
            title="Brainlab"
            href="https://www.brainlab.com/"
          />{" "}
          as a software engineer.
        </p>

        <Heading title="Personal projects" />
        <p>
          I also developed various web-applications on my own, check them out.
        </p>
        <p className="pt-4">
          <Hyperlink
            title="Planning Poker"
            href="https://julianelda.io/planning-poker/"
          />
        </p>
        <p>Online Scrum/Planning poker.</p>
        <p className="pt-4">
          <Hyperlink
            title="meter"
            href="https://meter-nine.vercel.app/"
          />
        </p>
        <p>
          Tools and converters. Convert various units like time, weight, volume.
        </p>
        <p className="pt-4">
          <Hyperlink
            title="f4"
            href="https://julianelda.io/f4/"
          />
        </p>
        <p>
          A theorycrafting tool for Final Fantasy XIV's Black Mage. Compare
          specified rotation to standard rotation.
        </p>
        <p className="pt-4">
          <Hyperlink
            title="This page"
            href="https://julianelda.io/"
          />
        </p>
        <p>My homepage.</p>
        <Heading title="Contact" />
        <p>
          You can contact me via{" "}
          <Hyperlink
            title="LinkedIn"
            href="https://www.linkedin.com/in/julius-polar/"
          />
          . Check out my{" "}
          <Hyperlink
            title="GitHub"
            href="https://github.com/JulianElda"
          />{" "}
          too.
        </p>
      </div>
      <Footer
        label="Julius Polar@GitHub"
        link="https://github.com/JulianElda/julianelda.github.io"
        darkTheme={isDarkTheme}
        toggleDarkTheme={toggleDarkTheme}
      />
    </>
  );
}

export default App;
