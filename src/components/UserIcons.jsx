import React from "react";

const users = [
  {
    id: 1,
    name: "User 1",
    avatar: "https://avatar.iran.liara.run/public/girl",
  },
  {
    id: 2,
    name: "User 2",
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    id: 3,
    name: "User 3",
    avatar: "https://avatar.iran.liara.run/public/boy",
  },
];

const UserIcons = () => {
  return (
    <div className="relative px-4 pt-0.5 flex flex-row items-start space-x-[-4px]">
      {users.map((user, index) => (
        <img
          key={user.id}
          src={user.avatar}
          alt={user.name}
          className="w-7 h-7 rounded-full border-2 border-[#202020]"
          style={{
            zIndex: users.length - index, // ensure correct stacking order
          }}
        />
      ))}
    </div>
  );
};

export default UserIcons;
