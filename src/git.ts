import { runCommand } from "./runCommand.ts";

export const log = async (options?: {
  count?: number;
  oneline?: boolean;
}): Promise<{
  code: number;
  stdout?: string;
  stderr?: string;
  success: boolean;
}> => {
  const _options: string[] = [
    options?.count ? `--max-count=${options.count}` : "",
    options?.oneline ? "--oneline" : "",
  ].filter((it) => it);
  const result =
    _options.length > 0
      ? await runCommand("git", "log", ..._options)
      : await runCommand("git", "log");
  if (result.code === 0) {
    console.log(result.stdout);
    return {
      code: result.code,
      success: result.success,
      stdout: result.stdout,
    };
  } else {
    console.log(result.stderr);
    return {
      code: result.code,
      success: result.success,
      stderr: result.stderr,
    };
  }
};
