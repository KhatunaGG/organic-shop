import React from "react";


type EcobazarIconPropsType = {
  location: string;
}

const EcobazarIcon = ({location}: EcobazarIconPropsType) => {
  return (
    <svg
      width="140"
      height="25"
      viewBox="0 0 140 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.048 5.204V11.732H11.728V14.708H4.048V21.524H12.688V24.5H0.4V2.228H12.688V5.204H4.048ZM15.0052 15.668C15.0052 13.8547 15.3679 12.2653 16.0933 10.9C16.8399 9.51333 17.8639 8.44667 19.1653 7.7C20.4666 6.95333 21.9599 6.58 23.6453 6.58C25.7786 6.58 27.5386 7.092 28.9253 8.116C30.3333 9.11867 31.2826 10.5587 31.7733 12.436H27.8373C27.5173 11.5613 27.0053 10.8787 26.3013 10.388C25.5973 9.89733 24.7119 9.652 23.6453 9.652C22.1519 9.652 20.9573 10.1853 20.0613 11.252C19.1866 12.2973 18.7493 13.7693 18.7493 15.668C18.7493 17.5667 19.1866 19.0493 20.0613 20.116C20.9573 21.1827 22.1519 21.716 23.6453 21.716C25.7573 21.716 27.1546 20.788 27.8373 18.932H31.7733C31.2613 20.724 30.3013 22.1533 28.8933 23.22C27.4853 24.2653 25.7359 24.788 23.6453 24.788C21.9599 24.788 20.4666 24.4147 19.1653 23.668C17.8639 22.9 16.8399 21.8333 16.0933 20.468C15.3679 19.0813 15.0052 17.4813 15.0052 15.668ZM42.0968 24.788C40.4328 24.788 38.9288 24.4147 37.5848 23.668C36.2408 22.9 35.1848 21.8333 34.4168 20.468C33.6488 19.0813 33.2648 17.4813 33.2648 15.668C33.2648 13.876 33.6594 12.2867 34.4488 10.9C35.2381 9.51333 36.3154 8.44667 37.6808 7.7C39.0461 6.95333 40.5714 6.58 42.2568 6.58C43.9421 6.58 45.4674 6.95333 46.8328 7.7C48.1981 8.44667 49.2754 9.51333 50.0648 10.9C50.8541 12.2867 51.2488 13.876 51.2488 15.668C51.2488 17.46 50.8434 19.0493 50.0328 20.436C49.2221 21.8227 48.1128 22.9 46.7048 23.668C45.3181 24.4147 43.7821 24.788 42.0968 24.788ZM42.0968 21.62C43.0354 21.62 43.9101 21.396 44.7208 20.948C45.5528 20.5 46.2248 19.828 46.7368 18.932C47.2488 18.036 47.5048 16.948 47.5048 15.668C47.5048 14.388 47.2594 13.3107 46.7688 12.436C46.2781 11.54 45.6274 10.868 44.8168 10.42C44.0061 9.972 43.1314 9.748 42.1928 9.748C41.2541 9.748 40.3794 9.972 39.5688 10.42C38.7794 10.868 38.1501 11.54 37.6808 12.436C37.2114 13.3107 36.9768 14.388 36.9768 15.668C36.9768 17.5667 37.4568 19.0387 38.4168 20.084C39.3981 21.108 40.6248 21.62 42.0968 21.62ZM57.543 9.492C58.1617 8.63867 59.0043 7.94533 60.071 7.412C61.159 6.85733 62.3643 6.58 63.687 6.58C65.2443 6.58 66.6523 6.95333 67.911 7.7C69.1697 8.44667 70.1617 9.51333 70.887 10.9C71.6123 12.2653 71.975 13.8333 71.975 15.604C71.975 17.3747 71.6123 18.964 70.887 20.372C70.1617 21.7587 69.159 22.8467 67.879 23.636C66.6203 24.404 65.223 24.788 63.687 24.788C62.3217 24.788 61.1057 24.5213 60.039 23.988C58.9937 23.4547 58.1617 22.772 57.543 21.94V24.5H53.895V0.82H57.543V9.492ZM68.263 15.604C68.263 14.388 68.007 13.3427 67.495 12.468C67.0043 11.572 66.343 10.9 65.511 10.452C64.7003 9.98267 63.8257 9.748 62.887 9.748C61.9697 9.748 61.095 9.98267 60.263 10.452C59.4523 10.9213 58.791 11.604 58.279 12.5C57.7883 13.396 57.543 14.452 57.543 15.668C57.543 16.884 57.7883 17.9507 58.279 18.868C58.791 19.764 59.4523 20.4467 60.263 20.916C61.095 21.3853 61.9697 21.62 62.887 21.62C63.8257 21.62 64.7003 21.3853 65.511 20.916C66.343 20.4253 67.0043 19.7213 67.495 18.804C68.007 17.8867 68.263 16.82 68.263 15.604ZM73.4065 15.604C73.4065 13.8333 73.7692 12.2653 74.4945 10.9C75.2412 9.53467 76.2438 8.47867 77.5025 7.732C78.7825 6.964 80.1905 6.58 81.7265 6.58C83.1132 6.58 84.3185 6.85733 85.3425 7.412C86.3878 7.94533 87.2198 8.61733 87.8385 9.428V6.868H91.5185V24.5H87.8385V21.876C87.2198 22.708 86.3772 23.4013 85.3105 23.956C84.2438 24.5107 83.0278 24.788 81.6625 24.788C80.1478 24.788 78.7612 24.404 77.5025 23.636C76.2438 22.8467 75.2412 21.7587 74.4945 20.372C73.7692 18.964 73.4065 17.3747 73.4065 15.604ZM87.8385 15.668C87.8385 14.452 87.5825 13.396 87.0705 12.5C86.5798 11.604 85.9292 10.9213 85.1185 10.452C84.3078 9.98267 83.4332 9.748 82.4945 9.748C81.5558 9.748 80.6812 9.98267 79.8705 10.452C79.0598 10.9 78.3985 11.572 77.8865 12.468C77.3958 13.3427 77.1505 14.388 77.1505 15.604C77.1505 16.82 77.3958 17.8867 77.8865 18.804C78.3985 19.7213 79.0598 20.4253 79.8705 20.916C80.7025 21.3853 81.5772 21.62 82.4945 21.62C83.4332 21.62 84.3078 21.3853 85.1185 20.916C85.9292 20.4467 86.5798 19.764 87.0705 18.868C87.5825 17.9507 87.8385 16.884 87.8385 15.668ZM98.582 21.524H106.582V24.5H94.358V21.524L102.39 9.844H94.358V6.868H106.582V9.844L98.582 21.524ZM108.236 15.604C108.236 13.8333 108.599 12.2653 109.324 10.9C110.071 9.53467 111.074 8.47867 112.332 7.732C113.612 6.964 115.02 6.58 116.556 6.58C117.943 6.58 119.148 6.85733 120.172 7.412C121.218 7.94533 122.05 8.61733 122.668 9.428V6.868H126.348V24.5H122.668V21.876C122.05 22.708 121.207 23.4013 120.14 23.956C119.074 24.5107 117.858 24.788 116.492 24.788C114.978 24.788 113.591 24.404 112.332 23.636C111.074 22.8467 110.071 21.7587 109.324 20.372C108.599 18.964 108.236 17.3747 108.236 15.604ZM122.668 15.668C122.668 14.452 122.412 13.396 121.9 12.5C121.41 11.604 120.759 10.9213 119.948 10.452C119.138 9.98267 118.263 9.748 117.324 9.748C116.386 9.748 115.511 9.98267 114.7 10.452C113.89 10.9 113.228 11.572 112.716 12.468C112.226 13.3427 111.98 14.388 111.98 15.604C111.98 16.82 112.226 17.8867 112.716 18.804C113.228 19.7213 113.89 20.4253 114.7 20.916C115.532 21.3853 116.407 21.62 117.324 21.62C118.263 21.62 119.138 21.3853 119.948 20.916C120.759 20.4467 121.41 19.764 121.9 18.868C122.412 17.9507 122.668 16.884 122.668 15.668ZM133.828 9.428C134.361 8.532 135.065 7.83867 135.94 7.348C136.836 6.836 137.892 6.58 139.108 6.58V10.356H138.18C136.751 10.356 135.663 10.7187 134.916 11.444C134.191 12.1693 133.828 13.428 133.828 15.22V24.5H130.18V6.868H133.828V9.428Z"
        fill={location === 'footer' ? '#dbdbdb' : '#002603'}
      />
    </svg>
  );
};

export default EcobazarIcon;
