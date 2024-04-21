import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const agencyId = await verifyAndAcceptInvitation();
  console.log(agencyId);
  const user = await getAuthUserDetails();
  
  return (
    <div>Agency</div>
  )
}

export default Page;