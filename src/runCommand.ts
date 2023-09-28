const decoder = new TextDecoder();

export const runCommand = async (command: string, ...args: string[]) => {
  const process = new Deno.Command(command, {
    args: [...args],
  });
  const { code, stdout, stderr, success } = await process.output();

  return {
    code,
    stdout: decoder.decode(stdout),
    stderr: decoder.decode(stderr),
    success,
  };
};
