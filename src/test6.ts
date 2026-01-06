type UploadStatus = InProgress | Success | Failure;

// ディスクリミネータ"type"を追加
interface InProgress {
  type: "InProgress";
  done: boolean;
  progress: number;
}
interface Success {
  type: "Success";
  done: boolean;
}
interface Failure {
  type: "Failure";
  done: boolean;
  error: Error;
}

function printStatus(status: UploadStatus) {
  /*
  if (status.type === "InProgress" && status.done == false) {
    console.log(`アップロード中:${status.progress}%`);
  }
   */
  switch (status.type) {
    case "InProgress":
      if (status.done == false) {
        console.log(`アップロード中:${status.progress}%`);
      }
      break;
    case "Success":
      break;
    case "Failure":
      break;
    default:
      break;
  }
}
