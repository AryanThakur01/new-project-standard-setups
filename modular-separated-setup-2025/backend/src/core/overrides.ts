// We use this file to override global objects or functions with custom implementations.

// core/console.ts -> override global console
const RESET = '\x1b[0m';
const COLORS = {
  log: '\x1b[32m', // green
  info: '\x1b[36m', // cyan
  warn: '\x1b[33m', // yellow
  error: '\x1b[31m', // red
};

// Save native console so we can still call it
const nativeConsole = globalThis.console;

globalThis.console = new Proxy(nativeConsole, {
  get(target, prop) {
    if (prop in COLORS) {
      return (...args: unknown[]) => {
        const color = COLORS[prop as keyof typeof COLORS];
        Reflect.get(target, prop).call(
          target,
          `${color}[${prop.toString().toUpperCase()}]${RESET}`,
          ...args,
        );
      };
    }
    return target[prop as keyof typeof target];
  },
});
