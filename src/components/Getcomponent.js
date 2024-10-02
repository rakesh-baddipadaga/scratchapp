import React from "react";
import Move from "./motions/move";
import TurnAntiClockwise from "./motions/turnanti";
import TurnClockwise from "./motions/turnclock";
import GotoXY from "./motions/goto";
import SayMessage from "./contorollooks/saymessage";
import SayMessageWithTimer from "./contorollooks/saymessagetimer";
import Size from "./contorollooks/size";
import Show from "./contorollooks/show";
import Hide from "./contorollooks/hide";
import Wait from "./contorollooks/wait";
import Repeat from "./contorollooks/repeat";
import HideMessage from "./contorollooks/hidemessage";
import MoveY from "./motions/movey";
import BroadcastMessage from "./contorollooks/broadcast";
import Think from "./contorollooks/think";
import ThinkWithTimer from "./contorollooks/thinktimer";


export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE_Y":
      return <MoveY comp_id={id} />;
    case "MOVE":
      return <Move comp_id={id} />;

    case "TURN_CLOCKWISE":
      return <TurnClockwise comp_id={id} />;

    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} />;

    case "GOTO_XY":
      return <GotoXY comp_id={id} />;

    case "SAY_MESSAGE":
      return <SayMessage comp_id={id} />;

    case "SAY_MESSAGE_WITH_TIMER":
      return <SayMessageWithTimer comp_id={id} />;

    case "SIZE":
      return <Size comp_id={id} />;

    case "SHOW":
      return <Show comp_id={id} />;

    case "HIDE":
      return <Hide comp_id={id} />;

    case "BROADCAST":
      return <BroadcastMessage comp_id={id} />;

    case "WAIT":
      return <Wait comp_id={id} />;

    case "REPEAT":
      return <Repeat comp_id={id} />;

    case "HIDE_MESSAGE":
      return <HideMessage comp_id={id} />;

    case "THINK":
      return <Think comp_id={id} />;

    case "THINK_TIMER":
      return <ThinkWithTimer comp_id={id} />;

    default:
      return React.null;
  }
};
