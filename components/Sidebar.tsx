import { asset } from "$fresh/runtime.ts";

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
    <div id="sidebar">
      <link rel="stylesheet" href={asset("sidebar.css")} />
      <div>Front End Dev Projects</div>
      <ul>
        {menus.map((menu) => (
          <li>
            <a id={menu.href === active ? "active" : ""} href={menu.href}>
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
