export const writeClipboard = async (data: string) => {
  if (!data) return;
  await navigator.clipboard.writeText(data);
};
