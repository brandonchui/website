export default function AboutMe() {
  const name: string = 'Brandon';

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* hero image */}
      <div className="flex justify-center mb-8">
        <img
          src="/ProfilePic.png"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
        />
      </div>

      {/* intro */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Hey, I'm {name}!</h2>
        <p className="text-lg">
          I'm a Computer Science student at the University of Southern
          California. I'm always looking to pick up new skills, whether it’s
          coding or even dabbling in some art. I enjoy working with others and
          thrive in a team setting. When I’m not coding, I love to travel and
          explore some off the beaten path destination around the world!
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
          <a
            href="https://drive.google.com/file/d/1RW7osN100mVK6ys0yVAtFDX2L275ogGD/view?usp=sharing"
            className="text-blue-500 hover:underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            résumé (google drive).
          </a>
        </p>
      </section>
    </div>
  );
}
