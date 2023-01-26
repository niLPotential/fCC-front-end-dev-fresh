type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Random Quote Machine", href: "/random-quote-machine" },
    { name: "Markdown Previewer", href: "/markdown-previewer" },
    { name: "Drum Machine", href: "/drum-machine" },
    { name: "JavaScript Calculator", href: "/calculator" },
    { name: "25 + 5 Clock", href: "/clock" },
  ];

  return (
    <div class="h-full bg-yellow-200 fixed">
      <div>
        <div>
          Front End Dev Projects
        </div>
      </div>
      <ul>
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={menu.href === active ? "font-bold" : ""}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
