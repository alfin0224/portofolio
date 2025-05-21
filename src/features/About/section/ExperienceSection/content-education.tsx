export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Informatics Engineering
        <span className="text-base text-accent">
          {" "}
          @
          <a
            href="https://informatics.uii.ac.id/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Indonesian Islamic University
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2014 - Dec 2018</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          Activities and Associations: Laboratory Assistant, UKM Musik
          Informatika, and Event Committee.
        </li>
        <li>
          Graduated with a final thesis building INNOVATION OF MANAGEMENT
          INFORMATION SYSTEM FOR CHILD CANCER PATIENT SHELTER HOUSE BUAH HATI - PHP LARAVEL-WEB BASED APPLICATION.
        </li>
      </ul>
    </div>
  );
};
