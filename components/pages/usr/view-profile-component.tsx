import React from "react";
import AboutProfile from "./ui/about-profile";
import BackgroundProfile from "./ui/background-profile";
function ViewAsProfile() {
  return (
    <div className="mt-24 container mb-10">
      <div className="grid grid-cols-12 gap-5 relative">
        <AboutProfile />
        <BackgroundProfile />
      </div>
    </div>
  );
}

export default ViewAsProfile;
