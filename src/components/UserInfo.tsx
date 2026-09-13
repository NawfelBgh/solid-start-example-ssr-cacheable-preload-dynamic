import { createMemo } from "solid-js";
import { userQuery } from "~/utils/users";

export default function UserInfo() {
  const user = createMemo(() => userQuery(), { ssrSource: 'client' });
  return (
    <>
      <img src={user()?.profilePic} alt={user()?.name} />
      <span>{user()?.name}</span>
    </>
  );
}