import leftArrow from "../public/icons/arrows/left.png";
import rightArrow from "../public/icons/arrows/right.png";
import upArrow from "../public/icons/arrows/up.png";

export default class Direction {
  constructor(direction, text, visual) {
    this.direction = direction;
    this.text = text;
    this.visual = visual;

    switch (direction) {
      case DirectionTypes.FORWARD:
        this.directionImage = upArrow;
        break;
      case DirectionTypes.LEFT:
        this.directionImage = leftArrow;
        break;
      case DirectionTypes.RIGHT:
        this.directionImage = rightArrow;
        break;
    }
  }
}

export const DirectionTypes = {
  LEFT: "left",
  RIGHT: "right",
  FORWARD: "forward",
};
