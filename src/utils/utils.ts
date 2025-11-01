export function formatSecondsToMinutes(totalSeconds: number): string {
  const minutes: number = Math.floor(totalSeconds / 60);
  const remainingSeconds: number = Math.floor(totalSeconds % 60);

  const formattedMinutes: string = String(minutes).padStart(2, "0");
  const formattedSeconds: string = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
