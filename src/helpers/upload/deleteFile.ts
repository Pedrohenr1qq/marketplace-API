import fs from 'fs'

export const deleteFile = async(fileName: string) => {
  try {
    await fs.promises.stat(fileName);
  } catch (error: any) {
    return;
  }

  await fs.promises.unlink(fileName);
}