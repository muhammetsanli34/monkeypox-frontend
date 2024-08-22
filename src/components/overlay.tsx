export default function Overlay({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: {
    link: string;
    text: string;
  }[];
}) {
  return (
    <div
      style={{
        backgroundImage: "url(/symptoms_overlay.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "300px",
      }}
      className="flex items-center"
    >
      <div
        className="container
    mx-auto
    flex flex-col
    "
      >
        <h3
          className="text-4xl font-bold text-white text-left
        ml-6

      py-8"
        >
          {title}
        </h3>

        <ol
          className="flex text-gray-200 text-lg
            ml-6
            "
        >
          {breadcrumb.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="hover:text-blue-300">
                {item.text}
                {index < breadcrumb.length - 1 && (
                  <span className="mx-2">/</span>
                )}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
