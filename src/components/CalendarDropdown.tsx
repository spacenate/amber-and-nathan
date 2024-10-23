"use client";
import { Menu } from "@headlessui/react";
import { RiArrowDropdownLine } from "./RiArrowDropdownLine";

export default function CalendarDropdown() {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        <Menu.Button className="relative card-btn">
          📅
          <span className="absolute right-0 -mr-2 text-sunset">
            <RiArrowDropdownLine className="rotate-180" />
          </span>
        </Menu.Button>

        <Menu.Items className="absolute left-0 -top-24 mt-2 w-48 fw-bold bg-ivory/80 rounded-md shadow-lg backdrop-blur-md focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Amber+%26+Nathan's+Wedding&dates=20250621T230000Z/20250622T050000Z&details=Celebrate+Amber+and+Nathan's+wedding+at+Maple+Falls,+WA!&location=Maple+Falls,+WA"
                  target="_blank"
                  rel="noferrer"
                  className={`${
                    active ? "bg-sage/40 text-white" : "text-sage"
                  } block px-4 py-2 text-sm`}
                >
                  Add to Google Calendar
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="wedding.ics"
                  download="Amber_and_Nathan_Wedding.ics"
                  className={`${
                    active ? "bg-sage/40 text-white" : "text-sage"
                  } block px-4 py-2 text-sm`}
                >
                  Add to iCal/Outlook
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
