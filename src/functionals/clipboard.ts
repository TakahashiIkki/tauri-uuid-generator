export const writeClipboard = async (data: string) => {
  await navigator.clipboard.writeText(data);
};
