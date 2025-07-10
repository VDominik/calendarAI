export default function IntegrationSection() {
  const integrations = [
    { name: "Google Calendar", icon: "/google-calendar.png" },
    { name: "Microsoft Outlook", icon: "/ms-outlook2.png" },
    { name: "Notion", icon: "/notion.png" },
  ];

  return (
    <section className="py-24 px-4 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl sm:text-6xl font-bold mb-4">
          Works with your <span className="text-indigo-500">existing tools</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
          Noltra integrates seamlessly with the productivity tools you already use.
          No need to change your workflow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-12">
          {integrations.map((tool) => (
            <div
              key={tool.name}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center w-48 h-48 mx-auto group"
            >
              <div className="group">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-20 h-20 mb-4 transition-transform duration-200 ease-in-out group-hover:scale-110"
                />
              </div>
              <p className="font-medium text-gray-800">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
              <p className="text-md text-gray-500 max-w-2xl mx-auto mb-16">
    More integrations coming soon
        </p>
    </section>
  );
}