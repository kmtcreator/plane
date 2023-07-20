import React from "react";

import type { Props } from "./types";

export const CloudUploadIcon: React.FC<Props> = ({
  width = "24",
  height = "24",
  color = "rgb(var(--color-text-200))",
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M5.25 16.0004C3.81667 16.0004 2.58333 15.4837 1.55 14.4504C0.516667 13.4171 0 12.1837 0 10.7504C0 9.45039 0.4125 8.30456 1.2375 7.31289C2.0625 6.32122 3.125 5.72539 4.425 5.52539C4.75833 3.90872 5.54167 2.58789 6.775 1.56289C8.00833 0.537891 9.43333 0.0253906 11.05 0.0253906C12.9333 0.0253906 14.5125 0.704557 15.7875 2.06289C17.0625 3.42122 17.7 5.05039 17.7 6.95039V7.55039C18.9 7.51706 19.9167 7.90456 20.75 8.71289C21.5833 9.52122 22 10.5421 22 11.7754C22 12.9254 21.5833 13.9171 20.75 14.7504C19.9167 15.5837 18.925 16.0004 17.775 16.0004H11.75C11.35 16.0004 11 15.8504 10.7 15.5504C10.4 15.2504 10.25 14.9004 10.25 14.5004V8.05039L8.7 9.60039C8.55 9.75039 8.375 9.82122 8.175 9.81289C7.975 9.80456 7.8 9.72539 7.65 9.57539C7.5 9.42539 7.425 9.24622 7.425 9.03789C7.425 8.82956 7.5 8.65039 7.65 8.50039L10.475 5.67539C10.5583 5.59206 10.6417 5.53372 10.725 5.50039C10.8083 5.46706 10.9 5.45039 11 5.45039C11.1 5.45039 11.1917 5.46706 11.275 5.50039C11.3583 5.53372 11.4417 5.59206 11.525 5.67539L14.375 8.52539C14.525 8.67539 14.6 8.85039 14.6 9.05039C14.6 9.25039 14.525 9.42539 14.375 9.57539C14.225 9.72539 14.0458 9.80039 13.8375 9.80039C13.6292 9.80039 13.45 9.72539 13.3 9.57539L11.75 8.05039V14.5004H17.775C18.525 14.5004 19.1667 14.2337 19.7 13.7004C20.2333 13.1671 20.5 12.5254 20.5 11.7754C20.5 11.0254 20.2333 10.3837 19.7 9.85039C19.1667 9.31706 18.525 9.05039 17.775 9.05039H16.2V6.95039C16.2 5.46706 15.6958 4.19206 14.6875 3.12539C13.6792 2.05872 12.4333 1.52539 10.95 1.52539C9.46667 1.52539 8.21667 2.05872 7.2 3.12539C6.18333 4.19206 5.675 5.46706 5.675 6.95039H5.2C4.16667 6.95039 3.29167 7.31289 2.575 8.03789C1.85833 8.76289 1.5 9.65872 1.5 10.7254C1.5 11.7587 1.86667 12.6462 2.6 13.3879C3.33333 14.1296 4.21667 14.5004 5.25 14.5004H8C8.21667 14.5004 8.39583 14.5712 8.5375 14.7129C8.67917 14.8546 8.75 15.0337 8.75 15.2504C8.75 15.4671 8.67917 15.6462 8.5375 15.7879C8.39583 15.9296 8.21667 16.0004 8 16.0004H5.25Z"
    />
  </svg>
);