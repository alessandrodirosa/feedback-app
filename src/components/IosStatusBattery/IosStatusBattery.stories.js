import { IosStatusBattery } from ".";

export default {
  title: "Components/IosStatusBattery",
  component: IosStatusBattery,
};

export const Default = {
  args: {
    type: "mid",
    charge: true,
    className: {},
    vecClassName: {},
    overlapGroupClassName: {},
    batteryFillClassName: {},
    batteryFrame:
      "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/battery-frame-17.svg",
  },
};
