export default function Projects() {
  const projectData = [
    {
      image: '/Website-1.png',
      title: 'Personal Website',
      description:
        'A simple website built using react/remix, deployed on netlify.',
      link: '/blog/2024-09-29-MakingOfThisPortfolioWebsite',
    },
    {
      image: '/Coffee-1.jpg',
      title: 'Coffee Game',
      description: 'A game inspired by overcooked, where you make beverages.',
      link: '/blog/2024-09-29-HowIMadeACoffeeShopGame',
    },
    {
      image: '/AutoGame-1.jpg',
      title: 'Autobattler Game',
      description: 'A game of survival where the battles are automatic.',
      link: '/blog/2024-09-29-MyExperienceMakingAnAutobattler',
    },
    {
      image: '/Fishing-1.jpg',
      title: 'Fishing Game',
      description: 'Get as many fish on this procedural generated island!',
      link: '/blog/2024-09-29-TheMakingOfAReplayableGame',
    },
    {
      image: '/GameEngine-1.jpg',
      title: 'Game Engine',
      description: 'An ambitious learning project to ease game development',
      link: '/blog/2024-09-29-TheEndlessTodosOfGameEngines',
      status: 'Work in Progress',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projectData.map((project, index: number) => (
          <a
            key={index}
            href={project.link}
            className="block bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h2>
              {project.status && (
                <span className="inline-block bg-cyan-500 text-white px-2 py-1 rounded-full text-xs mb-2">
                  {project.status}
                </span>
              )}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <span className="text-blue-500 dark:text-blue-400 hover:underline">
                Learn More
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
