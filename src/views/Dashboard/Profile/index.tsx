import React from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";

// Assets
import avatar4 from "@assets/img/avatars/avatar4.png";
import ProfileBgImage from "@assets/img/ProfileBackground.png";

// Custom components
import Conversations from "./components/Conversations";
import Header from "./components/Header";
import PlatformSettings from "./components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";

function Profile() {
  // Chakra color mode
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)",
  );

  return (
    <Flex direction='column'>
      <Header
        avatarImage={avatar4}
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        email="esthera@simmmple.com"
        name="Esthera Jackson"
        tabs={[
          {
            name: "OVERVIEW",
            icon: <FaCube />,
          },
          {
            name: "TEAMS",
            icon: <IoDocumentsSharp />,
          },
          {
            name: "PROJECTS",
            icon: <FaPenFancy />,
          },
        ]}
      />
      <Grid gap='22px' templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }}>
        <PlatformSettings
          subtitle1="ACCOUNT"
          subtitle2="APPLICATION"
          title="Platform Settings"
        />
        <ProfileInformation
          description="Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
          email="esthera@simmmple.com"
          location="United States"
          mobile="(44) 123 1234 123"
          name="Esthera Jackson"
          title="Profile Information"
        />
        <Conversations title="Conversations" />
      </Grid>
      <Projects description="Architects design houses" title="Projects" />
    </Flex>
  );
}

export default Profile;
