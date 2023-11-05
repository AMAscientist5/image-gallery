// Footer component contains footer content with icons and copyright information
const Footer = () => {
  return (
    <footer className="bg-black footer items-center p-4 text-neutral-content">
      {/* Side section with logo and copyright text */}
      <aside className="items-center grid-flow-col">
        {/* Icon */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          {/* Path */}
          <path d="M22.672 15.226l-2.432 ..."></path>
        </svg>
        {/* Copyright Text */}
        <p>Copyright © 2023 - All rights reserved</p>
      </aside>
      {/* Navigation links */}
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* Icons */}
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            {/* Path */}
            <path d="M24 4.557c-.883..."></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            {/* Path */}
            <path d="M19.615 3.184c-3.604..."></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            {/* Path */}
            <path d="M9 8h-3v4h3v12h5v-12..."></path>
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
