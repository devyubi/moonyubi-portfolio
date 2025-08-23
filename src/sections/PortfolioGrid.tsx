import { portfolioProjects } from './portfolioProjects';

const PortfolioGrid = () => {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-700">
      {portfolioProjects.map(project => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer" // 보안상 꼭 추가 해야함
          className=" bg-gray-50 border rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PortfolioGrid;
