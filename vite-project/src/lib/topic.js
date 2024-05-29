import { css } from "styled-components";

export const topicStyles = {
  purple_light: css`
    background-color: #e9d4ff;
    color: #9a48f1;
  `,
  purple_dark: css`
    background-color: #9a48f1;
    color: #e9d4ff;
  `,
  orange_light: css`
    background-color: #ffe4c2;
    color: #ff6d00;
  `,
  orange_dark: css`
    background-color: #ff6d00;
    color: #ffe4c2;
  `,

  green_light: css`
    background-color: #b4fdd1;
    color: #06b16e;
  `,
  green_dark: css`
    background-color: #06b16e;
    color: #b4fdd1;
  `,
  gray: css`
    background-color: #94a6be;
    color: #ffffff;
  `,
};

export function getColor(topic) {
  switch (topic) {
    case "Web Design":
      return "orange";
    case "Copywriting":
      return "purple";
    case "Research":
      return "green";
    default:
      return "gray";
  }
}

export function getStyle(topic, theme) {
  const color = getColor(topic);
  let style = topicStyles[`${color}_${theme}`];

  if (!style) style = topicStyles.gray;

  return style;
}
