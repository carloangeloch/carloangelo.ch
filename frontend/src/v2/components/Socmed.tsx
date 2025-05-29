const Socmed = () => {
  const socmedLinks = [
    {
      name: "Behance",
      url: "https://www.behance.net/carloangeloch",
      image:
        "https://www.dropbox.com/scl/fi/w7g8pw87uc940cefca3et/behance.svg?rlkey=yxazzsejo9ymrb6g81zoz6ci9&st=dkp0qkdr&dl=0",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      image:
        "https://www.dropbox.com/scl/fi/es6hidytt8u0o7lfe7nmj/facebook.svg?rlkey=8k92mublmg0w046gz6oaoiqss&st=cphjt75p&dl=0",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/carloangelo.ch",
      image:
        "https://www.dropbox.com/scl/fi/ihdfo7j6dylzswbdoer41/instagram.svg?rlkey=5gvhfg53yupqelmi5hrwidf0f&st=mvgr187a&dl=0",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/carlo-angelo-hilaus-13b972173",
      image:
        "https://www.dropbox.com/scl/fi/32w2c4kbkoawkxd90zcam/linkedin.svg?rlkey=dee6o0gnwm66edaad2fo6ouz4&st=qkjo8jfx&dl=0",
    },
  ];

  return (
    <>
      {socmedLinks.map((s) => {
        return (
          <div key={s.name}>
            <a href={s.url} target="_blank" rel="noreferrer">
              <img
                src={String(s.image)
                  .replace("www.dropbox", "dl.dropboxusercontent")
                  .replace("&dl=0", "")}
                alt={String(s.name).toLowerCase()}
                className="w-8 h-8 text-brand-d hover:-translate-y-2 duration-300 ease-in-out"
              />
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Socmed;
