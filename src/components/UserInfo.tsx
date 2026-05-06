import { createAsync } from "@solidjs/router";
import { userQuery } from "~/utils/users";

export default function UserInfo() {
  const user = createAsync(() => userQuery());
  return (
    <>
      <img src={user()?.profilePic} alt={user()?.name} />
      <span>{user()?.name}</span>
    </>
  );
}