export const navbarData = {
  navbarMenu: [
    {
      title: "Home",
      url: "#",
      active: true,
      children: [
        {
          title: "Home Main",
          url: "/",
          children: [
            { title: "Main", url: "/home-3" },
            { title: "Modern", url: "/home-2ds" },
          ],
        },
        { title: "Home Modern", url: "/home-2" },
        {
          title: "Home Classic",
          url: "#",
          children: [
            { title: "Main", url: "/home-2" },
            { title: "Modern", url: "/home-2ds" },
          ],
        },
      ],
    },
    { title: "Contact", url: "/contact" },
  ],
};
