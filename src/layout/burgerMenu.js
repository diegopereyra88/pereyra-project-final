import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BrushIcon from "@material-ui/icons/Brush";
import GamepadIcon from "@material-ui/icons/Gamepad";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import CreateIcon from "@material-ui/icons/Create";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.secondary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="black"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <BrushIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="ART" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <GamepadIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="GAMING" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="DISIGN" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DirectionsRunIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="ANIMATION" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <MusicNoteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="MUSIC" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <VideogameAssetIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="GAME DESIGN" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
