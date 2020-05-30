import { setConfig } from "react-hot-loader";

setConfig({
  // This means hooks won't be run again when a component gets hot-swapped.
  // That's both a blessing and a course: An useEffect that makes and API call
  // won't run again so we don't have to wait for the request to be done until
  // the component is ready. On the other hand, changes to hook bodies will
  // require a manual reload of the page.
  reloadHooks: false,
  logLevel: "log",
});
