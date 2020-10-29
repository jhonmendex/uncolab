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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

  buttonDialog: {
    textAlign: "center",
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

function HeaderChat({ currentUser, taskState }) {
  const { programmer, getDataContext, evaluate } = React.useContext(
    DataContext
  );

  const [selected, setSelected] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openDialog, setOpenDialog] = React.useState(false);

  const inputRef = React.useRef(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const btnCollaboration = window.parent.document.getElementById(
    "bell-notification"
  );

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  if (btnCollaboration) {
    if (open) {
      btnCollaboration.style.display = "block";
    } else {
      btnCollaboration.style.display = "none";
    }
  }
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  React.useEffect(() => {
    if (evaluate) {
      inputRef.current.click();
    }
  }, [evaluate]);

  React.useEffect(() => {
    if (programmer === "true") {
      inputRef.current.click();
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
                ref={inputRef}
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
                  {!evaluate && (
                    <ListItem className={classes.myListItem}>
                      <ListItemText
                        className={classes.myListItemText}
                        primary="Sin notificaciones"
                        secondary="..."
                      />
                    </ListItem>
                  )}
                  {evaluate && taskState == "true" && (
                    <>
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
                          href="https://docs.google.com/forms/d/1XbZ_OjwgTiDayG0GqwLpG51K8LPgHf35B_Dq8XPWT-E/edit?usp=sharing"
                          startIcon={<AssignmentIcon />}
                          rel="noopener"
                          target="_blank"
                        >
                          Evaluar un compañero novato
                        </Button>
                      </ListItem>
                    </>
                  )}
                  {evaluate && taskState === "false" && (
                    <>
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
                          target="_blank"
                          rel="noopener"
                          href="https://docs.google.com/forms/d/1LzpWxblYPxJElpFKsfn0m8A_pnzc71oL9NxdKcv0eCk/edit?usp=sharing"
                          startIcon={<AssignmentIcon />}
                        >
                          Evalúa la colaboración del programador
                        </Button>
                      </ListItem>
                    </>
                  )}
                  <Divider
                    component="li"
                    variant="middle"
                    className={classes.myDivider}
                  />
                  {programmer === "true" && taskState === "false" && (
                    <>
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
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                          onClick={handleClickOpen}
                        >
                          Ayudar a un novato
                        </Button>
                      </ListItem>
                    </>
                  )}
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
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"¡Estás a un paso de ayudar!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Nos gustaría confirmar si ya hiciste la evaluación del programador
            que te ayudó. Una vez confirmes podrás ayudar tu también.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link
            to={{
              pathname: `/un_colab/group-5/triangle`,
            }}
          >
            <Button
              className={classes.buttonDialog}
              href="/chat/true"
              onClick={handleClose}
              color="primary"
            >
              Ya hice la evaluación y quiero colaborar
            </Button>
          </Link>

          <Button
            className={classes.buttonDialog}
            onClick={handleClose}
            color="primary"
          >
            Deseo quedarme aquí y recibir más ayuda
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default HeaderChat;
