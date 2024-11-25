"use client";

import GuestHeader from "./header/GuestHeader";
import UserHeader from "./header/UserHeader";

export default function GNB() {
  const haveJWT = false;

  return <>{haveJWT ? <UserHeader /> : <GuestHeader />}</>;
}
