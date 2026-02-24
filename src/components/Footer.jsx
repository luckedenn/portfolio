const footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/luckedenn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/lucas_chndra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=lucaschandra18@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-mail-line ri-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lucaschandra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-box-line ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default footer;
