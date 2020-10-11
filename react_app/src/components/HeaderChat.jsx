import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DataContext from "../context/DataContext";
import ToggleButton from "@material-ui/lab/ToggleButton";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import Divider from "@material-ui/core/Divider";
import Popper from "@material-ui/core/Popper";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
//.MuiToggleButton-root.Mui-selected
const useStyles = makeStyles((theme) => ({
  ToggleButton: {
    padding: "8px",
    border: "none",
    color: "#fff",
    "&.Mui-selected": {
      background: "#fff",
      color: "#a3132b",
      "&:hover": {
        background: "#fff",
      },
    },
  },

  notificationsPop: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#424242",
    color: "#fff",
  },

  myDivider: {
    background: "#666",
    margin: "10px 0px 2px 0",
  },

  buttonNotification: {
    width: "100%",
    color: "#000000",
    background: "#7DB900",
    fontSize: "0.7em",
    marginTop: "0px",
    marginLeft: "5px",
    marginRight: "5px",
    textAlign: "center",
    lineHeight: "1.2em",
  },

  myListItem: {
    paddingBottom: "0px",
    paddingTop: "0px",
  },
}));

function HeaderChat({ currentUser }) {
  const { programmer, getDataContext, contador } = React.useContext(
    DataContext
  );

  const [selected, setSelected] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  React.useEffect(() => {
    if (programmer) {
      console.log(contador);
    }
  }, [programmer]);

  React.useEffect(() => {
    getDataContext();
  }, [getDataContext]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="uncolabChat_header">
        <div id="uncolabChat_self_container">
          <div id="uncolabChat_self_right">
            <div id="uncolabChat_notification">
              <ToggleButton
                className={classes.ToggleButton}
                value="check"
                icon
                size="large"
                selected={selected}
                onClick={handleClick}
                onChange={() => {
                  setSelected(!selected);
                }}
              >
                {selected ? (
                  <NotificationImportantIcon />
                ) : (
                  <NotificationsNoneIcon />
                )}
              </ToggleButton>
              <Popper id={id} open={open} anchorEl={anchorEl}>
                <List className={classes.notificationsPop}>
                  <ListItem className={classes.myListItem}>
                    <ListItemText
                      className={classes.myListItemText}
                      primary="Evalúa a un compañero"
                      secondary="Las criticas nos ayudan a ser mejores."
                    />
                  </ListItem>
                  <ListItem className={classes.myListItem}>
                    <Button
                      className={classes.buttonNotification}
                      variant="contained"
                      href="#contained-buttons"
                      startIcon={<AssignmentIcon />}
                    >
                      Evaluar un compañero
                    </Button>
                  </ListItem>
                  <Divider
                    component="li"
                    variant="middle"
                    className={classes.myDivider}
                  />
                  <ListItem className={classes.myListItem}>
                    <ListItemText
                      className={classes.myListItemText}
                      primary="¡Felicitaciones!"
                      secondary="Eres un programador, ya puedes ayudar a tus compañeros a subir de nivel. Antes de ayudar debes evaluar la colaboración recibida."
                    />
                  </ListItem>
                  <ListItem className={classes.myListItem}>
                    <Button
                      className={classes.buttonNotification}
                      variant="contained"
                      href="#contained-buttons"
                      startIcon={<AssignmentIcon />}
                    >
                      Evaluar colaboración
                    </Button>

                    <Button
                      className={classes.buttonNotification}
                      variant="contained"
                      href="#contained-buttons"
                      size="small"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Ayudar a un novato
                    </Button>
                  </ListItem>
                </List>
              </Popper>
            </div>
          </div>
          <div id="uncolabChat_self_left">
            <div id="uncolabChat_self">
              <span className="uncolabChat_userscontentavatar">
                <img
                  className="uncolabChat_userscontentavatarimage"
                  src="//fast.cometondemand.net/images/noavatar.png"
                  alt="imagen avatar"
                />
              </span>
              <div id="uncolabChat_selfDetails">
                <div className="uncolabChat_userdisplayname">{currentUser}</div>
                <span className="uncolabChat_userscontentdot uncolabChat_available"></span>
                <div className="selfstatus uncolabChat_userdisplaystatus">
                  I'm online
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderChat;
