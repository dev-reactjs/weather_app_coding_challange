import * as React from "react";
export const navigationRef = React.createRef();

class CommonHelper {
  // navigation between screen
  navigateToPage = (route, params) => {
    navigationRef.current?.navigate(route, params);
  };

  // back to previous screen
  goBack = () => {
    navigationRef.current?.goBack();
  };
}
export default CommonHelper;
