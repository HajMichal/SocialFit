import { House, Plus, Users } from "lucide-react";
import React, { memo } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

const routes = {
  home: "/home",
  friends: "/friends",
};

export const Navbar = memo(function Navbar() {
  let navigate = useNavigate();
  let location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  return (
    <div className="w-full h-[67px] border-t-[0.5px] border-grey border-opacity-25 bg-white fixed bottom-0">
      <div className="flex justify-evenly items-center h-full">
        <Icon
          onClick={() => navigate(routes.home)}
          isActive={isActive(routes.home)}
        >
          <House size={32} />
        </Icon>

        <Icon className="bg-dark rounded-xl -mt-14">
          <Plus size={34} color="white" />
        </Icon>

        <Icon
          onClick={() => navigate(routes.friends)}
          isActive={isActive(routes.friends)}
        >
          <Users size={32} />
        </Icon>
      </div>
    </div>
  );
});

const Icon = styled.div<{
  isActive?: boolean;
}>`
  padding: 6px;
  color: ${(props) => (props.isActive ? "#02CF8A" : "#212121")};
`;
