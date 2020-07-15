import React from "react";
import ProfileHeader from "../profile/ProfileHeader";
import { getSiteLayout } from "./SiteLayout";

const ProfileLayout: React.FC = ({ children }) => {
  return (
    <>
      <ProfileHeader />
      {children}
    </>
  );
};

export const getLayout = (page: any) =>
  getSiteLayout(<ProfileLayout>{page}</ProfileLayout>);

export default ProfileLayout;
