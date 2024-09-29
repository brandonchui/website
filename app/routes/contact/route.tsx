export default function AboutMe() {
  const name: string = 'Brandon';

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* hero image */}
      <div className="flex justify-center mb-8">
        <img
          src="/lucky.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
        />
      </div>

      {/* intro */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Hi, I'm {name}!</h2>
        <p className="text-lg">
          I am a Computer Science student at the University of Southern
          California. I’m passionate about software development, with interests
          ranging from web technologies to game development. I enjoy tackling
          all sorts of coding challenges and am always eager to learn more!
        </p>
      </section>

      {/* skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tech Skills</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>C++</li>
          <li>JavaScript / TypeScript</li>
          <li>C#</li>
          <li>HTML / CSS / Tailwind CSS</li>
          <li>Java</li>
          <li>Git</li>
        </ul>
      </section>

      {/* frameworks */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Frameworks</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>React / Remix</li>
          <li>Qt / SDL / ImGui</li>
          <li>Unity Game Engine</li>
        </ul>
      </section>

      {/* contacts */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contacts</h2>
        <p className="text-lg">
          Check out my
          <a href="/projects" className="text-blue-500 hover:underline ml-1">
            projects
          </a>{' '}
          or my{' '}
          <a
            href="https://www.linkedin.com/in/branchui/"
            className="text-blue-500 hover:underline"
          >
            linkedin
          </a>{' '}
          or my
          <a href="/resume" className="text-blue-500 hover:underline ml-1">
            résumé.
          </a>
        </p>
      </section>
    </div>
  );
}
