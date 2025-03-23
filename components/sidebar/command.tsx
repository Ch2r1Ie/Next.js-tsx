import {
  CreditCard,
  Settings,
  User,
  Inbox,
  BellRing,
  Cookie,
  MessageSquare,
} from "lucide-react";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
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
          icon: <Settings />,
          text: "General Setting",
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <div className="grow">
      <Command>
        <CommandList>
          {menuList.map((sideBarItems: SideBarItems, key: number) => (
            <CommandGroup key={key} heading={sideBarItems.group}>
              {sideBarItems.items.map(
                (sideBarItem: SideBarItem, optionKey: number) => (
                  <CommandItem key={optionKey} className="glex gap-2">
                    {sideBarItem.icon}
                    {sideBarItem.text}
                  </CommandItem>
                )
              )}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  );
}
