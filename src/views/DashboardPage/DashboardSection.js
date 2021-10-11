import React from "react";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Tabs from "components/CustomTabs/CustomTabs.js";
import { Receipt } from "@material-ui/icons";
import SubTab from "./Tabs/SubTab";

export default function DashboardSection() {
  return (
    <Tabs
      headerColor="primary"
      tabs={[
        {
          tabName: "Subscription",
          tabIcon: AccessTime,
          tabContent: <SubTab />,
        },
        {
          tabName: "Receipt",
          tabIcon: Receipt,
          tabContent: <h3>receipt</h3>,
        },
        {
          tabName: "Other title",
          tabIcon: Cloud,
          tabContent: <h1>Other content</h1>,
        },
      ]}
    />
  );
}
