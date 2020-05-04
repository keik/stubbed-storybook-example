import * as React from "react";

const Child = () => <div>child</div>;

export default Child;

export const ChildContainer = () => {
  // Do side-effect stuffs in container component
  // like async API fetching like this stub
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 3000));
      setIsLoading(false);
    })();
  }, []);
  return isLoading ? "loading..." : <Child />;
};
