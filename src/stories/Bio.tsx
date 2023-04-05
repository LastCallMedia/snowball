interface BioProps {
  /**
   * Is this the principal call to action on the page?
   */
  palette: "default"

  // image: string
  name: string;
  title: string;
  company: string;
  bio: string;
  layout: "horizontal" | "vertical";
}

export const Bio = ({
  palette = "default",
  name,
  title,
  company,
  bio,
  layout,
  ...props
}: BioProps) => {
  return (
    <figure
      className={[
        "sb-bio-palette-default sb-bio_text-ink",
        "md:flex",
        layout === "horizontal" ? "md:flex-row md:space-x-4" : "md:flex-col",
        layout === "horizontal" ? "sb-bio-horizontal" : "sb-bio-vertical",
        "sb-bio_rounded-outside",
      ].join(" ")}
    >
      <img
        src="http://via.placeholder.com/300x300"
        width="300"
        height="300"
        alt="sample"
        className="mx-auto mb-12 sb-bio_rounded-inside"
      />
      <div className="space-y-8 bio-text">
        <div className={`space-y-2 ${layout === "horizontal" ? "text-left" : "text-center"}`}>
          <div className="text-xl">{name}</div>
          <div className="font-bold">{title}</div>
          <div className="font-bold">{company}</div>
        </div>
        <ul className={`sb-bio_text-accent flex space-x-3 list-style-none ${layout==="horizontal" ? "justify-start" : "justify-center"}`}>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="text-lg">
          <p>{bio}</p>
        </div>
      </div>
    </figure>
  );
};
