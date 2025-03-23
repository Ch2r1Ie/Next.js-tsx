import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Inbox,
  BellRing,
  icons,
  Cookie,
  MessageSquare,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

interface SideBarItem {
  link: string;
  icon: any;
  text: string;
}

interface SideBarItems {
  group: string;
  items: SideBarItem[];
}

interface SideBar {
  menuList: SideBarItems[];
}

export function SideBarCommand() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing",
        },

        {
          link: "/",
          icon: <BellRing />,
          text: "Notification",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icons: <Settings />,
          text: "General Setting",
        },
        {
          link: "/",
          icons: <Cookie />,
          text: "Privacy",
        },
        {
          link: "/",
          icons: <MessageSquare />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <Command>
      <CommandList>
        {menuList.map((menu: any, key: number) => (
          <CommandGroup key={key} heading={menu.group}>
            {menu.items.map((option: any, optionKey: number) => (
              <CommandItem key={optionKey} className="glex gap-2">
                {option.icon}
                {option.text}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );
}
