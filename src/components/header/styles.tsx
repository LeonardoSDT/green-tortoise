import styled from "@emotion/styled";
import { ListItem } from "@mui/material";

export const Li = styled(ListItem)`
  width: fit-content;
  padding: 5px;

  a {
    position: relative;
    &:before {
      position: absolute;
      content: "";
      width: 0;
      height: 2px;
      background-color: #166534;
      transition: width 0.2s ease-in;
      bottom: 0;
    }
  }

  ul {
    display: none;
  }

  &:hover {
    & > a {
      color: #166534;
      &:before {
        width: 100%;
      }
    }

    & > ul {
      display: block;
      animation: fadeIn 0.5s forwards;
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
