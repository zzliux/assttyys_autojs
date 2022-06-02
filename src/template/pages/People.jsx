import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function NestedList() {
  return (
    <List>
      <ListItemButton>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
    </List>
  );
}
