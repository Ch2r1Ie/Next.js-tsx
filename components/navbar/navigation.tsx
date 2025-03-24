import * as React from "react";
import { Command, CommandItem, CommandList, CommandGroup } from "../ui/command";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export function NavigationMenuDemo() {
  const components = [
    { title: "Calculator-1", description: "First calculator description" },
    { title: "Calculator-2", description: "Second calculator description" },
    { title: "Calculator-3", description: "Third calculator description" },
    { title: "Calculator-4", description: "Fourth calculator description" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Command>
              <CommandList className="flex justify-center items-center">
                <CommandGroup className="flex flex-col">
                  <div>
                    {components.map((component) => (
                      <CommandItem
                        key={component.title}
                        className="block bg-red-600 p-2"
                      >
                        {component.title}
                      </CommandItem>
                    ))}
                  </div>
                </CommandGroup>
              </CommandList>
            </Command>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Command>
              <CommandList className="flex justify-center items-center">
                <CommandGroup>
                  <div className="flex flex-col gap-2">
                    {components.map((component) => (
                      <CommandItem key={component.title} className="block">
                        {component.title}
                      </CommandItem>
                    ))}
                  </div>
                </CommandGroup>
              </CommandList>
            </Command>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Command>
              <CommandList className="flex justify-center items-center">
                <CommandGroup>
                  <div className="flex flex-col gap-2">
                    {components.map((component) => (
                      <CommandItem key={component.title} className="block">
                        {component.title}
                      </CommandItem>
                    ))}
                  </div>
                </CommandGroup>
              </CommandList>
            </Command>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Documents</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Command>
              <CommandList className="flex justify-center items-center">
                <CommandGroup>
                  <div className="flex flex-col gap-2">
                    {components.map((component) => (
                      <CommandItem key={component.title} className="block">
                        {component.title}
                      </CommandItem>
                    ))}
                  </div>
                </CommandGroup>
              </CommandList>
            </Command>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
