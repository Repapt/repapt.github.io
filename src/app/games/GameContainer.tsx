import Unity, { UnityContent } from "react-unity-webgl";

const unityProvider = new UnityContent(
  "Build/WebGL.json",
  "Build/UnityLoader.js",
);

export default function GameContainer() {

  return (
    <Unity unityContent={unityProvider}/>
  );
}