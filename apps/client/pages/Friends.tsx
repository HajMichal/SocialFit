import React, { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { Navbar } from "../components/Navbar";
import { CenterContent, PageContainer } from "../components/styled/Containers";
import { FriendsList } from "../components/FriendsList";

function Friends() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <PageContainer>
      <CenterContent className="mt-10">
        <div
          className="w-[85%] border border-grey rounded-2xl transition duration-150 flex items-center h-10 text-grey font-montserrat text-sm group focus-within:outline focus-within:outline-[1.5px] outline-brand focus-within:border-brand"
          onClick={() => inputRef.current?.focus()}
        >
          <MagnifyingGlass
            size={22}
            weight="bold"
            className="mx-2 group-focus-within:text-brand transition duration-150"
          />
          <input
            ref={inputRef}
            placeholder="Search friends"
            className="bg-background w-full h-full rounded-2xl focus:outline-none"
          />
        </div>
      </CenterContent>

      <FriendsList />
      <Navbar />
    </PageContainer>
  );
}
export default Friends;
