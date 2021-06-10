import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Don't know why",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ccad9b1271d1a9701f84380bb217da7d923a6c4f-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7994",
      color: ["#985B60", "#1B283B"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Stay",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ccad9b1271d1a9701f84380bb217da7d923a6c4f-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7998",
      color: ["#985B60", "#1B283B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sodium",
      artist: "Philanthrope, Tesk",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9149",
      color: ["#69CCF6", "#F2E767"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Faces",
      artist: "Knowmadic",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8554",
      color: ["#69CCF6", "#F2E767"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Foggy Road",
      artist: "Toonorth",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7834",
      color: ["#69CCF6", "#F2E767"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
