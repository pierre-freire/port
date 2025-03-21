function ProjectCard({ title, description, tags, imageUrl, projectUrl = "#" }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-sm">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl || "https://placehold.co/600x400"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-gray-700 p-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-700 px-3 py-1 text-sm font-medium text-gray-300"
          >
            {tag}
          </span>
        ))}
        <a
          href={projectUrl}
          className="ml-auto text-sm font-medium text-blue-400 flex items-center hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
